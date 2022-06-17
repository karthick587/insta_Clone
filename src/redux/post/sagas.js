import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';
import Authactions from '../auth/actions';
const PostSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_POST_LIST, getPostList),
        yield takeEvery(actions.GET_POST_LIST_USER_ID, getPostListByuserid),
     
        
    ]);
};



const getPostList = function* () {
   
    try {
        const result = yield call(() =>
            axios.get(`http://localhost:3001/api/user/all/post`)
        );
        console.log(result)
        yield put({ type: actions.SET_POST_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};

const getPostListByuserid = function* (data) {
    const { payload } = data;

    try {
        const result = yield call(() =>
            axios.get(`http://localhost:3001/api/user/post/${payload}`)
        );
        yield put({ type: actions.GET_POST_LIST_USER_ID, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};

export default PostSaga;