import { EntityState } from '@reduxjs/toolkit';

import { Post } from '../@types/post';
import { jsonPlaceholderApiEndpoints, postsAdapter } from '../apis/json-placeholder.api';

export const usePostSelector = <T extends (posts: EntityState<Post, number>) => ReturnType<T>>(
  selectorFn: T,
): ReturnType<T> => {
  /**
   * Select from state expects a return type of Record<string, any> | undefined but we want to be able
   * to return any arbitrary type from the selector function.
   */
  return jsonPlaceholderApiEndpoints.getPosts.useQueryState(undefined, {
    selectFromResult: (state) => selectorFn(state.data ?? postsAdapter.getInitialState()),
  });
};
