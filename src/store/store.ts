import type { Action, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import cocktailsSlice from './cocktails/cocktailsSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    cocktails: cocktailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
