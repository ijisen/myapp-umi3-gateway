import React from 'react';
import { Form, Input } from 'antd';
import { CustomFormItemType } from '../../typings.d';

type FormItemRenderProps = {
  data: CustomFormItemType[];
};
const FormItemRender: React.FC<FormItemRenderProps> = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        const { type } = item;
        if (type === 'password') {
          return (
            <Form.Item key={index} {...item}>
              <Input.Password placeholder={`${item.label}`} />
            </Form.Item>
          );
        }
        return (
          <Form.Item key={index} {...item}>
            <Input placeholder={`${item.label}`} />
          </Form.Item>
        );
      })}
    </>
  );
};
export default FormItemRender;
