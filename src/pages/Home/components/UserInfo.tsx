import React from "react";
import classes from "../Home.module.scss";
import {Avatar, Button} from "antd";

import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import {WinStorage} from "../../../services/AuthSrorage";
import { useHistory } from "react-router-dom";

const UserInfo: React.FC<{ nickName: string, ava: string }> = ({nickName, ava}) => {
    const history = useHistory();
    const handleLogout = () => {
        WinStorage.removeToken();
        history.push("/")
    };
    return (
        <div className={classes.userWrap}>
            <div>
                <Avatar size={60} style={{backgroundColor: "#87d068"}}
                        src={ava}
                        icon={<UserOutlined/>}/>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userName}>
                    <span>{nickName}</span>
                </div>
                <div className={classes.userScore}>
                    <span className={classes.userReview}>Left Comments:</span><span className={classes.rate}>1.9K</span>
                </div>
            </div>
            <div className={classes.logout}>
                <Button onClick={handleLogout}>LOGOUT</Button>
            </div>
        </div>
    );
};

export default UserInfo;
