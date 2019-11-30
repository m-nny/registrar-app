import { NextPage } from 'next';
import React from 'react';
import { fetchCourses } from '../../api/routes';
import Page from '../../components/Page/Page';
import { initialCourseList } from '../../store/courses/actions';
import { NextPageWithStore } from '../../types/next';

const Index: NextPage = () => {
    return <Page>{/* <Courses /> */}</Page>;
};

Index.getInitialProps = async ({ store }: NextPageWithStore) => {
    const coursesList = await fetchCourses();
    store.dispatch(initialCourseList(coursesList));
    return { coursesList };
};

export default Index;