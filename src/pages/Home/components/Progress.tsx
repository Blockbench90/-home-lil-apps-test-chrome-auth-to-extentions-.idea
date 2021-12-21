import React from "react";
import classes from "../Home.module.scss";
import {DislikeOutlined, DislikeTwoTone, LikeOutlined, LikeTwoTone} from "@ant-design/icons";
import {Progress} from "antd";

interface ProgressBarProps {
    percent: number
    isLike: boolean
    onLike: () => void
    onDislike: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({isLike, percent, onLike, onDislike}) => {

    return (
        <React.Fragment>
            <div className={classes.likeWrap}>
                <div>
                    {
                        isLike
                            ?
                            <LikeTwoTone onClick={onLike}
                                         twoToneColor="green"
                                         className={classes.icon}
                            />
                            :
                            <LikeOutlined className={classes.icon} style={{color: "#62cdab"}} onClick={onLike}/>
                    }
                    <span className={classes.like}>Like</span>

                    {
                        isLike
                            ?
                            <DislikeOutlined className={classes.icon} style={{color: "#b64b63"}} onClick={onDislike}/>
                            :
                            <DislikeTwoTone className={classes.icon} twoToneColor="green" onClick={onDislike}/>

                    }
                    <span className={classes.dislike}>Dislike </span>
                </div>
            </div>
            <div className={classes.rate}>
                <Progress percent={percent} showInfo={false} strokeColor="#62cdab" trailColor="#b64b63"/>
            </div>
        </React.Fragment>
    );
};

export default ProgressBar;
