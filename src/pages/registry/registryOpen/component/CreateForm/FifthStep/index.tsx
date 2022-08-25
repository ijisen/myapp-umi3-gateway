import React from 'react';
import { Button, Result } from 'antd';
import { FormattedMessage } from 'umi';

import { CreateStepFormProps } from '../typings.d';

/**
 * 第五步：完成
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  /** 数据提交 */
  const handleReturn = () => {
    const { handleStepChange, formName } = props;
    handleStepChange(formName);
  };

  return (
    <div>
      <Result
        status="success"
        title={<FormattedMessage id="registryOpen.success" />}
      />
      <div className="text-ct pbl ptl">
        <Button type="primary" onClick={handleReturn}>
          <FormattedMessage id="registryOpen.createForm.btn.return" />
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
