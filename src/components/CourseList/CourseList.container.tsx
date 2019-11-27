import { connect } from 'react-redux';
import React from 'react';
import * as courseActions from '../../store/courses/actions';
import { RootState } from '../../store/types';
import CourseList from './CourseList';

const mapDispatchToProps = {
    removeCourse: courseActions.removeCourseAsync.request,
    editCourse: courseActions.editCourseAsync.request,
};

const mapStateToProps = (state: RootState) => ({
    courses: state.courses,
});

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Component: React.FC<Props> = ({ removeCourse, editCourse, courses }) => {
    return <CourseList onDelete={removeCourse} onEdit={editCourse} data={courses} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
