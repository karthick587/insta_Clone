import { all } from "redux-saga/effects";
import AuthSaga from "./auth/sagas";
import PeopleSaga from "./people/sagas";
import PostSaga from "./post/sagas";
import MessengerSaga from "./messager/sagas";
export default function* rootSaga() {
    yield all([
        PeopleSaga(),
        AuthSaga(),
        PostSaga(),
        MessengerSaga()
    ]);
};