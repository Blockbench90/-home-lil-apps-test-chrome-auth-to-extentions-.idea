import React from "react";
import classes from "../Home.module.scss";
import {DislikeOutlined, LikeOutlined, RollbackOutlined} from "@ant-design/icons";
import {Avatar, Empty} from "antd";
import {Comment} from "../../../store/branches/user/stateTypes";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import moment from "moment";

const Comments: React.FC<{ comments: Comment[] }> = ({comments = []}) => {

    return (
        <div className={classes.commentsWrap}>
            {
                comments.length
                    ?
                    comments?.map((item: Comment, index: number) => {
                        return (
                            <div key={`${item?.timestamp}_${index}`} className={classes.commentWrap}>
                                <div className={classes.commentHeader}>
                                    <div className={classes.commentAvatar}>
                                        <Avatar style={{backgroundColor: "#87d068"}} src={"https://picsum.photos/100"}
                                                icon={<UserOutlined/>}/>
                                    </div>
                                    <div className={classes.commentNickName}>
                                        <span className={classes.commentAuthor}>{item?.author}</span>
                                        <span className={classes.commentTime}>{moment(item?.timestamp).fromNow()}</span>
                                    </div>
                                </div>
                                <div className={classes.commentContent}>
                                    <div dangerouslySetInnerHTML={{__html: item?.text}}/>
                                </div>
                                <div className={classes.commentFooter}>
                                    <div className={classes.commentFooterInfo}>
                                        <div>
                                            <span>2 Likes</span>
                                        </div>
                                        <div>
                                            <RollbackOutlined/> <span>Reply</span>
                                        </div>
                                    </div>
                                    <div>
                                        <LikeOutlined className={classes.icon}
                                                      style={{color: "gray", marginRight: "5px", opacity: "0.5"}}/>
                                        <DislikeOutlined className={classes.icon}
                                                         style={{color: "gray", opacity: "0.5"}}/>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    :
                    <Empty description={false}/>
            }
        </div>
    );
};

export default Comments;
