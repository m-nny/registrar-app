import { Button, Icon, Progress, Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { useRouter } from 'next/router';
import React from 'react';
import { Course } from '../../store/courses/types';

export interface CourseRecord extends Course {
    key: string;
    onEdit: React.MouseEventHandler<HTMLButtonElement>;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CourseListProps {
    children: Course[];
    onDelete: (id: string) => void;
}

const CourseList: React.FC<CourseListProps> = ({
    children: originalData,
    onDelete,
}: CourseListProps) => {
    const router = useRouter();
    const data: CourseRecord[] = originalData.map(course => ({
        ...course,
        key: course.id,
        onEdit: () => router.push(`/course/edit/${course.id}`),
        onDelete: () => onDelete(course.id),
    }));
    const columns: ColumnProps<CourseRecord>[] = [
        {
            title: 'Abbreviation',
            dataIndex: 'abbreviation',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Instructor',
            dataIndex: 'instructor',
        },
        {
            title: 'Availability',
            render: (text, record) => (
                <span>
                    <Progress
                        format={() => `${record.enrolled} / ${record.capacity}`}
                        percent={Math.floor((record.enrolled * 100) / record.capacity)}
                    />
                </span>
            ),
            width: 300,
        },
        {
            title: 'Action',
            render: (_, record) => (
                <Button.Group>
                    <Button onClick={record.onEdit}>
                        <Icon type="edit" /> Edit
                    </Button>
                    <Button onClick={record.onDelete} type="danger">
                        <Icon type="delete" /> Delete
                    </Button>
                </Button.Group>
            ),
            align: 'right',
        },
    ];
    return (
        <Table<CourseRecord>
            bodyStyle={{ background: '#fff' }}
            columns={columns}
            dataSource={data}
        />
    );
};

export default CourseList;
