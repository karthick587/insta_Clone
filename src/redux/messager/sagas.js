import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';
import Authactions from '../auth/actions';
const MessengerSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_CONVERSATION_LIST, getConversationList),
        yield takeEvery(actions.SEND_MESSAGE, sendMessage),

    ]);
};



const getConversationList = function* (data) {
    const { payload } = data
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/conv/byId/${payload}`)
        );

        yield put({ type: actions.SET_CONVERSATION_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};

const sendMessage = function* (data) {
    const { payload } = data
    console.log(payload)
    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/message/send`, payload)
        );
        console.log(result)
        //  yield put({ type: actions.SET_CONVERSATION_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
}

export default MessengerSaga;