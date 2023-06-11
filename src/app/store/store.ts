import { configureStore } from '@reduxjs/toolkit';
import fieldset from '../../entities/fieldset/models/reducers/fieldsetSlice';
import cron from '../../features/models/reducers/cronSlice';

export const store = configureStore({
   reducer: {
      fieldset,
      cron
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


