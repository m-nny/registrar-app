import * as React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string): React.ReactNode => <div>{text}</div>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags): React.ReactNode => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record): React.ReactNode => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

interface Row {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
}

type Props = {
  data: Row[]
}

const CourseList: React.FC<Props> = ({ data }: Props) => (
  <Table
    columns={columns}
    dataSource={data}
  />
);


export default CourseList;