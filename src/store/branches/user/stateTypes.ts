import {LoadingStatus} from "../../status";


export interface LoginValues {
    login: string,
    password: string
    isRememberMe: boolean
}

export interface CreateCommentValues {
    URL: string,
    isLike: boolean,
    text: string,
    author: string
}

export interface User {
    id?: string
    email: string,
    nickName: string,
    timestamp: string,
}

export interface Comment {
    text: string
    author: string
    timestamp: string
    _id: string
}

export interface Domain {
    _id: string
    URL: string
    likesCount: number
    like: number
    dislike: number
    comments: Comment[]
}

export interface UserState {
    userData: User | null
    domains: Domain
    status: LoadingStatus
}
