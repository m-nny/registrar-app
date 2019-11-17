import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import CourseList from '../CourseList/CourseList';
import { fakeData } from '../CourseList/CourseList.stories';
import Course from '../../models/Course';
import { getCourses, removeCourse, editCourses } from '../api/routes';


const App: FC = () => {


    const [coursesList, setCoursesList] = useState<Course[]>([]);

    const fetch = async () => {
        const data = await getCourses() || fakeData;
        setCoursesList(data);
    }

    useEffect(() => void fetch(), []);
    const onDelete = (course: Course) => {
        removeCourse(course.id)
    }
    const onEdit = (course: Course) => {
        editCourses(course.id)
    }
    return (
        <div className="container">
            <div>
                <CourseList
                    data={coursesList}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
}

export default App;



