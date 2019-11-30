import { Layout } from 'antd';
import block from 'bem-cn';
import React, { FC } from 'react';
import Header from '../Header/Header';
import './Page.scss';

const b = block('Page');

const Page: FC = ({ children }) => {
    return (
        <Layout className={b().toString()}>
            <Layout.Header className={b('header').toString()}>
                <Header />
            </Layout.Header>
            <Layout.Content>{children}</Layout.Content>
            <Layout.Footer className={b('footer').toString()}>©2019</Layout.Footer>
        </Layout>
    );
};

export default Page;
