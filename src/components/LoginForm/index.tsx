import React from "react";

import classes from "./LoginForm.module.scss";
import {useDispatch} from "react-redux";
import {GoogleLogin} from "react-google-login";
import {usersAC} from "../../store/branches/user/actionCreators";
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId ='180927661131-op5nbqoht3nehj84br6i5srta92e99bk.apps.googleusercontent.com';


const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        dispatch(usersAC.login(res.profileObj));
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
    };

    return (
        <div className={classes.loginWrap}>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
};

export default LoginForm;
