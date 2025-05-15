import { configureStore } from '@reduxjs/toolkit'
import badgeReducer from './badgeSlice'

export const store = configureStore({
  reducer: {
    badge: badgeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch