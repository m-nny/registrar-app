import * as React from 'react';
import { Table } from 'antd';
import Course from '../../models/Course';

const columns = [
  { title: 'Course ID', dataIndex: 'id', },
  { title: 'Name', dataIndex: 'name', },
  { title: 'Instructor', dataIndex: 'instructor', },
  {
    title: 'Availability', key: 'availability',
    render: (_, r: Course): React.ReactNode => <div>{r.filled}/{r.capacity}</div>,
  },
];

type Props = {
  data: Course[]
}

const CourseList: React.FC<Props> = ({ data: originalData }: Props) => {
  const data = originalData.map(course => ({
    ...course,
    key: course.id,
    availability: [course.filled, course.capacity]
  }))
  return <Table
    columns={columns}
    dataSource={data}
  />
};


export default CourseList;
