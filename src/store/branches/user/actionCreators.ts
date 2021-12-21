import {
    CreateCommentAI,
    GetDomainsAI, SetDomainDataAI,
    SetUserDataAI,
    SetUserLoadingStatusAI,
    SignInAI,
    UsersAT,
} from "./actionTypes";
import {CreateCommentValues, Domain, LoginValues, User} from "./stateTypes";
import {LoadingStatus} from "../../status";


export const usersAC = {

    setUserLoadingStatus: (payload: LoadingStatus): SetUserLoadingStatusAI => ({
        type: UsersAT.SET_LOADING_STATE,
        payload,
    }),

    login: (payload: LoginValues): SignInAI => ({
        type: UsersAT.FETCH_SIGN_IN,
        payload,
    }),

    me: () => ({
        type: UsersAT.FETCH_ME,
    }),

    setUserData: (payload: User): SetUserDataAI => ({
        type: UsersAT.SET_USER_DATA,
        payload,
    }),

    setDomainData: (payload: Domain): SetDomainDataAI => ({
        type: UsersAT.SET_DOMAIN_DATA,
        payload,
    }),

    getDomains: (payload: string): GetDomainsAI => ({
        type: UsersAT.GET_DOMAINS,
        payload,
    }),

    createComment: (payload: CreateCommentValues): CreateCommentAI => ({
        type: UsersAT.CREATE_COMMENT,
        payload,
    }),
};

export type UserActions = SignInAI | GetDomainsAI | CreateCommentAI | SetUserDataAI | SetDomainDataAI
