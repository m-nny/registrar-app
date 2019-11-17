import * as React from 'react';
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions';

import CourseForm from './CourseForm';

import Course, { newCourse } from '../../models/Course';

export const fakeCourse: Course = newCourse('MATH101', 'Calculus I', 'TBA', 40, 4);

const events = actions('onSubmit')

storiesOf('CourseForm', module)
  .addDecorator(story => <div className="container" style={{ padding: '24px' }}>{story()}</div>)
  .add('empty', () => <CourseForm {...events} />)
  .add('MATH101', () => <CourseForm initialValue={fakeCourse} {...events} />)