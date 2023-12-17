import { FC } from 'react';

import { useGetPostsQuery } from '../apis/json-placeholder.api';

export const PostsProvider: FC = () => {
  useGetPostsQuery();

  return null;
};
