import React from 'react';

import 'antd/dist/antd.css';

import CourseList from '../components/CourseList/CourseList';
import fakeData from '../components/CourseList/CourseList.stories';

const Home: React.FC = () => (
    <div>
        <CourseList data={fakeData} onDelete={() => {}} onEdit={() => {}} />
    </div>
);

export default Home;
