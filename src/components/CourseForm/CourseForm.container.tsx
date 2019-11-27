import { connect } from 'react-redux';
import React from 'react';
import * as courseActions from '../../store/courses/actions';
import CreateCourseFormWrapper from './CourseForm';

const mapDispatchToProps = {
    addCourse: courseActions.addCourseAsync.request,
};

type Props = typeof mapDispatchToProps;

const Component: React.FC<Props> = ({ addCourse }) => {
    return <CreateCourseFormWrapper onSubmit={addCourse} />;
};

export default connect(null, mapDispatchToProps)(Component);
