import React, { useEffect, useState } from 'react';
import { Steps, Form, Button } from 'antd';

import { setLocale, formatMessage, FormattedMessage } from './locales';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

import style from './style.less';
import FifthStep from './FifthStep';
import {
  getLocale,
  setLocale as umiSetLocale,
} from '@@/plugin-locale/localeExports';
import { EnumLanguageType } from '@/types/basic';

interface CreateFormProps {
  locale: string;
  httpSubmitAJax: (formData: any) => Promise<{ success: boolean }>;
  httpValueExistValidator: (
    params: { name: string } | { username: string } | { tld: string },
    type: 'registry' | 'username' | 'tld',
  ) => Promise<{ success: boolean; message: string }>;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [currentStep, setCurrentStep] = useState(3);
  const [formData, setFormData] = useState<{
    basicInfo: Record<string, string>;
    accountInfo: Record<string, string>;
    tldInfo: Record<string, string>[];
  }>({
    basicInfo: {
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
    },
    accountInfo: {
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
    },
    tldInfo: [
      { tld: 'cc', registryName: '注册局名称' },
      { tld: 'com', registryName: '注册局名称' },
      { tld: 'net', registryName: '注册局名称' },
      { tld: 'cn', registryName: '注册局名称' },
      { tld: 'china', registryName: '注册局名称' },
    ],
  });

  const { httpSubmitAJax } = props;

  const handleSubmitData = () => {
    httpSubmitAJax({}).then((res) => {
      console.log(11123);
      console.log(res);
    });
  };

  const handleStepChange = (step: number, data?: any) => {
    console.log('onChange:', step);
    setCurrentStep(step);
    switch (step) {
      case 0:
    }
  };

  /** 步骤条 */
  const formItemArray = [
    {
      // 第一步 - 注册局基本信息
      title: formatMessage({ id: 'registryOpen.createForm.step.first' }),
      desc: formatMessage({ id: 'registryOpen.createForm.step.first.desc' }),
      stepKey: 1,
      name: 'firstStep',
    },
    {
      // 第二步 - 初始化管理员帐号
      title: formatMessage({ id: 'registryOpen.createForm.step.second' }),
      desc: formatMessage({ id: 'registryOpen.createForm.step.second.desc' }),
      stepKey: 2,
      name: 'secondStep',
    },
    {
      // 第三步 - 授权TLD
      title: formatMessage({ id: 'registryOpen.createForm.step.third' }),
      desc: formatMessage({ id: 'registryOpen.createForm.step.third.desc' }),
      stepKey: 3,
      name: 'thirdStep',
    },
    {
      // 第四步 - 预览
      title: formatMessage({ id: 'registryOpen.createForm.step.fourth' }),
      desc: formatMessage({ id: 'registryOpen.createForm.step.fourth.desc' }),
      stepKey: 4,
      name: 'fourthStep',
    },
    {
      // 第五步 - 完成
      title: formatMessage({ id: 'registryOpen.createForm.step.fifth' }),
      desc: formatMessage({ id: 'registryOpen.createForm.step.fifth.desc' }),
      stepKey: 5,
      name: 'fifthStep',
    },
  ];

  const handleChildFormSubmit = (name: string, values: any) => {
    console.log(name);
    console.log(values);
    switch (name) {
      case 'firstStep':
        setFormData({
          ...formData,
          basicInfo: {
            ...formData?.basicInfo,
            ...values,
          },
        });
        setCurrentStep(1);
        break;
      case 'secondStep':
        setFormData({
          ...formData,
          accountInfo: {
            ...formData?.accountInfo,
            ...values,
          },
        });
        setCurrentStep(2);
        break;
      case 'thirdStep':
        setFormData({
          ...formData,
          tldInfo: values,
        });
        setCurrentStep(2);
        break;
    }
  };

  const formComponentProps = {
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    },
    buttonItemLayout: {
      wrapperCol: { span: 14, offset: 4 },
    },
    handleStepChange,
  };

  useEffect(() => {
    const { locale } = props;
    setLocale(locale);
    console.log(`useEffect get ${props.locale}`);
  }, [props.locale]);
  console.log(props.locale);
  return (
    <div className={style.dneCreateForm}>
      <Steps
        type="navigation"
        size="small"
        initial={0}
        className={style.dneCreateFormSteps}
        onChange={handleStepChange}
        current={currentStep}
      >
        {formItemArray.map((item) => {
          return (
            <Steps.Step
              key={item.stepKey}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </Steps>
      <div className="mtxl" style={{ width: 800, margin: '0 auto' }}>
        <Form.Provider onFormFinish={handleChildFormSubmit}>
          {currentStep === 0 && (
            <FirstStep {...formComponentProps} formName="firstStep" />
          )}
          {currentStep === 1 && (
            <SecondStep {...formComponentProps} formName="secondStep" />
          )}
          {currentStep === 2 && (
            <ThirdStep
              {...formComponentProps}
              basicInfo={formData.basicInfo}
              formName="thirdStep"
            />
          )}
          {currentStep === 3 && (
            <FourthStep
              {...formComponentProps}
              formData={formData}
              formName="fourthStep"
            />
          )}
          {currentStep === 4 && (
            <FifthStep {...formComponentProps} formName="fifthStep" />
          )}
        </Form.Provider>
      </div>
    </div>
  );
};
export default CreateForm;
