import React from 'react';

import 'antd/dist/antd.css';

import App from '../components/App/App';
import { NextPage } from 'next';
import Course from '../models/Course';
import { getCourses } from '../api/routes';

interface Props {
    coursesList: Course[];
}

const Home: NextPage<Props> = ({ coursesList }) => <App coursesList={coursesList} />;

Home.getInitialProps = async () => {
    const coursesList = await getCourses();

    return { coursesList };
};

export default Home;
