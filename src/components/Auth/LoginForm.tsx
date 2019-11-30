import { Button, Checkbox, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Title from 'antd/lib/typography/Title';
import Link from 'next/link';
import React from 'react';
import FormWrapped from '../FormWrapped/FormWrapped';

export interface SingInFormProps extends FormComponentProps {
    onSubmit: React.FormEventHandler;
}

const LoginForm: React.FC<SingInFormProps> = ({ form, onSubmit }) => {
    const { getFieldDecorator } = form;
    const renderBottom = () => (
        <>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                Log in
            </Button>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <span style={{ float: 'right' }}>
                <Link href="/auth/forgot">
                    <a>Forgot password</a>
                </Link>
            </span>
            <div style={{ alignItems: 'center' }}>
                <Button style={{ width: '100%' }} href="/auth/signup" type="link">
                    Sign up
                </Button>
            </div>
        </>
    );
    const formItems = [
        {
            name: 'username',
            component: <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />,
        },
        {
            name: 'password',
            component: (
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                />
            ),
        },
    ];

    return (
        <div className="">
            <Title style={{ textAlign: 'center', margin: '60px 0 20px 0' }} level={2}>
                Log in
            </Title>

            <FormWrapped
                form={form}
                onSubmit={onSubmit}
                items={formItems}
                renderBottom={renderBottom}
            />
        </div>
    );
};

export default LoginForm;
