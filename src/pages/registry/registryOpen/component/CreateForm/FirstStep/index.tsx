import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons';

import style from '../style.less';

type CreateFormProps = {
  name: string;
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [showTechContact, setShowTechContact] = useState(false);
  const formData = {
    // registry.name
    name: '注册局名称',
    // registry.address
    address: '注册局地址',
    // registry.postCode
    postCode: '邮编',
    // registry.tel
    tel: '电话',
    // registry.fax
    fax: '传真',
    // registry.email
    email: '邮箱',
    /** 管理联系人 */
    // registry.adminContactName
    adminContactName: '管理名称',
    // registry.adminContactTel
    adminContactTel: '管理手机',
    // registry.adminContactPhone
    adminContactPhone: '管理电话',
    // registry.adminContactEmail
    adminContactEmail: '管理邮箱',
    /** 技术联系人 */
    // registry.techContactName
    techContactName: '技术名称',
    // registry.techContactTel
    techContactTel: '技术手机',
    // registry.techContactPhone
    techContactPhone: '技术电话',
    // registry.techContactEmail
    techContactEmail: '技术邮箱',
  };
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 14 },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 3 },
  };

  const onOk = () => {
    form.submit();
  };
  return (
    <Form
      {...formItemLayout}
      initialValues={formData}
      name={props.name}
      form={form}
    >
      <Form.Item name="name" label="注册局名称">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="address" label="注册局地址">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="postCode" label="邮编">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="tel" label="电话">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="fax" label="传真">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="管理联系人" />
      <Form.Item name="adminContactName" label="名称">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="adminContactTel" label="手机">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="adminContactPhone" label="电话">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="adminContactEmail" label="邮箱">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item className={style['array-close-btn']}>
        <p onClick={() => setShowTechContact(!showTechContact)}>
          技术联系人
          <RightOutlined className={showTechContact ? 'open' : ''} />
        </p>
      </Form.Item>
      {showTechContact && (
        <div>
          <Form.Item name="techContactName" label="名称">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="techContactTel" label="手机">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="techContactPhone" label="电话">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item name="techContactEmail" label="邮箱">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </div>
      )}

      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={onOk}>
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
