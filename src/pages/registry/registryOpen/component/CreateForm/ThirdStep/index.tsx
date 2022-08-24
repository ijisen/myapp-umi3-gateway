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
const CreateForm: React.FC<
  CreateStepFormProps & { basicInfo: { name?: string } }
> = (props) => {
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
  >([]);
  const { handleStepChange } = props;

  /** 数据提交 */
  const handleModalSubmit = () => {
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        console.log(form);
        setFormLoading(true);
        if (tableData.findIndex((item) => item.tld === res.tld) > -1) {
          form.setFields([
            {
              name: 'tld',
              errors: [
                formatMessage(
                  { id: 'registryOpen.createForm.tld.exist' },
                  { tld: res.tld },
                ),
              ],
            },
          ]);
          setFormLoading(false);
          return false;
        }

        /** TODO: 远程校验中 ... */
        setTableData(
          tableData.concat({
            ...res,
            registryName: props.basicInfo?.name || '',
          }),
        );
        handleCloseModal();
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

  const handleCloseModal = () => {
    setModalVisible(false);
    form.resetFields();
  };

  /** 预览 */
  const handlePreview = () => {
    handleStepChange(
      3,
      tableData.map((item) => ({
        tld: item.tld,
        registryName: item.registryName,
      })),
    );
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
      <div className="text-ct pbl ptl">
        <Button type="primary" onClick={() => handleStepChange(1)}>
          <FormattedMessage id="registryOpen.createForm.btn.prev" />
        </Button>
        <Button className="mll" type="primary" onClick={handlePreview}>
          <FormattedMessage id="registryOpen.createForm.btn.preview" />
        </Button>
      </div>
    </Layout>
  );
};

export default CreateForm;
