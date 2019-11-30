import { Result, Button } from 'antd';
import Error from 'next/error';
import React from 'react';
import { ResultStatusType } from 'antd/lib/result';
import { NextPageContext } from 'next';

interface Props {
    message?: string;
}

class ErrorPage extends Error<Props> {
    static getInitialProps({ res, err }: NextPageContext) {
        const statusCode = (res ? res.statusCode : err ? err.statusCode : 404) as number;
        return { statusCode };
    }

    render() {
        let status: '403' | '404' | '500' | 'error';

        if ([403, 404, 500].includes(this.props.statusCode)) {
            status = String(this.props.statusCode) as '403' | '404' | '500';
        } else {
            status = 'error';
        }

        const message = {
            403: 'Forbidder. Sorry, you are not authorized to access this page.',
            404: 'Sorry. Page not found',
            500: 'Sorry, the server is wrong.',
            error: 'Something goes wrong',
        };

        return (
            <Result
                style={{ marginTop: '8%' }}
                status={status}
                title={status}
                subTitle={message[status]}
                extra={
                    <Button href="/" type="primary">
                        Back Home
                    </Button>
                }
            />
        );
    }
}

export default ErrorPage;
