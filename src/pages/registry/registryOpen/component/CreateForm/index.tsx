import React, { useState } from 'react';
import { useIntl } from 'umi';
import { message as $Message, Steps } from 'antd';

import { CreateFormDataType } from './typings.d';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';

import style from './style.less';
import { getLocale } from '@@/plugin-locale/localeExports';

interface CreateFormProps {
  locale?: string;
  httpSubmitAJax: (formData: any) => Promise<any>;
  httpValueExistValidator: (data: {
    params: { name: string } | { username: string } | { tld: string };
    type: 'registry' | 'username' | 'tld';
  }) => Promise<any>;
}

const initRegistryFormData = {
  basicInfo: {
    // registry.name =》 注册局名称
    name: '',
    // registry.address =》 注册局地址
    address: ``,
    // registry.postCode =》 邮编
    postCode: '',
    // registry.tel =》 电话
    tel: '',
    // registry.fax =》 传真
    fax: '',
    // registry.email =》 邮箱
    email: '',
    /** 管理联系人 */
    // registry.adminContactName =》 管理名称
    adminContactName: '',
    // registry.adminContactTel =》 管理手机
    adminContactTel: '',
    // registry.adminContactPhone =》 管理电话
    adminContactPhone: '',
    // registry.adminContactEmail =》 管理邮箱
    adminContactEmail: '',
    /** 技术联系人 */
    // registry.techContactName =》
    techContactName: '',
    // registry.techContactTel =》 技术手机
    techContactTel: '',
    // registry.techContactPhone =》 技术电话
    techContactPhone: '',
    // registry.techContactEmail =》 技术邮箱
    techContactEmail: '',
  },
  accountInfo: {
    // accountInfo.name =》 注册局管理员名称
    name: '',
    // accountInfo.username =》 登录帐号
    username: ``,
    // accountInfo.password =》 登录密码
    password: '',
    // accountInfo.repeatPassword =》 重复输入密码
    repeatPassword: '',
    // accountInfo.email =》 邮箱
    email: '',
  },
  tldInfo: [],
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { formatMessage } = useIntl();
  const { httpSubmitAJax, httpValueExistValidator } = props;

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
  });
  const [currentStep, setCurrentStep] = useState(3);
  const [registryFormData, setFormData] =
    useState<CreateFormDataType>(initRegistryFormData);

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

  /** 提交数据格式 */
  const handleSubmitData = () => {
    setFormStatus({
      ...formStatus,
      submitting: true,
    });
    httpSubmitAJax(registryFormData)
      .then((res) => {
        const { success, message } = res || {};
        console.log(res);
        if (success) {
          handleStepChange('fourthStep', 'next');
          setFormStatus({
            ...formStatus,
            submitting: false,
            submitted: true,
          });
          // $Message.success(formatMessage({ id: 'registryOpen.success' }));
        } else {
          setFormStatus({
            ...formStatus,
            submitting: false,
          });
          $Message.error(
            message || formatMessage({ id: 'registryOpen.failed' }),
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setFormStatus({
          ...formStatus,
          submitting: false,
        });
        $Message.error(formatMessage({ id: 'registryOpen.failed' }));
      });
  };

  /** */
  const handleResetFormData = () => {
    setFormStatus({
      submitting: false,
      submitted: false,
    });
    setFormData({ ...initRegistryFormData });
  };

  /** 步骤条切换 */
  const handleStepChange = (name: string, type: 'prev' | 'next' = 'next') => {
    console.log('onChange:', name);
    let step = currentStep;
    // 0 1 2 3 4
    switch (name) {
      case 'firstStep':
        // 0 => 1
        step = 1;
        break;
      case 'secondStep':
        // 1 => 0 || 1 => 2
        type === 'next' ? (step = 2) : (step = 0);
        break;
      case 'thirdStep':
        // 2 => 1 || 2 => 3
        type === 'next' ? (step = 3) : (step = 1);
        break;
      case 'fourthStep':
        // 3 => 2 || 3 => 4
        type === 'next' ? (step = 4) : (step = 2);
        break;
      case 'fifthStep':
        // 4 => 3 || 4 => 0
        type === 'next' ? (step = 0) : (step = 3);
        if (type === 'next') {
          handleResetFormData();
        }
        break;
    }
    setCurrentStep(step);
  };

  const handleChildSubmit = (name: string, data: any) => {
    console.log(name);
    console.log(data);
    switch (name) {
      case 'firstStep':
        setFormData({
          ...registryFormData,
          basicInfo: {
            ...registryFormData?.basicInfo,
            ...data,
          },
        });
        handleStepChange(name);
        break;
      case 'secondStep':
        setFormData({
          ...registryFormData,
          accountInfo: {
            ...registryFormData?.accountInfo,
            ...data,
          },
        });
        handleStepChange(name);
        break;
      case 'thirdStep':
        setFormData({
          ...registryFormData,
          tldInfo: data,
        });
        handleStepChange(name);
        break;
      case 'fourthStep':
        // 预览 =》 提交数据
        handleSubmitData();
        break;
    }
  };

  const labelCol_span = getLocale() === 'en-US' ? 5 : 4;
  const formComponentProps = {
    ...formStatus,
    registryFormData: { ...registryFormData },
    formItemLayout: {
      labelCol: { span: labelCol_span },
      wrapperCol: { span: 14 },
    },
    buttonItemLayout: {
      wrapperCol: { span: 14, offset: labelCol_span },
    },
    handleStepChange,
    handleChildSubmit,
    httpValueExistValidator,
  };

  return (
    <div className={style.dneCreateForm}>
      <Steps
        type="navigation"
        size="small"
        initial={0}
        className={style.dneCreateFormSteps}
        onChange={setCurrentStep}
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
        {currentStep === 0 && (
          <FirstStep {...formComponentProps} formName="firstStep" />
        )}
        {currentStep === 1 && (
          <SecondStep {...formComponentProps} formName="secondStep" />
        )}
        {currentStep === 2 && (
          <ThirdStep {...formComponentProps} formName="thirdStep" />
        )}
        {currentStep === 3 && (
          <FourthStep {...formComponentProps} formName="fourthStep" />
        )}
        {currentStep === 4 && (
          <FifthStep {...formComponentProps} formName="fifthStep" />
        )}
      </div>
    </div>
  );
};
export default CreateForm;
