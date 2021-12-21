import React, {useState} from "react";
import classes from "./Home.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectUserState} from "../../store/selectors";
import {Button} from "antd";
import Editor from "../../components/CKEditor/Editor";
import UserInfo from "./components/UserInfo";
import ProgressBar from "./components/Progress";
import Comments from "./components/Comments";
import {usersAC} from "../../store/branches/user/actionCreators";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const {userData, domains} = useSelector(selectUserState);

    const [editValue, setEditValue] = useState<string>();
    const [error, setError] = useState<boolean>(false);
    const [isLike, setLike] = useState<boolean>();

    const percent = () => {
        if (domains?.like === 0) return 0;
        return Math.round((domains?.like / domains?.likesCount) * 100);
    };
    const onSubmit = () => {
        if (!editValue) {
            setError(true);
            return;
        }
        const data = {
            URL: domains?.URL,
            isLike,
            text: editValue,
            author: userData?.nickName,
        };
        dispatch(usersAC.createComment(data));
        setEditValue("")
    };

    const onLike = () => {
        setLike(true);
    };

    const onDislike = () => {
        setLike(false)
    }

    return (
        <div className={classes.homeWrap}>

            <UserInfo nickName={userData?.nickName}/>
            <ProgressBar isLike={isLike} percent={percent()} onLike={onLike} onDislike={onDislike}/>
            <Comments comments={domains?.comments}/>

            <div className={classes.editorWrap}>
                {error && <span className={classes.error}>Editor is Empty!</span>}
                <Editor onChangeValue={setEditValue} value={editValue} setError={setError}/>
                <Button type="primary" onClick={onSubmit} className={classes.commentSubmitButton}>Send</Button>
            </div>
        </div>
    );
};

export default Home;
