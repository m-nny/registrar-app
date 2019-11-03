import * as React from 'react';
import { storiesOf } from '@storybook/react'
import CourseList from './CourseList';
import Course, { newCourse } from '../../models/Course';

const data: Course[] = [
  newCourse('MATH101', 'Calculus I', 'TBA', 40, 4),
  newCourse('PHYS101', 'Physics I', 'TBA', 200, 20),
  newCourse('CSCI151', 'Programming for Sc...', 'TBA', 150),
];

storiesOf('CourseList', module)
  .add('empty', () => <CourseList data={[]} />)
  .add('3 items', () => <CourseList data={data} />)