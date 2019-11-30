import { Form, InputNumber, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Title from 'antd/lib/typography/Title';
import React, { CSSProperties } from 'react';

import { useRouter } from 'next/router';
import { Course, EditCourse } from '../../store/courses/types';
import FormWrapped from '../FormWrapped/FormWrapped';

interface EditCourseViewProps extends FormComponentProps<Course> {
    editCourse: (course: EditCourse) => void;
    course: Course;
}

const EditCourseDrawer: React.FC<EditCourseViewProps> = ({ form, editCourse, course }) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const onSubmit: React.FormEventHandler = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const c = { ...course, ...values };
                setLoading(true);
                editCourse(c);
                router.push('/');
            }
        });
    };
    const style: CSSProperties = {
        maxWidth: '500px',
        margin: '0 auto',
    };
    return (
        <div style={style}>
            <Title style={{ textAlign: 'center', margin: '100px 0 20px 0' }} level={2}>
                Edit course
            </Title>
            <FormWrapped
                onSubmit={onSubmit}
                form={form}
                items={[
                    { name: 'abbreviation', initialValue: course.abbreviation },
                    { name: 'title', initialValue: course.title },
                    { name: 'instructor', initialValue: course.instructor },
                    {
                        name: 'enrolled',
                        initialValue: course.enrolled,
                        component: <InputNumber min={0} />,
                        inline: true,
                    },
                    {
                        name: 'capacity',
                        initialValue: course.capacity,
                        component: <InputNumber min={1} />,
                        inline: true,
                    },
                ]}
                renderBottom={() => (
                    <Button
                        loading={loading}
                        htmlType="submit"
                        onClick={onSubmit}
                        type="primary"
                        style={{ width: '100%', margin: '30px 0 40px 0' }}
                    >
                        Edit
                    </Button>
                )}
            />
        </div>
    );
};

export default Form.create<EditCourseViewProps>({ name: 'EditCourse' })(EditCourseDrawer);
