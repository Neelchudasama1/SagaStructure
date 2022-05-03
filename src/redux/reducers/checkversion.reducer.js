import * as constants from '../constants/checkversion.constants'
export const initialState = {
  isLoading: false,
  error: '',
  checkversion: [],
};

export const checkversionReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.GET_CHECKVERSION:
      return {
        ...state,
        isLoading: true,
       // milestonesData: [],
        error: '',
      };
    case constants.GET_CHECKVERSION_SUCCESSFUL:
      return {
        ...state,
        checkversion: payload,
        isLoading: false,
        error: '',
      };
    case constants.GET_CHECKVERSION_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        checkversion: [],
      };

    default:
      return state;
  }
};
