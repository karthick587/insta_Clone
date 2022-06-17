import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';
import Authactions from '../auth/actions';
const PeopleSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_PEOPLE_LIST, getPeopleList),
        yield takeEvery(actions.SET_FOLLOW_PEOPLE, getFollowPeople),
        yield takeEvery(actions.SET_UNFOLLOW_PEOPLE, getUnFollowPeople),
        yield takeEvery(actions.GET_FOLLOWING_PEOPLE_LIST, getFollowingPeopleList),
        yield takeEvery(actions.GET_FOLLOWERS_PEOPLE_LIST, getFollowersPeopleList),
        yield takeEvery(actions.GET_PEOPLE_PROFILE, getPeopleProfile)
    
    ]);
};



const getPeopleList = function* () {
   
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/list`)
        );
        console.log(result)
        yield put({ type: actions.SET_PEOPLE_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};

const getFollowPeople=function*(data){
    const { payload } = data;
console.log(payload)

    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/user/follow`, payload)

        );
      console.log(result)
        yield put({ type: actions.GET_PEOPLE_LIST});
        yield put({ type: Authactions.GET_USER_DETAILS,payload:payload?.UserId});
    } catch (err) {
        console.log(err)
    }
}
const getUnFollowPeople=function*(data){
    const { payload } = data;
    try {
        const result = yield call(() =>
            axios.post(`${API_URL}/api/user/Unfollow`, payload)
        );
     
        yield put({ type: actions.GET_PEOPLE_LIST});
        yield put({ type: Authactions.GET_USER_DETAILS,payload:payload?.UserId});
        yield put({ type: actions.GET_PEOPLE_LIST});
    } catch (err) {
        console.log(err)
    }
}

const getFollowingPeopleList=function*(data){
    const { payload } = data;
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/following/${payload}`)

        );
        yield put({ type: actions.SET_FOLLOWING_PEOPLE_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
}
const getFollowersPeopleList=function*(data){
    const { payload } = data;
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/user/follower/${payload}`)
        );
        yield put({ type: actions.SET_FOLLOWERS_PEOPLE_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
}


const getPeopleProfile = function* (data) {
    const { payload } = data;

    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/api/users/list/${payload}`)
        );
        yield put({ type: actions.SET_PEOPLE_PROFILE, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};
export default PeopleSaga;