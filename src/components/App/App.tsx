import React, { FC } from 'react';
import { createCourse, editCourses, removeCourse } from '../../api/routes';
import Course, { NewCourse } from '../../models/Course';
import WrappedNormalLoginForm from '../CourseForm/CourseForm';
import CourseList from '../CourseList/CourseList';
import './App.css';

interface Props {
    coursesList: Course[];
}

const App: FC<Props> = ({ coursesList }) => {
    const onDelete = (course: Course) => {
        removeCourse(course._id);
    };
    const onEdit = (course: Course) => {
        editCourses(course.abberiation, {});
    };

    const onSubmit = (course: NewCourse) => {
        createCourse(course);
    };
    return (
        <div style={{ marginTop: 50 }} className="container">
            <div>
                <CourseList data={coursesList} onDelete={onDelete} onEdit={onEdit} />
                <div style={{ marginTop: 40, textAlign: 'revert' }}>
                    <WrappedNormalLoginForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default App;
