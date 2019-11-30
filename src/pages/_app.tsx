import 'antd/dist/antd.css';
import withRedux from 'next-redux-wrapper';
import App, { AppContext } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import initStore from '../store';
import { Store } from '../store/types';

export default withRedux(initStore, { debug: true })(
    class extends App<{ store: Store }> {
        static async getInitialProps({ Component, ctx }: AppContext) {
            const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
            return { pageProps };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            );
        }
    },
);
