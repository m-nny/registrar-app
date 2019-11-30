import { NextPage } from 'next';
import React from 'react';
import { fetchCourses } from '../api/routes';
import Page from '../components/Page/Page';
import { initialCourseList } from '../store/courses/actions';
import { PageCtx } from '../types/next';
import Courses from '../components/Courses/Courses.container';
import ErrorPage from './_error';

const Index: NextPage<{ error: Error }> = ({ error }) => {
    if (error) {
        return <ErrorPage message={error.message} statusCode={500} />;
    }
    return (
        <Page>
            <Courses />
        </Page>
    );
};

Index.getInitialProps = async ({ store }: PageCtx) => {
    try {
        const coursesList = await fetchCourses();
        store.dispatch(initialCourseList(coursesList));
        return { error: undefined };
    } catch (error) {
        return { error };
    }
};

export default Index;
