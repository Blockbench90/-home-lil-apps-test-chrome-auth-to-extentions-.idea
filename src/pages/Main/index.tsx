import React from "react";

import logo from "../../assets/logo512.png";
import LoginForm from "../../components/LoginForm";
import classes from "./Main.module.scss";

const Main: React.FC = () => {

    return (
        <div className={classes.mainWrap}>
            <div className={classes.logoWrap}>
                <img src={logo} alt="as" className={classes.logo}/>
            </div>

            <div className={classes.title}>
                Welcome 👋
            </div>

            <div className={classes.description}>
                😊 To leave comments, please sign in to your account
            </div>

            <LoginForm/>

        </div>
    );
};

export default Main;
