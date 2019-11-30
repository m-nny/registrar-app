import { Button, Icon } from 'antd';
import block from 'bem-cn';
import React from 'react';
import { Course, CreateCourse as CreateCourseT } from '../../store/courses/types';
import CourseList from '../CourseList/CourseList';
import CreateCourseDrawer from '../CreateCourse/CreateCourse';

const b = block('Courses');

interface Props {
    onRemoveCourse: (id: string) => void;
    createCourse: (course: CreateCourseT) => void;
    courses: Course[];
}

const Courses: React.FC<Props> = props => {
    const [showCreateDrawer, setShowCreateDrawer] = React.useState(false);
    return (
        <div style={{ marginTop: 50 }} className="container">
            <div className={b()}>
                <div style={{ marginBottom: '40px' }}>
                    <Button type="primary" onClick={() => setShowCreateDrawer(true)}>
                        <Icon type="form" />
                        Add Course
                    </Button>
                </div>
                <CourseList onDelete={props.onRemoveCourse}>{props.courses}</CourseList>
                <CreateCourseDrawer
                    visible={showCreateDrawer}
                    close={() => setShowCreateDrawer(false)}
                    createCourse={props.createCourse}
                />
            </div>
        </div>
    );
};

export default Courses;
