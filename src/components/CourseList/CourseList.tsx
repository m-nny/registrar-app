import React from 'react';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { EditCourse, Course } from '../../store/courses/types';

interface CourseRecord extends Course {
    key: string;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const columns: ColumnProps<CourseRecord>[] = [
    { title: 'Abbreviation', dataIndex: 'abbreviation' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Instructor', dataIndex: 'instructor' },
    {
        title: 'Availability',
        key: 'availability',
        render: (_, r) => (
            <div>
                {r.enrolled}/{r.capacity}
            </div>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, r) => (
            <Button.Group>
                <Button onClick={r.onEdit}> Edit </Button>
                <Button onClick={r.onDelete} type="danger">
                    Delete
                </Button>
            </Button.Group>
        ),
    },
];

export interface CourseListProps {
    data: Course[];
    onEdit: (props: EditCourse) => void;
    onDelete: (id: string) => void;
}

const CourseList: React.FC<CourseListProps> = ({
    data: originalData,
    onEdit,
    onDelete,
}: CourseListProps) => {
    const data: CourseRecord[] = originalData.map(course => ({
        ...course,
        key: course._id,
        onEdit: () => onEdit({ _id: course._id }),
        onDelete: () => onDelete(course._id),
    }));
    return <Table<CourseRecord> columns={columns} dataSource={data} />;
};

export default CourseList;
