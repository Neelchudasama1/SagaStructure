import * as constants from '../constants/common.constants';

export const commonModal = (payload) => ({
  type: constants.SET_ERROR_MESSAGE,
  payload
});

export const updateAuthData = (payload) => {
  return {
    type: constants.SET_AUTH_DATA,
    payload
  };
};
