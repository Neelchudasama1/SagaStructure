import { createSelector } from '@reduxjs/toolkit';

const selectState = (state) => state.modalMessage;

export const selectModalMessage = createSelector(selectState, (state) => state);

export const selectAuthData = createSelector(
  selectState,
  (state) => state.authData
);
