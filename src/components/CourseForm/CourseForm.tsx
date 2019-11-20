import * as React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { block } from 'bem-cn';

import './CourseForm.css';
import Course, { CourseEventHandler } from '../../models/Course';

interface LoginFormProps extends FormComponentProps<Course> {
    initialValue?: Partial<Course>;
    onSubmit: CourseEventHandler;
}

const b = block('login-form');

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
// abbreviation must be a string, title must be a string, instructor must be a string, capacity must not be less than 1,capacity must be an integer number

const NormalLoginForm: React.FC<LoginFormProps> = ({
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
            const course: Course = Object.assign(values, {
                filled: 0,
            });
            onSubmit(course);
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
                <Button type="primary" htmlType="submit" className={b('button').toString()}>
                    Confirm
                </Button>
            </Form.Item>
        </Form>
    );
};

const WrappedNormalLoginForm = Form.create<LoginFormProps>({ name: 'normal_login' })(
    NormalLoginForm,
);

export default WrappedNormalLoginForm;
