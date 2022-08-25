import React, { useState } from 'react';
import { Form, Button, Modal, Layout, Input } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
  CreateStepFormProps,
  EnumDictKey,
  TLDItemDataType,
} from '../typings.d';
import ComponentTable from '../_component/ComponentTable';

/**
 * 第三步：授权TLD
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  const { registryFormData } = props;
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const [modalVisible, setModalVisible] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    tld: '',
  });
  const [tableData, setTableData] = useState<
    {
      registryName: string;
      tld: string;
    }[]
  >(registryFormData.tldInfo || []);

  /** 数据提交 */
  const handleModalSubmit = () => {
    const { httpValueExistValidator, registryFormData, formName } = props;
    form
      .validateFields()
      .then(async (values) => {
        console.log(values);
        console.log(form);
        setFormLoading(true);
        console.log(tableData);
        if (tableData.findIndex((item) => item.tld === values.tld) > -1) {
          form.setFields([
            {
              name: 'tld',
              errors: [
                formatMessage(
                  { id: 'registryOpen.createForm.tld.exist' },
                  { tld: values.tld },
                ),
              ],
            },
          ]);
          setFormLoading(false);
          return false;
        }

        /** 远程校验中 ... */
        const res = await httpValueExistValidator({
          params: { tld: values.tld },
          type: 'tld',
        });
        console.log(res);
        const { success, message } = res || {};
        if (success) {
          setTableData(
            tableData.concat({
              ...values,
              registryName: registryFormData.basicInfo?.name || '',
            }),
          );
          handleCloseModal();
        } else {
          let failed_msg = formatMessage({
            id: 'registryOpen.tld.validator.failed',
          });
          form.setFields([
            {
              name: 'tld',
              warnings: [],
              errors: [message || failed_msg],
            },
          ]);
        }
        setFormLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /** 操作栏按钮点击事件 */
  const handleOptBtnClick = (role: EnumDictKey, data?: TLDItemDataType[]) => {
    console.log(`handleOptBtnClick Role:  ${role}`);
    switch (role) {
      case EnumDictKey.CREATE:
        // 新增
        setModalVisible(true);
        break;
      default:
        console.log(`undefined Role ${role}`);
    }
  };

  /** 表格按钮点击事件*/
  const handleTableClick = (role: EnumDictKey, record: TLDItemDataType) => {
    switch (role) {
      case EnumDictKey.DELETE:
        // 删除数据
        Modal.confirm({
          title: formatMessage({
            id: 'registryOpen.createForm.tld.delete.confirm',
          }),
          icon: <ExclamationCircleOutlined />,
          okButtonProps: { danger: true },
          onOk: async () => {
            setTableData(tableData.filter((item) => item.tld !== record.tld));
          },
        });
        break;
      case EnumDictKey.EDIT:
        // 删除数据
        setModalVisible(true);
        break;
    }
  };

  /** 返回上一步 */
  const handleReturnToPrev = () => {
    const { handleStepChange, formName } = props;
    handleStepChange(formName, 'prev');
  };

  /** 预览 */
  const handleSubmit = () => {
    const { handleChildSubmit, formName } = props;
    handleChildSubmit(formName, tableData);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    form.resetFields();
  };
  return (
    <Layout>
      {/**  操作栏按钮  */}
      <div className="ptm pbm plm">
        <Button
          type="primary"
          className="mrs"
          onClick={() => handleOptBtnClick(EnumDictKey.CREATE)}
        >
          <FormattedMessage id="registryOpen.createForm.tld.modal.title" />
        </Button>
      </div>

      {/**  表格渲染  */}
      <ComponentTable
        loading={false}
        tableData={tableData}
        onBtnClick={handleTableClick}
        showOtp={true}
      />

      {/** footer 按钮 */}
      <div className="text-ct pbl ptl">
        <Button type="primary" onClick={handleReturnToPrev}>
          <FormattedMessage id="registryOpen.createForm.btn.prev" />
        </Button>
        <Button className="mll" type="primary" onClick={handleSubmit}>
          <FormattedMessage id="registryOpen.createForm.btn.preview" />
        </Button>
      </div>

      <Modal
        title={<FormattedMessage id="registryOpen.createForm.tld.btn.create" />}
        visible={modalVisible}
        onOk={handleModalSubmit}
        closable={!formLoading}
        maskClosable={!formLoading}
        width={400}
        confirmLoading={formLoading}
        cancelButtonProps={{
          disabled: formLoading,
        }}
        onCancel={() => {
          !formLoading && handleCloseModal();
        }}
      >
        <Form
          className="mtl"
          initialValues={formData}
          form={form}
          disabled={formLoading}
        >
          <Form.Item
            label="TLD"
            name="tld"
            rules={[
              {
                required: true,
                validator: (rule, value) => {
                  if (value) {
                    const regExp = new RegExp(
                      '^(?!-)(?!.*?-$)[a-zA-Z0-9-\\u4e00-\\u9fa5]+$',
                    );
                    if (!regExp.test(value)) {
                      return Promise.reject(
                        new Error(
                          formatMessage({
                            id: 'registryOpen.createForm.tld.error',
                          }),
                        ),
                      );
                    }
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      formatMessage({
                        id: 'registryOpen.createForm.tld.required',
                      }),
                    ),
                  );
                },
              },
            ]}
          >
            <Input autoComplete="off" placeholder="TLD" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default CreateForm;
