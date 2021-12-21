import {RootState} from "./store";
import {UserState} from "./branches/user/stateTypes";

export const selectUserState = (state: RootState): UserState => state.user;
