import { NextPage } from 'next';
import React from 'react';
import { fetchCourse } from '../../../api/routes';
import EditCourse from '../../../components/EditCourse/EditCourse.container';
import Page from '../../../components/Page/Page';
import { initialCourseList } from '../../../store/courses/actions';
import { PageCtx } from '../../../types/next';
import ErrorPage from '../../_error';

const Index: NextPage<{ error: Error }> = ({ error }) => {
    if (error) {
        return <ErrorPage message={error.message} statusCode={500} />;
    }
    return (
        <Page>
            <EditCourse />
        </Page>
    );
};

Index.getInitialProps = async ({ store, query }: PageCtx) => {
    const { id } = query;

    try {
        const course = await fetchCourse(id as string);
        store.dispatch(initialCourseList([course]));
        return { error: undefined };
    } catch (error) {
        return { error };
    }
};

export default Index;
