import { createSelector } from '@reduxjs/toolkit'

const selectState = state => state.checkversion

export const selectCheckversion = createSelector(selectState, state => state)
