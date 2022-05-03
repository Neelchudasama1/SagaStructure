import * as constants from '../constants/checkversion.constants';

export const checkversionDetails = payload => ({
  type: constants.GET_CHECKVERSION,
  payload,
});

export const checkversionDetailsSuccessful = payload => ({
  type: constants.GET_CHECKVERSION_SUCCESSFUL,
  payload,
});

export const checkversionDetailsFailed = () => ({
  type: constants.GET_CHECKVERSION_FAILED,

});
