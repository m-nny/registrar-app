import { Result, Button } from 'antd';
import Error from 'next/error';
import React from 'react';
import { ResultStatusType } from 'antd/lib/result';
import { NextPageContext } from 'next';

class ErrorPage extends Error<{ message?: string }> {
    static getInitialProps({ res, err }: NextPageContext) {
        const statusCode = (res ? res.statusCode : err ? err.statusCode : 404) as number;
        return { statusCode };
    }

    render() {
        let status: ResultStatusType;
        if ([403, 404, 500].includes(this.props.statusCode)) {
            status = String(this.props.statusCode) as '403' | '404' | '500';
        } else {
            status = 'error';
        }

        return (
            <Result
                status={status}
                title={status}
                subTitle={this.props.message || 'Something goes wrong'}
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
