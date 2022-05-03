import { call, put, takeLatest } from 'redux-saga/effects';
import { get, isEmpty } from 'lodash';
import * as actions from '../actions/checkversion.action';
import * as constants from '../constants/checkversion.constants';
import NetworkApi from '../../api/NetworkApi';
import paths from '../../api/path';
 import * as commonActions from '../actions/common.actions';

function* getcheckversionDetails(request = {}) {
  try {
    const response = yield call(
      NetworkApi.post,
      paths.checkVersionAPI(2),
      { "customerId": 0, "appVersion": "2.6", "appType": 1, "restaurantId": 147, "deviceToken": "cQuf4cDe90XSoC9oQbXiM4:APA91bGRYpopUqAmbKTaKRdmPEW6RBaAhEbpy2VxG8sQEYYl_8Sa6VyjToZ50FsczEJoNQJxYTGdHEI8kACBQEGuX5oRZa0LT_2ow6h0_BvBcJXCkeefPCpz9UWudAcK74RVAjHcJqte", "appCode": "1", "deviceName": "iPhone 11", "deviceModel": "iPhone 11", "locationId": 0, "languageId": 1, "latitude": 0, "longitude": 0 },

    );
    console.log("response ", response)

    const checkversionDetails = get(response, 'data.data', []);
    if (!isEmpty(checkversionDetails)) {
      yield put(
        actions.checkversionDetailsSuccessful(checkversionDetails)
      );
    } else {
      yield put(actions.checkversionDetailsFailed(''));
      const err = {
        title: 'Info',
        msg: 'There is no status available for this loan'
      };
       yield put(commonActions.commonModal(err));
    }
  } catch (e) {
    console.log("error ", e)

    yield put(actions.checkversionDetailsFailed(''));
    const err = {
      title: 'Error',
      msg: e.modalMessage,
      status: e.status
    };
     yield put(commonActions.commonModal(err));
  }
}

export function* fetchCheckversionDetails() {
  yield takeLatest(constants.GET_CHECKVERSION, getcheckversionDetails);
}

export function* fetchLoanSelectedDetails() {
  yield takeLatest('', '');
}
