import React from 'react';
import { Button, List, Row, Col } from 'antd';
import { FormattedMessage } from 'umi';

import ComponentTable from '../_component/ComponentTable';

import { CreateStepFormProps } from '../typings.d';

import './style.less';

/**
 * 第四步：预览
 *
 * */
const CreateForm: React.FC<CreateStepFormProps> = (props) => {
  /** 返回上一步 */
  const handleReturnToPrev = () => {
    const { handleStepChange, formName } = props;
    handleStepChange(formName, 'prev');
  };

  /** 数据提交 */
  const handleSubmit = () => {
    const { handleChildSubmit, formName } = props;
    handleChildSubmit(formName);
  };

  const {
    registryFormData: { basicInfo, accountInfo, tldInfo },
  } = props;

  return (
    <div className="dne-registry-open-fourth-step">
      {/** 注册局信息 */}
      <List
        header={
          <div className="head-title">
            <FormattedMessage
              id="registryOpen.createForm.preview.first.title"
              defaultMessage="注册局信息"
            />
          </div>
        }
        bordered
        className="mbl"
      >
        <Row>
          <Col span={12}>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.name"
                  defaultMessage="注册局名称"
                />
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.name}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.address"
                  defaultMessage="注册局地址"
                />
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.address}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.postCode"
                  defaultMessage="邮编"
                />
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.postCode}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.tel"
                  defaultMessage="电话"
                />
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.tel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.fax"
                  defaultMessage="传真"
                />
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.fax}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.email"
                  defaultMessage="邮箱"
                />
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.email}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                &nbsp;
              </Col>
              <Col span={12} className="text-lf border-right">
                &nbsp;
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                &nbsp;
              </Col>
              <Col span={12} className="text-lf border-right">
                &nbsp;
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.adminContact.title"
                  defaultMessage="管理联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.adminContactName"
                  defaultMessage="名称"
                />
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.adminContactName}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.adminContact.title"
                  defaultMessage="管理联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.adminContactTel"
                  defaultMessage="手机"
                />
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.adminContactTel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.adminContact.title"
                  defaultMessage="管理联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.adminContactPhone"
                  defaultMessage="电话"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.adminContactPhone}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.adminContact.title"
                  defaultMessage="管理联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.adminContactEmail"
                  defaultMessage="邮箱"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.adminContactEmail}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.techContact.title"
                  defaultMessage="技术联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.techContactName"
                  defaultMessage="名称"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactName}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.techContact.title"
                  defaultMessage="技术联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.techContactTel"
                  defaultMessage="手机"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactTel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.techContact.title"
                  defaultMessage="技术联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.techContactPhone"
                  defaultMessage="电话"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactPhone}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                <FormattedMessage
                  id="registryOpen.createForm.techContact.title"
                  defaultMessage="技术联系人"
                />
                &nbsp;
                <FormattedMessage
                  id="registryOpen.createForm.techContactEmail"
                  defaultMessage="邮箱"
                />
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactEmail}
              </Col>
            </Row>
          </Col>
        </Row>
      </List>

      {/** 注册局管理员信息 */}
      <List
        header={
          <div className="head-title">
            <FormattedMessage
              id="registryOpen.createForm.preview.first.title"
              defaultMessage="注册局管理员信息"
            />
          </div>
        }
        bordered
        className="mbl"
      >
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            <FormattedMessage
              id="registryOpen.createForm.account.name"
              defaultMessage="注册局管理员名称"
            />
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.name}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            <FormattedMessage
              id="registryOpen.createForm.account.username"
              defaultMessage="登录帐号"
            />
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.username}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            <FormattedMessage
              id="registryOpen.createForm.account.password"
              defaultMessage="登录密码"
            />
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.password}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            <FormattedMessage
              id="registryOpen.createForm.account.email"
              defaultMessage="邮箱"
            />
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.email}
          </Col>
        </Row>
      </List>

      {/**  注册局授权TLD信息 - 表格渲染  */}
      <ComponentTable
        title={() => (
          <div className="head-title pts pbs">
            <FormattedMessage
              id="registryOpen.createForm.preview.third.title"
              defaultMessage="注册局授权TLD信息"
            />
          </div>
        )}
        loading={false}
        tableData={tldInfo}
      />

      <div className="text-ct pbl ptl">
        <Button type="primary" onClick={handleReturnToPrev}>
          <FormattedMessage id="registryOpen.createForm.btn.prev" />
        </Button>
        <Button className="mll" type="primary" onClick={handleSubmit}>
          <FormattedMessage id="registryOpen.createForm.btn.submit" />
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
