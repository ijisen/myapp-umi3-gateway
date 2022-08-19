import React, { useState, useContext } from 'react';
import { Button, Steps, Form } from 'antd';

import FirstStep from './FirstStep';
import style from './style.less';
import SecondStep from './SecondStep';

interface CreateFormProps {
  submitAJax: (formData: any) => Promise<
    | {
        success: boolean;
      }
    | undefined
  >;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { submitAJax } = props;
  const handleSubmitData = () => {
    submitAJax({}).then((res) => {
      console.log(11123);
      console.log(res);
    });
  };

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrentStep(value);
  };
  return (
    <div className={style.dneCreateForm}>
      <Steps
        type="navigation"
        size="small"
        className={style.dneCreateFormSteps}
        onChange={onChange}
        current={currentStep}
      >
        <Steps.Step title="第一步" description="注册局基本信息" />
        <Steps.Step title="第二步" description="初始化管理员帐号" />
        <Steps.Step title="第三步" description="授权TLD" />
        <Steps.Step title="第四步" description="预览" />
        <Steps.Step title="第五步" description="完成" />
      </Steps>
      <div className="mtxl" style={{ width: 800, margin: '0 auto' }}>
        <Form.Provider
          onFormFinish={(name: string, { values, forms }) => {
            console.log(name);
            console.log(values);
            console.log(forms);
            if (name === 'firstStep') {
              // Do something...
              /*
              *
               const { basicForm } = forms;
           const users = basicForm.getFieldValue('users') || [];
           basicForm.setFieldsValue({ users: [...users, values] });
           setVisible(false);
              * */
            }
          }}
        >
          <SecondStep />
        </Form.Provider>
      </div>
    </div>
  );
};
export default CreateForm;
