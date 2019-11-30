import { connect } from 'react-redux';
import React from 'react';
import EditCourseUI from './EditCourse';
import * as courseActions from '../../store/courses/actions';
import { RootState } from '../../store/types';

const mapDispatchToProps = {
    editCourse: courseActions.editCourseAsync.request,
};

const mapStateToProps = (state: RootState) => ({
    courses: state.courses,
});

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const EditCourse: React.FC<Props> = ({ courses, editCourse }) => {
    return <EditCourseUI course={courses[0]} editCourse={editCourse} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
