import * as constants from '../constants/common.constants';


export const initialState = {
  isLoading: false,
  error: '',
  authData: null
};

export const commonModalReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.SET_ERROR_MESSAGE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case constants.SET_AUTH_DATA:
      return {
        ...state,
        authData: action.payload
      };
    default:
      return state;
  }
};
