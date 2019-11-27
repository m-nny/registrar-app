import { NextPage } from 'next';
import React from 'react';
import { getCourses } from '../api/routes';
import App from '../components/App/App';
import { initialCourseList } from '../store/courses/actions';
import { PageCtx } from '../types/next';

const Index: NextPage = () => {
    return <App />;
};

Index.getInitialProps = async ({ store }: PageCtx) => {
    // TODO: обратывать ошибки
    const coursesList = await getCourses();
    store.dispatch(initialCourseList(coursesList));
    return { coursesList };
};

export default Index;
