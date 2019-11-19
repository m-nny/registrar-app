import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import CourseList from '../CourseList/CourseList';
import { fakeData } from '../CourseList/CourseList.stories';
import Course, { NewCourse } from '../../models/Course';
import { getCourses, removeCourse, editCourses, createCourse } from '../../api/routes';
import WrappedNormalLoginForm from '../CourseForm/CourseForm';
import { async } from 'q';


interface Props {
    coursesList: Course[];
}

const App: FC<Props> = ({coursesList}) => {


    const onDelete = (course: Course) => {
        removeCourse(course._id)
    }
    const onEdit = (course: Course) => {
        editCourses(course.abberiation, {})
    }

    const onSubmit = async(course: NewCourse) => {
        await createCourse(course);
    }
    return (
        <div style={{marginTop: 50}} className="container">
            <div>
                <CourseList
                    data={coursesList}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
                <div style={{marginTop: 40, textAlign: 'revert'}}>
                <WrappedNormalLoginForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default App;



