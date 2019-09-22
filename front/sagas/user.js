import {all, call, delay, fork, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from '../reducers/user';


const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI(loginData) {
  //서버 요청
  return axios.post('/login', loginData);
}

function* login(action) {
  try {
    yield call(loginAPI, action.data); //동기 호출
    yield put( { //put = dispatch
      type: LOG_IN_SUCCESS,
    })
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData) {
  return axios.post('http://localhost:3065/api/user/', signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data); // 동기 호출
    yield put({ // put=dispatch
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
  yield all([
    fork(watchLogin), //비동기 호출
    fork(watchSignUp),
  ]);
  // yield all([
  // 	fork(watchLogin),
  // 	helloSaga(),
  // ]);
}