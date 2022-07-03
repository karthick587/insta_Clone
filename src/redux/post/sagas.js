import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';
import Authactions from '../auth/actions';
const PostSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_POST_LIST, getPostList),
        yield takeEvery(actions.GET_POST_LIST_USER_ID, getPostListByuserid),
        yield takeEvery(actions.SET_POST, setPost),
        yield takeEvery(actions.SET_LIKE, setLike),
        yield takeEvery(actions.GET_FEEDS, getFeedsList),


    ]);
};


const setLike = function* (data) {
    const { payload } = data;
    console.log(payload)

    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/user/post/like`, payload.data)

        );
        console.log(result)

        yield put({ type: actions.GET_POST_LIST_USER_ID, payload: payload.userId });
    } catch (err) {
        console.log(err)
    }
}

const setPost = function* (data) {
    const { payload } = data;
    console.log(payload)

    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/user/post`, payload.data)

        );
        console.log(result)

        yield put({ type: actions.GET_POST_LIST_USER_ID, payload: payload.userId });
    } catch (err) {
        console.log(err)
    }
}

const getPostList = function* () {

    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/all/post`)
        );
        console.log(result)

    } catch (err) {
        console.log(err)
    }
};

const getPostListByuserid = function* (data) {
    const { payload } = data;

    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/post/${payload}`)
        );
        yield put({ type: actions.SET_POST_LIST_USER_ID, payload: result.data });
    } catch (err) {
        // console.log(err)
    }
};

const getFeedsList = function* (data) {
    const { payload } = data
    console.log(payload)
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/feed/${payload}`)
        );
        if (result.data.statusCode === 200) {
            yield put({ type: actions.SET_FEEDS, payload: result?.data?.data });
        }
    } catch (err) {
        console.log(err)
    }
};
export default PostSaga;