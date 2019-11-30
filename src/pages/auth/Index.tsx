import { NextPage } from 'next';
import React from 'react';
import Page from '../../components/Page/Page';
import AuthForm from '../../components/Auth/LoginForm.Container';

const Auth: NextPage = () => {
    return (
        <Page>
            <AuthForm />
        </Page>
    );
};

export default Auth;
