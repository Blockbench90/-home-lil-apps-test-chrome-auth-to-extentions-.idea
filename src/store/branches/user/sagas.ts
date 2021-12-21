import {call, put, takeLatest} from "redux-saga/effects";
import {UsersApi} from "../../../services/api/usersApi";
import {WinStorage} from "../../../services/AuthSrorage";
import {LoadingStatus} from "../../status";
import {usersAC} from "./actionCreators";
import {CreateCommentAI, GetDomainsAI, SignInAI, UsersAT} from "./actionTypes";


export function* Login({payload}: SignInAI) {
    try {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.LOADING));
        const data = yield call(UsersApi.login, payload);
        WinStorage.setToken(data.token);
        yield put(usersAC.setUserData(data.user));
    } catch (error) {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* Me() {
    try {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.LOADING));
        const data = yield call(UsersApi.me);
        yield put(usersAC.setUserData(data.data));
    } catch (error) {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* GetDomains({payload}: GetDomainsAI) {
    try {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.LOADING));
        const data = yield call(UsersApi.getDomains, payload);
        yield put(usersAC.setDomainData(data.body));
    } catch (error) {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* CreateComment({payload}: CreateCommentAI) {
    try {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.LOADING));
        const data = yield call(UsersApi.createComment, payload);
        if (data.status === 200) {
            const data = yield call(UsersApi.getDomains, payload.URL);
            yield put(usersAC.setDomainData(data.body));
        } else {
            yield put(usersAC.setUserLoadingStatus(LoadingStatus.ERROR));
        }
    } catch (error) {
        yield put(usersAC.setUserLoadingStatus(LoadingStatus.ERROR));
    }
}


export function* userSaga() {
    yield takeLatest(UsersAT.FETCH_SIGN_IN, Login);
    yield takeLatest(UsersAT.FETCH_ME, Me);
    yield takeLatest(UsersAT.GET_DOMAINS, GetDomains);
    yield takeLatest(UsersAT.CREATE_COMMENT, CreateComment);
}
