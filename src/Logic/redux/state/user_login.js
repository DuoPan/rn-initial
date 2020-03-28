import {put, takeLeading} from 'redux-saga/effects';
import createState from './state';
import useLogin from '../../service/api/method/user_login';
import {dataStatus, transformApiData} from '../transform';
import {
  getApiResponse,
  handleError,
  showLoading,
  hideLoading,
} from '../actions';
import TDataStatus from '../data_status';
import {TString, TArray, declareObject} from '../../primitive_type';

export const TUserLogin = declareObject({
  status: TDataStatus.isRequired,
  data: declareObject({
    access_session_id: TString.isRequired,
    user: declareObject({
      email: TString,
      roles: TArray,
    }),
  }),
  error: TArray,
});

export const userLoginLoading = 'userLogin.1';

export default createState(
  'userLogin',
  {
    status: dataStatus.INIT,
    data: {
      access_session_id: '',
      user: null,
    },
    errors: [],
  },
  ({addSaga, reduce, reduceError, reduceReset}) => {
    addSaga(function* () {
      yield takeLeading('USER_LOGIN', function* (action) {
        try {
          yield put(showLoading(userLoginLoading));
          const apiData = yield useLogin(action['postData']);
          yield put(getApiResponse('USER_LOGIN_R', apiData));
          yield put(hideLoading(userLoginLoading));
        } catch (e) {
          yield put(handleError('USER_LOGIN_F', e));
          yield put(hideLoading(userLoginLoading));
        }
      });
    });

    reduce('USER_LOGIN_R', function (state, action) {
      let data = Object.assign({}, state);
      const apiData = transformApiData(action.data);
      data.status = apiData.status;
      if (data.status === dataStatus.FAILURE) {
        data.errors = apiData.errors;
      } else if (data.status === dataStatus.SUCCESS) {
        data.data = apiData.data;
      }
      return data;
    });
    reduceError('USER_LOGIN_F');
    reduceReset('USER_LOGIN_RESET');
  }
);

export const userLogin = {
  login: (postData) => ({type: 'USER_LOGIN', postData}),
  reset: () => ({type: 'USER_LOGIN_RESET'}),
};
