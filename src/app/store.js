import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from '../services/newsApi';
import themeReducer from '../features/themeSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    theme: themeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsApi.middleware),
});