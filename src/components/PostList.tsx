import { FC } from 'react';

import { postSelectors } from '../apis/json-placeholder.api';
import { usePostSelector } from '../hooks/useGetPosts';
import { tss } from '../tss';
import { Post } from './Post';

const useStyles = tss.create((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: 600,
  },
}));

export const PostList: FC = () => {
  const { classes } = useStyles();

  const postIds = usePostSelector((posts) => postSelectors.selectIds(posts));

  return (
    <div className={classes.root}>
      {postIds.map((postId) => (
        <Post key={postId} postId={postId} />
      ))}
    </div>
  );
};
