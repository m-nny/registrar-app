import { Layout } from 'antd';

import React, { FC } from 'react';
import Header from '../Header/Header';
import './Page.scss';
import block from '../../libs/bem';

const b = block('Page');

const Page: FC = ({ children }) => {
    return (
        <Layout className={b()}>
            <Layout.Header className={b('header')}>
                <Header />
            </Layout.Header>
            <Layout.Content>{children}</Layout.Content>
            <Layout.Footer className={b('footer')}>©2019</Layout.Footer>
        </Layout>
    );
};

export default Page;
