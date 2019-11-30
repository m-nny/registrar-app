import { Button, Form, Input } from 'antd';
import { FormComponentProps, ValidationRule } from 'antd/es/form';
import { lowerFirst, upperFirst } from 'lodash';
import React, { CSSProperties } from 'react';

export interface FormWrappedProps extends FormComponentProps {
    onSubmit: React.FormEventHandler;
    items: FormField[];
    buttonTitle?: string;
    renderBottom?: () => React.ReactNode;
}

interface FormField {
    required?: boolean;
    initialValue?: number | string;
    placeHolder?: string;
    label?: string;
    name: string;
    rules?: ValidationRule[];
    component?: React.ReactNode;
    inline?: boolean;
}

const FormWrapped: React.FC<FormWrappedProps> = ({
    form,
    onSubmit,
    items,
    buttonTitle = 'Submit',
    renderBottom,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form onSubmit={onSubmit}>
            {items.map(
                ({
                    name,
                    label = name,
                    initialValue,
                    placeHolder,
                    rules = [],
                    required = true,
                    component,
                    inline,
                }) => {
                    const message = `Please enter ${lowerFirst(label)}`;
                    const style: CSSProperties = {
                        marginBottom: 5,
                        ...(inline ? { display: 'inline-block', marginRight: '5%' } : {}),
                    };
                    return (
                        <Form.Item key={name} style={style} label={upperFirst(label)}>
                            {getFieldDecorator(name, {
                                initialValue,
                                rules: [{ required, message }, ...rules],
                            })(component || <Input placeholder={placeHolder} />)}
                        </Form.Item>
                    );
                },
            )}
            <Form.Item style={{ margin: '30px 0 40px 0' }}>
                {renderBottom ? (
                    renderBottom()
                ) : (
                    <Button
                        htmlType="submit"
                        onClick={onSubmit}
                        type="primary"
                        style={{ width: '100%' }}
                    >
                        {buttonTitle}
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default FormWrapped;
