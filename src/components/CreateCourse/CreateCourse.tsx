import { Drawer, Form, InputNumber } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { Course, CreateCourse } from '../../store/courses/types';
import FormWrapped from '../FormWrapped/FormWrapped';

interface CreateCourseViewProps extends FormComponentProps<Course> {
    visible: boolean;
    close: () => void;
    createCourse: (course: CreateCourse) => void;
}

const CreateCourseDrawer: React.FC<CreateCourseViewProps> = ({
    visible,
    close,
    form,
    createCourse,
}) => {
    const onSubmit: React.FormEventHandler = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const course: Course = values;
                createCourse(course);
                form.resetFields();
                close();
            }
        });
    };
    return (
        <Drawer width={500} visible={visible} closable={false} onClose={close}>
            <Title style={{ textAlign: 'center', margin: '100px 0 20px 0' }} level={2}>
                Create course
            </Title>

            <FormWrapped
                onSubmit={onSubmit}
                form={form}
                items={[
                    { name: 'abbreviation' },
                    { name: 'title' },
                    { name: 'instructor' },
                    { name: 'capacity', component: <InputNumber min={1} /> },
                ]}
                buttonTitle="Create"
            />
        </Drawer>
    );
};

export default Form.create<CreateCourseViewProps>({ name: 'createCourse' })(CreateCourseDrawer);
