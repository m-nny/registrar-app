import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import CourseForm from './CourseForm';
import { Course } from '../../store/courses/types';
import { createCourse } from '../../libs/storybook';

const fakeCourse: Course = createCourse({
    abberiation: 'MATH101',
    title: 'Calculus I',
    instructor: 'TBA',
    capacity: 40,
});

const events = actions('onSubmit');

storiesOf('CourseForm', module)
    .addDecorator(story => (
        <div className="container" style={{ padding: '24px' }}>
            {story()}
        </div>
    ))
    .add('empty', () => <CourseForm {...events} />)
    .add('MATH101', () => <CourseForm initialValue={fakeCourse} {...events} />);

export default fakeCourse;
