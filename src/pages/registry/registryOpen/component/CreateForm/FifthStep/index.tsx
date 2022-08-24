import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

import { RuleObject, StoreValue } from 'rc-field-form/lib/interface';

import {
  validatorEmail,
  validatorInputStr,
  validatorPassword,
  validatorUsername,
} from '../_utils';
import FormItemRender from '../_component/FormItemRender';

import { CreateStepFormProps } from '../typings.d';

/**
 * 第五步：完成
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const [formData, setFormData] = useState({
    // accountInfo.name =》 注册局管理员名称
    name: '注册局管理员名称',
    // accountInfo.username =》 登录帐号
    username: `userA123ame`,
    // accountInfo.password =》 登录密码
    password: '61A010@0',
    // accountInfo.repeatPassword =》 重复输入密码
    repeatPassword: '61A010@0',
    // accountInfo.email =》 邮箱
    email: '115@768.cc',
  });
  /** 管理员帐号信息 */
  const formItem = {
    accountInfo: [
      {
        name: 'name',
        label: formatMessage({ id: 'registryOpen.createForm.account.name' }),
        rules: [
          {
            required: true,
            validator: (rule: any, value: string) => {
              return validatorInputStr(rule, value);
            },
          },
        ],
      },
      {
        name: 'username',
        label: formatMessage({
          id: 'registryOpen.createForm.account.username',
        }),
        rules: [
          {
            required: true,
            validator: validatorUsername,
          },
        ],
      },
      {
        name: 'password',
        type: 'password',
        label: formatMessage({
          id: 'registryOpen.createForm.account.password',
        }),
        rules: [
          {
            required: true,
            validator: validatorPassword,
          },
        ],
      },
      {
        name: 'repeatPassword',
        type: 'password',
        dependencies: ['password'],
        label: formatMessage({
          id: 'registryOpen.createForm.account.repeatPassword',
        }),
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              if (value) {
                const password = form.getFieldValue('password');
                if (value !== password) {
                  return Promise.reject(
                    formatMessage({
                      id: 'registryOpen.createForm.account.repeatPassword.error',
                    }),
                  );
                }
                return Promise.resolve();
              }
              return Promise.reject(
                formatMessage({
                  id: 'registryOpen.createForm.account.repeatPassword.required',
                }),
              );
            },
          },
        ],
      },
      {
        name: 'email',
        label: formatMessage({ id: 'registryOpen.createForm.account.email' }),
        rules: [
          {
            required: true,
            validator: validatorEmail,
          },
        ],
      },
    ],
  };

  /** 数据提交 */
  const handleSubmit = () => {
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        form.submit();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { formItemLayout, buttonItemLayout, formName, handleStepChange } =
    props;
  return (
    <Form
      {...formItemLayout}
      initialValues={formData}
      name={formName}
      form={form}
    >
      {/** 管理员帐号信息 */}
      <FormItemRender data={formItem.accountInfo} />

      <Form.Item {...buttonItemLayout} className="text-ct">
        <Button type="primary" onClick={() => handleStepChange(0)}>
          <FormattedMessage id="registryOpen.createForm.btn.prev" />
        </Button>
        <Button className="mll" type="primary" onClick={handleSubmit}>
          <FormattedMessage id="registryOpen.createForm.btn.next" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
