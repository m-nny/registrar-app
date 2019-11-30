import React, { CSSProperties } from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import LoginFormUI from './LoginForm';

const LoginForm: React.FC<FormComponentProps> = ({ form }) => {
    const onSubmit: React.FormEventHandler = () => {
        console.log(JSON.stringify(form.getFieldsValue(), null, 4));
    };
    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
    };
    return (
        <div style={style}>
            <LoginFormUI onSubmit={onSubmit} form={form} />
        </div>
    );
};

const AuthFormWrapped = Form.create<FormComponentProps>({ name: 'authForm' })(LoginForm);

export default AuthFormWrapped;
