import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { fShortenNumber } from 'src/utils/format-number';

import { useGetPost } from 'src/api/blog';
import { POST_PUBLISH_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import EmptyContent from 'src/components/empty-content';

import PostDetailsHero from '../post-details-hero';
// import PostCommentList from '../post-comment-list';
// import PostCommentForm from '../post-comment-form';
import { PostDetailsSkeleton } from '../post-skeleton';
import PostDetailsToolbar from '../post-details-toolbar';

// ----------------------------------------------------------------------

export default function PostDetailsView({ id }) {
  // eslint-disable-next-line no-unused-vars
  const [publish, setPublish] = useState('');
  const { post, postLoading, postError } = useGetPost(id);
  const handleChangePublish = useCallback((newValue) => {
    setPublish(newValue);
  }, []);

  useEffect(() => {
    if (post) {
      setPublish(post?.data?.publish);
    }
  }, [post]);

  const renderSkeleton = <PostDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${postError?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.blog.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{
        py: 20,
      }}
    />
  );
  console.log("post-details-view",post)
  const renderPost = post && (
    <>
      <PostDetailsToolbar
        backLink={paths.dashboard.blog.root}
        editLink={paths.dashboard.blog.edit(`${post?.data?.blogId}`)}
        liveLink={paths.dashboard.blog.details(`${post?.data?.blogId}`)}
        publish={post?.data?.status || ''}
        onChangePublish={handleChangePublish}
        publishOptions={POST_PUBLISH_OPTIONS}
      />

      <PostDetailsHero
        postTitle={post?.data?.postTitle}
        coverImageDetails={post?.data?.coverImageDetails?.preview}
        createdAt={post?.data?.created_at}
      />

      <Stack
        sx={{
          maxWidth: 720,
          mx: 'auto',
          mt: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h6">Description:</Typography>
        <Typography sx={{ mb: 5 }}>{post?.data?.description}</Typography>

        <Markdown sx={{ mb: 5 }} children={post?.data?.content} />

        <Stack
          spacing={3}
          sx={{
            py: 3,
            borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
            // borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h6">Tags:</Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {post?.data?.tag.map((tag) => (
              <Chip key={tag} label={tag} variant="soft" />
            ))}
          </Stack>

          {/* <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  color="error"
                  icon={<Iconify icon="solar:heart-bold" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" />}
                />
              }
              label={fShortenNumber(post.totalFavorites)}
              sx={{ mr: 1 }}
            />

            <AvatarGroup
              sx={{
                [`& .${avatarGroupClasses.avatar}`]: {
                  width: 32,
                  height: 32,
                },
              }}
            >
              {post.favoritePerson.map((person) => (
                <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
              ))}
            </AvatarGroup>
          </Stack> */}
        </Stack>

        {/* <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
          <Typography variant="h4">Comments</Typography>

          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            ({post.comments.length})
          </Typography>
        </Stack> */}

        {/* <PostCommentForm /> */}

        {/* <Divider sx={{ mt: 5, mb: 2 }} /> */}

        {/* <PostCommentList comments={post.comments} /> */}
      </Stack>
    </>
  );

  return (
    <Container maxWidth={false}>
      {postLoading && renderSkeleton}

      {postError && renderError}

      {post && renderPost}
    </Container>
  );
}

PostDetailsView.propTypes = {
  id: PropTypes.string,
};
