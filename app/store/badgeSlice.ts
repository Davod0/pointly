import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface BadgeState {
  value: string
}

const initialState: BadgeState = {
  value: 'Home',
}

export const badgeSlice = createSlice({
  name: 'badge',
  initialState,
  reducers: {
    setBadgeTitle: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setBadgeTitle } = badgeSlice.actions
export default badgeSlice.reducer


// Selector to get the badge value from the state
export const selectBadgeValue = (state: RootState) => state.badge.value
