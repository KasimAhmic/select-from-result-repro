import { FC } from 'react';

import { postSelectors } from '../apis/json-placeholder.api';
import { usePostSelector } from '../hooks/useGetPosts';
import { tss } from '../tss';
import { debugObject } from '../util';

const useStyles = tss.create((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
  },
}));

interface PostProps {
  postId: number;
}

export const Post: FC<PostProps> = ({ postId }) => {
  const { classes } = useStyles();

  const title = usePostSelector((posts) => postSelectors.selectById(posts, postId).title);
  const body = usePostSelector((posts) => postSelectors.selectById(posts, postId).body);
  const userId = usePostSelector((posts) => postSelectors.selectById(posts, postId).userId);
  const post = usePostSelector((posts) => postSelectors.selectById(posts, postId));

  if (postId === 1) {
    debugObject('Title', title);
    debugObject('Body', body);
    debugObject('User Id', userId);
    debugObject('Post', post);
  }

  return (
    <div className={classes.root}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
