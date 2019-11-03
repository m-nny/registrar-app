import * as React from 'react';
import { storiesOf } from '@storybook/react'
import CourseList from './CourseList';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

storiesOf('CourseList', module)
  .add('empty', () => <CourseList data={[]} />)
  .add('3 items', () => <CourseList data={data} />)