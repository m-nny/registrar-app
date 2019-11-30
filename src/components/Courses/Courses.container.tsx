import { connect } from 'react-redux';
import React from 'react';
import * as courseActions from '../../store/courses/actions';
import { RootState } from '../../store/types';
import Courses from './Courses';

const mapDispatchToProps = {
    removeCourse: courseActions.removeCourseAsync.request,
    addCourse: courseActions.addCourseAsync.request,
};

const mapStateToProps = (state: RootState) => ({
    courses: state.courses,
});

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const CoursesContainer: React.FC<Props> = ({ removeCourse, courses, addCourse }) => {
    return <Courses onRemoveCourse={removeCourse} courses={courses} createCourse={addCourse} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
