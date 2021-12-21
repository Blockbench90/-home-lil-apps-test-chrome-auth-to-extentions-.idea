import React from "react";
import classes from "../Home.module.scss";
import {Avatar} from "antd";

import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

const UserInfo: React.FC<{nickName: string}> = ({nickName}) => {

    return (
        <div className={classes.userWrap}>
            <div>
                <Avatar size={60} style={{backgroundColor: "#87d068"}}
                        src={"https://picsum.photos/100"}
                        icon={<UserOutlined/>}/>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userName}>
                    <span>{nickName}</span>
                </div>
                <div className={classes.userScore}>
                    <span className={classes.userReview}>Review Score:</span><span className={classes.rate}>1.9K</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
