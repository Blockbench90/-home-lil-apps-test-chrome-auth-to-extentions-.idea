import {CreateCommentValues, LoginValues} from "../../store/branches/user/stateTypes";
import axios from "../axios";

interface APIResponse {
    data: any;
}

export const UsersApi = {
    async login(postData: LoginValues): Promise<APIResponse> {
        const {data} = await axios.post<APIResponse>("registration", postData);
        return data;
    },

    async me(): Promise<APIResponse> {
        const {data} = await axios.get<APIResponse>("me");
        return data;
    },

    async getDomains(payload: string): Promise<APIResponse> {
        const {data} = await axios.post<APIResponse>("domains", {URL: payload})
        return data
    },

    async createComment(payload: CreateCommentValues): Promise<APIResponse> {
        const data = await axios.post<APIResponse>("comment", payload);
        return data;
    }
};
