import { configureStore } from '@reduxjs/toolkit';
import navSlice from './slices/navSlice';

const store = configureStore({
  reducer: {
    navSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
