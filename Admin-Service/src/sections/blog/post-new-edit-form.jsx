import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import imageCompression from 'browser-image-compression';
import { useMemo, useState , useEffect, useCallback} from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { uploadBlogFileInAWSS3, deleteBlogFileFromAWSS3 } from 'src/utils/aws-s3-file-handler';

import { _tags } from 'src/_mock';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';

import {createBlog, updateBlog} from "../../api/blog";
import PostDetailsPreview from './post-details-preview';

// ----------------------------------------------------------------------

export default function PostNewEditForm({ currentPost }) {
  const router = useRouter();
  const [check,setcheck]=useState(true)
  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const preview = useBoolean();

  const NewBlogSchema = Yup.object().shape({
    postTitle: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    content: Yup.string().required('Content is required'),
    coverImageDetails: Yup.mixed().nullable().required('Cover is required'),
    tag: Yup.array().min(2, 'Must have at least 2 tag'),
    metaKeyword: Yup.array().min(1, 'Meta keywords is required'),
    // not required
    metaTitle: Yup.string(),
    metaDescription: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      status:currentPost?.data?.status || check ? "published" : "draft",
      postTitle: currentPost?.data?.postTitle || '',
      description: currentPost?.data?.description || '',
      content: currentPost?.data?.content || '',
      coverImageDetails: currentPost?.data?.coverImageDetails?.preview || null,
      tag: currentPost?.data?.tag || [],
      metaKeyword: currentPost?.data?.metaKeyword || [],
      metaTitle: currentPost?.data?.metaTitle || '',
      metaDescription: currentPost?.data?.metaDescription || '',
    }),
    [currentPost,check]
  );

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();
  useEffect(() => {
    if (currentPost) {
      reset(defaultValues);
    }
  }, [currentPost, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
 
      const formdata={...data,status:check ? "published" : "draft"};
      const response=createBlog(formdata);
      response.then((dataa)=>{ 
        reset();
        preview.onFalse();
        if(dataa.statusText==="OK" && dataa.status===200){
        enqueueSnackbar(currentPost ? 'Update success!' : 'Create success!');
        router.push(paths.dashboard.blog.root);
        }
      })
    } catch (error) {
      console.error(error);
    }
  });
  const onUpdate = handleSubmit(async (data) => {
    try {
 
      const formdata={...data,status:check ? "published" : "draft"};
      const response=updateBlog(formdata,currentPost?.data?.blogId);
      response.then((dataa)=>{ 
        reset();
        preview.onFalse();
        if(dataa.statusText==="OK" && dataa.status===200){
        enqueueSnackbar(currentPost ? 'Update success!' : 'Create success!');
        router.push(paths.dashboard.blog.root);
        }
      })
    } catch (error) {
      console.error(error);
    }
  });

  const uploadImage = useMemo(() => async (file) => {

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.5, // Adjust maximum size as needed
        maxWidthOrHeight: 800, // Adjust maximum width or height as needed
      });
 
    const formData = new FormData();
    formData.append('image', compressedFile);
 

    const response = await uploadBlogFileInAWSS3(formData)
    const imageUrl = response.data && response.data.data ? response?.data?.data : {};
    if (Object.keys(imageUrl).length > 0) {
      setValue('coverImageDetails', imageUrl);
      enqueueSnackbar('Uploaded successfully', { variant: 'success' });
    }
    else {
      console.error('Error in uploading file:', response);
      enqueueSnackbar('Error while uploading', { variant: 'error' });
    }
  } catch (error) {
    console.error('Error compressing image:', error);
    enqueueSnackbar('Error while compressing image', { variant: 'error' });
  }
},
  [setValue,enqueueSnackbar]);

  const handleDrop = useCallback(
    (acceptedFiles) => {
     const file = acceptedFiles[0];

     const newFile = Object.assign(file, {
       preview: URL.createObjectURL(file),
     });

     if (file) {
       uploadImage(newFile);
     }
   },
   [uploadImage]
 )


 const handleRemoveFile = useCallback(async() => {

    const dataToSend = { 'url': values.coverImageDetails.preview };
    await deleteBlogFileFromAWSS3(dataToSend)
      .then((data) => {
        setValue('coverImageDetails', null);
        enqueueSnackbar('Deleted successfully', { variant: 'success' });
      })
      .catch((err) => {
        console.error('Error in deleting files:', err);
        enqueueSnackbar('Error while deleting', { variant: 'error' });
      });
  }, [setValue,enqueueSnackbar,values]);

  function handlePublishToggleChange(e){
    const status=e.target.checked;
    setcheck(status);
  }

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="postTitle" label="Post Title" />

            <RHFTextField name="description" label="Description" multiline rows={3} />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="content" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Cover</Typography>
              <RHFUpload
                name="coverImageDetails"
                maxSize={8388608}
                onDrop={handleDrop}
                onDelete={handleRemoveFile}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Properties
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFAutocomplete
              name="tag"
              label="Tags"
              placeholder="+ Tags"
              multiple
              freeSolo
              options={_tags.map((option) => option)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              renderTags={(selected, getTagProps) =>
                selected.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                    size="small"
                    color="info"
                    variant="soft"
                  />
                ))
              }
            />

            <RHFTextField name="metaTitle" label="Meta title" />

            <RHFTextField
              name="metaDescription"
              label="Meta description"
              fullWidth
              multiline
              rows={3}
            />

            <RHFAutocomplete
              name="metaKeyword"
              label="Meta keywords"
              placeholder="+ Keywords"
              multiple
              freeSolo
              disableCloseOnSelect
              options={_tags.map((option) => option)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              renderTags={(selected, getTagProps) =>
                selected.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                    size="small"
                    color="info"
                    variant="soft"
                  />
                ))
              }
            />

            {/* <FormControlLabel control={<Switch defaultChecked />} label="Enable comments" /> */}
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>

        <FormControlLabel
          onChange={(e)=>{handlePublishToggleChange(e)}}
          control={<Switch defaultChecked />}
          label="Published"
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <Button color="inherit" variant="outlined" size="large" onClick={preview.onTrue}>
          Preview
        </Button>

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2 }}
        >
          {!currentPost ? 'Create Post' : 'Save Changes'}
        </LoadingButton>
      </Grid>
    </>
  );
  return (
    <FormProvider methods={methods} onSubmit={currentPost?onUpdate:onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Grid>

      <PostDetailsPreview
        postTitle={values.postTitle}
        content={values.content}
        description={values.description}
        coverImageDetails={
          typeof values.coverImageDetails === 'string' ? values.coverImageDetails : `${values.coverImageDetails?.preview}`
        }
        //
        open={preview.value}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={preview.onFalse}
        onSubmit={currentPost?onUpdate:onSubmit}
      />
    </FormProvider>
  );
}

PostNewEditForm.propTypes = {
  currentPost: PropTypes.object,
};
