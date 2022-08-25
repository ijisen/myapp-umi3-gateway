import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Form, Button } from 'antd';
import { RightOutlined, LoadingOutlined } from '@ant-design/icons';
import { isPostalCode } from 'varian-validator';

import { RuleObject, StoreValue } from 'rc-field-form/lib/interface';

import {
  validatorCellphone,
  validatorEmail,
  validatorInputStr,
  validatorTelephone,
} from '../_utils';
import FormItemRender from '../_component/FormItemRender';

import { CreateStepFormProps } from '../typings.d';
import { FieldData } from 'rc-field-form/es/interface';

import style from './style.less';

/**
 * 第一步：注册局基本信息
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  const { registryFormData, httpValueExistValidator } = props;
  const { formatMessage } = useIntl();
  const [form] = Form.useForm();
  const [showTechContact, setShowTechContact] = useState(false);
  const [formData, setFormData] = useState(registryFormData.basicInfo);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
  });
  /** 注册局信息 */
  const formItem = {
    registry: [
      {
        name: 'name',
        label: formatMessage({ id: 'registryOpen.createForm.name' }),
        // validateTrigger: ['onBlur'],
        hasFeedback: true,
        // validateStatus: 'validating',
        // help: 'The information is being validated...',
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              return validatorInputStr(rule, value);
            },
          },
        ],
      },
      {
        name: 'address',
        label: formatMessage({ id: 'registryOpen.createForm.address' }),
        // validateTrigger: ['onBlur'],
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              return validatorInputStr(rule, value, 100);
            },
          },
        ],
      },
      {
        name: 'postCode',
        label: formatMessage({ id: 'registryOpen.createForm.postCode' }),
        // validateTrigger: ['onBlur'],
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              if (!value) {
                return Promise.reject(
                  new Error(
                    formatMessage({
                      id: 'registryOpen.createForm.postCode.required',
                    }),
                  ),
                );
              }
              if (isPostalCode(value, 'CN')) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  formatMessage({
                    id: 'registryOpen.createForm.postCode.err.format',
                  }),
                ),
              );
            },
          },
        ],
      },
      {
        name: 'tel',
        label: formatMessage({ id: 'registryOpen.createForm.tel' }),
        rules: [
          {
            required: true,
            validator: validatorTelephone,
          },
        ],
      },
      {
        name: 'fax',
        label: formatMessage({ id: 'registryOpen.createForm.fax' }),
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              let reg = /^[0-9]{1,12}$/;
              if (reg.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                formatMessage({ id: 'registryOpen.createForm.fax.err' }),
              );
            },
          },
        ],
      },
      {
        name: 'email',
        label: formatMessage({ id: 'registryOpen.createForm.email' }),
        rules: [
          {
            required: true,
            validator: validatorEmail,
          },
        ],
      },
    ],
    /** 管理联系人 */
    adminContact: [
      {
        name: 'adminContactName',
        label: formatMessage({
          id: 'registryOpen.createForm.adminContactName',
        }),
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              return validatorInputStr(rule, value);
            },
          },
        ],
      },
      {
        name: 'adminContactTel',
        label: formatMessage({ id: 'registryOpen.createForm.adminContactTel' }),
        rules: [
          {
            required: true,
            validator: validatorCellphone,
          },
        ],
      },
      {
        name: 'adminContactPhone',
        label: formatMessage({
          id: 'registryOpen.createForm.adminContactPhone',
        }),
        rules: [
          {
            required: true,
            validator: validatorTelephone,
          },
        ],
      },
      {
        name: 'adminContactEmail',
        label: formatMessage({
          id: 'registryOpen.createForm.adminContactEmail',
        }),
        rules: [
          {
            required: true,
            validator: validatorEmail,
          },
        ],
      },
    ],
    /** 技术联系人 */
    techContact: [
      {
        name: 'techContactName',
        label: formatMessage({ id: 'registryOpen.createForm.techContactName' }),
        rules: [
          {
            required: true,
            validator: (rule: RuleObject, value: StoreValue) => {
              return validatorInputStr(rule, value);
            },
          },
        ],
      },
      {
        name: 'techContactTel',
        label: formatMessage({ id: 'registryOpen.createForm.techContactTel' }),
        rules: [
          {
            required: true,
            validator: validatorCellphone,
          },
        ],
      },
      {
        name: 'techContactPhone',
        label: formatMessage({
          id: 'registryOpen.createForm.techContactPhone',
        }),
        rules: [
          {
            required: true,
            validator: validatorTelephone,
          },
        ],
      },
      {
        name: 'techContactEmail',
        label: formatMessage({
          id: 'registryOpen.createForm.techContactEmail',
        }),
        rules: [
          {
            required: true,
            validator: validatorEmail,
          },
        ],
      },
    ],
  };

  /** 提交数据前， 校验注册局名称是否存在 */
  const validateNameIsExist = async (values: any) => {
    const { handleChildSubmit, formName } = props;
    let failed_msg = formatMessage({
      id: 'registryOpen.registry.validator.failed',
    });
    let resConfig: FieldData = {
      name: 'name',
      validating: true,
      warnings: [
        formatMessage({ id: 'registryOpen.registry.validator.loading' }),
      ],
      errors: [],
    };
    setFormStatus({ submitting: true });
    form.setFields([resConfig]);
    const res = await httpValueExistValidator({
      params: { name: values.name },
      type: 'registry',
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
        validateNameIsExist(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { formItemLayout, buttonItemLayout, formName } = props;
  return (
    <Form
      {...formItemLayout}
      initialValues={formData}
      name={formName}
      form={form}
      disabled={formStatus.submitting}
    >
      {/** 注册局信息 */}
      <FormItemRender data={formItem.registry} />

      {/** 管理联系人信息 */}
      <Form.Item className="mbs">
        <FormattedMessage id="registryOpen.createForm.adminContact.title" />
      </Form.Item>
      <FormItemRender data={formItem.adminContact} />

      {/** 技术联系人信息 */}
      <Form.Item className={style['array-close-btn']}>
        <p onClick={() => setShowTechContact(!showTechContact)}>
          <FormattedMessage id="registryOpen.createForm.techContact.title" />
          <RightOutlined className={`mls ${showTechContact ? 'open' : ''}`} />
        </p>
      </Form.Item>
      {showTechContact && (
        <>
          <FormItemRender data={formItem.techContact} />
        </>
      )}

      <Form.Item {...buttonItemLayout} className="text-ct">
        <Button type="primary" onClick={handleSubmit}>
          {formStatus.submitting && <LoadingOutlined className="mrs" />}
          <FormattedMessage id="registryOpen.createForm.btn.next" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
