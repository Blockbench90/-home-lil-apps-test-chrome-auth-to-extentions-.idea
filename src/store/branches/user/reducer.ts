import produce, {Draft} from "immer";
import {LoadingStatus} from "../../status";
import {UserActions} from "./actionCreators";
import {UsersAT} from "./actionTypes";
import {UserState} from "./stateTypes";

const initialUserState: UserState = {
    userData: null,
    domains: null,
    status: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UsersAT.SET_USER_DATA:
            draft.userData = action.payload;
            draft.status = LoadingStatus.SUCCESS;
            break;

        case UsersAT.SET_DOMAIN_DATA:
            draft.domains = action.payload;
            draft.status = LoadingStatus.SUCCESS;
            break;

        default:
            break;
    }
}, initialUserState);
