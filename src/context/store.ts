import {configureStore} from '@reduxjs/toolkit';
import authReducer from '@app/context/features/auth/authSlice';
import patronReducer from '@app/context/features/patron/patronSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patron: patronReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
