import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { isPostalCode } from 'varian-validator';
import { RuleObject, StoreValue } from 'rc-field-form/lib/interface';

import {
  validatorCellphone,
  validatorEmail,
  validatorInputStr,
  validatorTelephone,
} from '../_utils';
import FormItemRender from '../_component/FormItemRender';
import { formatMessage, FormattedMessage } from '../locales';

import { CreateStepFormProps } from '../typings.d';

import style from '../style.less';

/**
 * 第一步：注册局基本信息
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  const [form] = Form.useForm();
  const [showTechContact, setShowTechContact] = useState(false);
  const [formData, setFormData] = useState({
    // registry.name =》 注册局名称
    name: '注册局名称',
    // registry.address =》 注册局地址
    address: `注册局地址`,
    // registry.postCode =》 邮编
    postCode: '610100',
    // registry.tel =》 电话
    tel: '1023141',
    // registry.fax =》 传真
    fax: '115768',
    // registry.email =》 邮箱
    email: '111@cc.cc',
    /** 管理联系人 */
    // registry.adminContactName =》 管理名称
    adminContactName: '管理名称',
    // registry.adminContactTel =》 管理手机
    adminContactTel: '15910665811',
    // registry.adminContactPhone =》 管理电话
    adminContactPhone: '125467',
    // registry.adminContactEmail =》 管理邮箱
    adminContactEmail: 'admin@cc.cc',
    /** 技术联系人 */
    // registry.techContactName =》
    techContactName: '技术名称',
    // registry.techContactTel =》 技术手机
    techContactTel: '15910665812',
    // registry.techContactPhone =》 技术电话
    techContactPhone: '125467',
    // registry.techContactEmail =》 技术邮箱
    techContactEmail: 'tech@cc.cc',
  });
  /** 注册局信息 */
  const formItem = {
    registry: [
      {
        name: 'name',
        label: formatMessage({ id: 'registryOpen.createForm.name' }),
        // validateTrigger: ['onBlur'],
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

  const { formItemLayout, buttonItemLayout, formName } = props;
  return (
    <Form
      {...formItemLayout}
      initialValues={formData}
      name={formName}
      form={form}
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
          <FormattedMessage id="registryOpen.createForm.btn.next" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
