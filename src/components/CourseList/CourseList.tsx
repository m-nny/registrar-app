import * as React from 'react';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/es/table';

import Course from '../../models/Course';
import ButtonGroup from 'antd/lib/button/button-group';

type CourseEventHandler = (couse: Course) => void

interface CourseRecord extends Course {
  key: string,
  onEdit: React.MouseEventHandler<HTMLButtonElement>,
  onDelete: React.MouseEventHandler<HTMLButtonElement>,
}

const columns: ColumnProps<CourseRecord>[] = [
  { title: 'Course ID', dataIndex: 'id', },
  { title: 'Name', dataIndex: 'name', },
  { title: 'Instructor', dataIndex: 'instructor', },
  {
    title: 'Availability', key: 'availability',
    render: (_, r) => <div>{r.filled}/{r.capacity}</div>,
  },
  {
    title: 'Action', key: 'action',
    render: (_, r) => (
      <ButtonGroup>
        <Button onClick={r.onEdit}> Edit </Button>
        <Button onClick={r.onDelete} type="danger"> Delete </Button>
      </ButtonGroup>
    )
  }
];

type Props = {
  data: Course[]
  onEdit: CourseEventHandler
  onDelete: CourseEventHandler
}

const CourseList: React.FC<Props> = ({ data: originalData, onEdit, onDelete }: Props) => {
  const data: CourseRecord[] = originalData.map(course => ({
    ...course,
    key: course.id,
    onEdit: () => onEdit(course),
    onDelete: () => onDelete(course),
  }))
  return <Table<CourseRecord>
    columns={columns}
    dataSource={data}
  />
};


export default CourseList;
