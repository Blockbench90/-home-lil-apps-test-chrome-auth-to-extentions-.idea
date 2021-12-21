import {Action} from "redux";
import { LoadingStatus } from "../../status";
import {CreateCommentValues, Domain, LoginValues, User} from "./stateTypes";

export enum UsersAT {
    SET_LOADING_STATE = "user/SET_LOADING_STATE",
    SET_USER_DATA = "user/SET_USER_DATA",
    SET_DOMAIN_DATA = "user/SET_DOMAIN_DATA",
    FETCH_SIGN_IN = "user/FETCH_SIGN_IN",
    FETCH_ME = "user/FETCH_ME",
    GET_DOMAINS = "user/GET_DOMAINS",
    CREATE_COMMENT = "user/CREATE_COMMENT",
}


export interface SetUserLoadingStatusAI extends Action<UsersAT> {
    type: UsersAT.SET_LOADING_STATE;
    payload: LoadingStatus;
}

export interface SetUserDataAI extends Action<UsersAT> {
    type: UsersAT.SET_USER_DATA;
    payload: User;
}

export interface SetDomainDataAI extends Action<UsersAT> {
    type: UsersAT.SET_DOMAIN_DATA;
    payload: Domain;
}

export interface SignInAI extends Action<UsersAT> {
    type: UsersAT.FETCH_SIGN_IN;
    payload: LoginValues;
}

export interface GetDomainsAI extends Action<UsersAT> {
    type: UsersAT.GET_DOMAINS;
    payload: string
}

export interface CreateCommentAI extends Action<UsersAT> {
    type: UsersAT.CREATE_COMMENT;
    payload: CreateCommentValues
}
