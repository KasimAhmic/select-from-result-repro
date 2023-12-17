import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from '../@types/post';

export const postsAdapter = createEntityAdapter<Post, number>({
  selectId: (post) => post.id,
});

export const jsonPlaceHolderApi = createApi({
  reducerPath: 'jsonPlaceHolderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<EntityState<Post, number>, GetPostsArgs>({
      query: () => ({
        url: '/posts',
      }),
      transformResponse: (response: GetPostsResponse) =>
        postsAdapter.setAll(postsAdapter.getInitialState(), response),
    }),
  }),
});

export type GetPostsArgs = void;
export type GetPostsResponse = Post[];

export const {
  useGetPostsQuery,
  reducerPath: jsonPlaceholderApiReducerPath,
  reducer: jsonPlaceholderApiReducer,
  endpoints: jsonPlaceholderApiEndpoints,
  middleware: jsonPlaceholderApiMiddleware,
} = jsonPlaceHolderApi;

export const postSelectors = postsAdapter.getSelectors();
