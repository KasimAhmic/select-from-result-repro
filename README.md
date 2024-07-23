# selectFromResult Repro

## Issue
https://github.com/reduxjs/redux-toolkit/issues/3989

## Problem

```typescript
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
```

## Running

```bash
yarn dev
```

Review the console output.
