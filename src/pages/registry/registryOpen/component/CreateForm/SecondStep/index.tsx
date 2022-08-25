import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { LoadingOutlined } from '@ant-design/icons';

import {
  validatorEmail,
  validatorInputStr,
  validatorPassword,
  validatorUsername,
} from '../_utils';
import FormItemRender from '../_component/FormItemRender';

import { CreateStepFormProps } from '../typings.d';
import { FieldData } from 'rc-field-form/es/interface';
import { RuleObject, StoreValue } from 'rc-field-form/lib/interface';

/**
 * 第二步：初始化管理员帐号
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  const { registryFormData } = props;
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const [formData, setFormData] = useState(registryFormData.accountInfo);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
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

  /** 提交数据前， 校验账户是否存在 */
  const validateUserNameIsExist = async (values: any) => {
    const { httpValueExistValidator, handleChildSubmit, formName } = props;
    let failed_msg = formatMessage({
      id: 'registryOpen.username.validator.failed',
    });
    let resConfig: FieldData = {
      name: 'username',
      validating: true,
      warnings: [
        formatMessage({ id: 'registryOpen.username.validator.loading' }),
      ],
      errors: [],
    };
    setFormStatus({ submitting: true });
    form.setFields([resConfig]);
    const res = await httpValueExistValidator({
      params: { username: values.username },
      type: 'username',
    });
    console.log(res);
    const { success, message } = res || {};
    if (success) {
      handleChildSubmit(formName, values);
      resConfig = {
        ...resConfig,
        validating: false,
        warnings: [],
        errors: [],
      };
    } else {
      resConfig = {
        ...resConfig,
        validating: false,
        warnings: [],
        errors: [message || failed_msg],
      };
    }
    form.setFields([resConfig]);
    setFormStatus({ submitting: false });
  };

  /** 数据提交 */
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        validateUserNameIsExist(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { formName, formItemLayout, buttonItemLayout, handleStepChange } =
    props;
  return (
    <Form
      {...formItemLayout}
      initialValues={formData}
      name={formName}
      form={form}
      disabled={formStatus.submitting}
    >
      {/** 管理员帐号信息 */}
      <FormItemRender data={formItem.accountInfo} />

      <Form.Item {...buttonItemLayout} className="text-ct">
        <Button
          type="primary"
          onClick={() => handleStepChange(formName, 'prev')}
        >
          <FormattedMessage id="registryOpen.createForm.btn.prev" />
        </Button>
        <Button className="mll" type="primary" onClick={handleSubmit}>
          {formStatus.submitting && <LoadingOutlined className="mrs" />}
          <FormattedMessage id="registryOpen.createForm.btn.next" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
