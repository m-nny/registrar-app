import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import CourseList from './CourseList';

import Course, { newCourse } from '../../models/Course';

export const fakeData: Course[] = [
    newCourse('MATH101', 'Calculus I', 'TBA', 40, 4),
    newCourse('PHYS101', 'Physics I', 'TBA', 200, 20),
    newCourse('CSCI151', 'Programming for Sc...', 'TBA', 150),
];

const events = actions('onEdit', 'onDelete');

storiesOf('CourseList', module)
    .add('3 items', () => <CourseList data={fakeData} {...events} />)
    .add('empty', () => <CourseList data={[]} {...events} />);
