import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';
import Authactions from '../auth/actions';
const MessengerSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_CONVERSATION_LIST, getConversationList),
    ]);
};



const getConversationList = function* (data) {
 const {payload}=data
    try {
        const result = yield call(() =>
            axios.get(`http://localhost:3001/api/conv/byId/${payload}`)
        );
        
        yield put({ type: actions.SET_CONVERSATION_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};



export default MessengerSaga;