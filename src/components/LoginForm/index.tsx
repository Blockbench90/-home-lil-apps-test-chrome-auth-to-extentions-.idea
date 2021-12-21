import React from "react";
import {useDispatch} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";

import {LoginValues} from "../../store/branches/user/stateTypes";
import {usersAC} from "../../store/branches/user/actionCreators";

import classes from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const onFinish = (values: LoginValues) => {
        dispatch(usersAC.login(values));
    };

    return (
        <div className={classes.loginWrap}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: "Please input your username!", type: "email"}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: "Please input your password!"}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
