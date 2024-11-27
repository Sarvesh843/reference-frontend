import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogActions from '@mui/material/DialogActions';

import Markdown from 'src/components/markdown';
import Scrollbar from 'src/components/scrollbar';
import EmptyContent from 'src/components/empty-content';

import PostDetailsHero from './post-details-hero';

// ----------------------------------------------------------------------

export default function PostDetailsPreview({
  postTitle,
  coverImageDetails,
  content,
  description,
  //
  open,
  isValid,
  onClose,
  onSubmit,
  isSubmitting,
}) {
   console.log("post-details-preview")
  const hasContent = postTitle || description || content || coverImageDetails;

  const hasHero = postTitle || coverImageDetails;

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Preview
        </Typography>

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
          onClick={onSubmit}
        >
          Post
        </LoadingButton>
      </DialogActions>

      <Divider />

      {hasContent ? (
        <Scrollbar>
          {hasHero && <PostDetailsHero postTitle={postTitle} coverImageDetails={coverImageDetails} />}

          <Container sx={{ mt: 5, mb: 10 }}>
            <Stack
              sx={{
                maxWidth: 720,
                mx: 'auto',
              }}
            >
              <Typography variant="h6">
               Description:
              </Typography>
              <Typography  sx={{ mb: 5 }}>
               {description}
              </Typography>

              <Markdown sx={{ mb: 5 }} children={content} />
            </Stack>
          </Container>
        </Scrollbar>
      ) : (
        <EmptyContent filled title="Empty Content!" />
      )}
    </Dialog>
  );
}

PostDetailsPreview.propTypes = {
  content: PropTypes.string,
  coverImageDetails: PropTypes.string,
  description: PropTypes.string,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  open: PropTypes.bool,
  postTitle: PropTypes.string,
};
