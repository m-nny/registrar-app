import React, { FC } from 'react';
import CourseFormWrapper from '../CourseForm/CourseForm.container';
import CourseListWrapper from '../CourseList/CourseList.container';
import './App.scss';

const App: FC = () => {
    return (
        <div style={{ marginTop: 50 }} className="container">
            <div>
                <CourseListWrapper />
                <div style={{ marginTop: 40, textAlign: 'left' }}>
                    <CourseFormWrapper />
                </div>
            </div>
        </div>
    );
};

export default App;
