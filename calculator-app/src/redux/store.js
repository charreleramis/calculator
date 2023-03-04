import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import modeReducer from './slices/modes.slice';
import historyReducer from './slices/history.slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    mode: modeReducer,
    history: historyReducer
  }
})