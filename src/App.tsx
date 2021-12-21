import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import {WinStorage} from "./services/AuthSrorage";
import {usersAC} from "./store/branches/user/actionCreators";
import {selectUserState} from "./store/selectors";
import {LoadingStatus} from "./store/status";
import {Messaging} from "react-cssfx-loading";

function App() {
    const {status} = useSelector(selectUserState);
    const dispatch = useDispatch();
    const isAuth = WinStorage.getToken();

    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            dispatch(usersAC.getDomains(tabs[0].url))
            console.log(tabs[0].url);
        });

    }, [dispatch]);

    useEffect(() => {
        dispatch(usersAC.me());
    }, [dispatch]);

    if (status === LoadingStatus.LOADING) {
        return (
            <div className="preloader-wrap">
                <Messaging color="#014B3E" width="20px" height="20px" duration="1s"/>
            </div>
        );
    }


    return (
        <div className="app-wrap">
            {
                isAuth
                    ?
                    <Home/>
                    :
                    <Main/>
            }
        </div>
    );
}

export default App;
