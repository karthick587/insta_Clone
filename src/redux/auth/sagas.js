import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';

const AuthSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_USER_DETAILS, getUsersDetails),
        yield takeEvery(actions.REGISTER_USER, registeruser),
        yield takeEvery(actions.GET_AUTHETICATRION, Aunthentication),
        yield takeEvery(actions.GET_VERIFY_TOCKET, VerifyTocket),
        yield takeEvery(actions.UPDATE_USER_DETAILS, UdateUserDetails),

    ]);
};


const UdateUserDetails = function* (data) {
    const { payload } = data;
    console.log(payload)

    try {
        const result = yield call(() =>
            axios.put(`${API_URL}/api/user/update`, payload)

        );
        console.log(result)
        yield put({ type: actions.GET_USER_DETAILS, payload: payload.id });
    } catch (err) {
        console.log(err)
    }
}

const VerifyTocket = function* (data) {

   
    const { payload } = data;

    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/verifytoken/${payload}`)
        );
        if (result.data.statusCode === 200) {
            yield put({ type: actions.SET_USER_DETAILS, payload: result.data.result });
            yield put({ type: actions.SET_AUTHETICATRION, payload: true });
            yield put({ type: actions.SET_LOADER, payload: false });
        } else {
            yield put({ type: actions.SET_AUTHETICATRION, payload: false });
            yield put({ type: actions.SET_LOADER, payload: false });
            localStorage.removeItem('token');
        }
    } catch (err) {
        console.log(err)
    }
  
}
const Aunthentication = function* (data) {
    yield put({ type: actions.SET_LOADER, payload: true });
    const { userData } = data;
    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/login/validate`, userData)

        );
        console.log(result)

        if (result.data.statusCode === 200) {
            localStorage.setItem('token', result.data.token);
            yield put({ type: actions.GET_VERIFY_TOCKET, payload: result.data.token });

        } else {
            yield put({ type: actions.SET_LOADER, payload: false });
            yield put({ type: actions.SET_LOGIN_MESSAGE, payload: "InVlid Email Or Password" });
        }

    } catch (err) {
        console.log(err)
    }
    
}
const getUsersDetails = function* (data) {
    const { payload } = data;

    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/users/list/${payload}`)
        );
        yield put({ type: actions.SET_USER_DETAILS, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};
const registeruser = function* (data) {
    yield put({ type: actions.SET_LOADER, payload: true });
    const { userData } = data;
    try {
        const result = yield call(() =>
            axios.post(
                `${API_URL}/api/user/register`,
                userData

            )
        );
        if (result.data.statusCode === 200) {
            yield put({ type: actions.SET_REGISTER_NAVIGATE, payload: true });
        }

console.log(result)

    } catch (err) {
        // yield put({
        //   type: actions.SET_CURRENT_USER,
        //   payload: { isAuthenticated: false },
        // });
    }
    yield put({ type: actions.SET_LOADER, payload: false });
}

export default AuthSaga;