import { Button, Form, Input, InputNumber } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { block } from 'bem-cn';
import React from 'react';
import { Course, CreateCourse } from '../../store/courses/types';
import './CourseForm.scss';
import { formItemLayout, tailFormItemLayout } from './layout';

interface LoginFormProps extends FormComponentProps<Course> {
    initialValue?: Partial<CreateCourse>;
    onSubmit: (course: CreateCourse) => void;
}

const b = block('login-form');

const CreateCourseForm: React.FC<LoginFormProps> = ({
    form,
    onSubmit,
    initialValue = {},
}: LoginFormProps) => {
    const handleSubmit: React.FormEventHandler = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            const course: Course = values;
            onSubmit(course);
            form.resetFields();
        });
    };

    const { getFieldDecorator } = form;

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit} className={b()}>
            <Form.Item label="Abbreviation">
                {getFieldDecorator('abbreviation', {
                    rules: [{ required: true, message: 'Please enter course abbreviation' }],
                    initialValue: initialValue.abberiation,
                })(<Input placeholder="MATH101" />)}
            </Form.Item>
            <Form.Item label="Title">
                {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter course title' }],
                    initialValue: initialValue.title,
                })(<Input placeholder="Calculus I" />)}
            </Form.Item>
            <Form.Item label="Instructor">
                {getFieldDecorator('instructor', {
                    rules: [{ required: true, message: 'Please enter instructor name' }],
                    initialValue: initialValue.instructor,
                })(<Input placeholder="TBA" />)}
            </Form.Item>
            <Form.Item label="Capacity">
                {getFieldDecorator('capacity', {
                    rules: [{ required: true, message: 'Please enter capacity' }],
                    initialValue: initialValue.capacity,
                })(<InputNumber min={1} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className={b('button')}>
                    Confirm
                </Button>
            </Form.Item>
        </Form>
    );
};

const CreateCourseFormWrapper = Form.create<LoginFormProps>()(CreateCourseForm);

export default CreateCourseFormWrapper;
