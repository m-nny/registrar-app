import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import CourseList from './CourseList';
import { Course } from '../../store/courses/types';
import { createCourse } from '../../libs/storybook';

const fakeData: Course[] = [
    createCourse({ abberiation: 'MATH101', title: 'Calculus I', instructor: 'TBA', capacity: 40 }),
    createCourse({ abberiation: 'PHYS101', title: 'Physics I', instructor: 'TBA', capacity: 200 }),
    createCourse({
        abberiation: 'CSCI151',
        title: 'Programming',
        instructor: 'TBA',
        capacity: 150,
    }),
];

const events = actions('onEdit', 'onDelete');

storiesOf('CourseList', module)
    .add('3 items', () => <CourseList data={fakeData} {...events} />)
    .add('empty', () => <CourseList data={[]} {...events} />);

export default fakeData;
