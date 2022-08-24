import React, { useState } from 'react';
import { Form, Button, List, Row, Col, Space } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

import ComponentTable from '../_component/ComponentTable';

import { CreateStepFormProps } from '../typings.d';

import './style.less';

/**
 * 第四步：预览
 *
 * */
const CreateForm: React.FC<CreateStepFormProps & { formData: any }> = (
  props,
) => {
  const { formData, handleStepChange } = props;
  /** 数据提交 */
  const handleSubmit = () => {};

  const { basicInfo, accountInfo } = formData;
  return (
    <div className="dne-registry-open-fourth-step">
      {/** 注册局信息 */}
      <List
        header={<div className="head-title">注册局信息</div>}
        bordered
        className="mbl"
      >
        <Row>
          <Col span={12}>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                注册局名称
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.name}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                注册局地址
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.address}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                邮编
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.postCode}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                电话
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.tel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                传真
              </Col>
              <Col span={12} className="text-lf border-right">
                {basicInfo.fax}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                邮箱
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
                管理联系人名称
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.adminContactName}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                管理联系人手机
              </Col>
              <Col span={12} className="border-right">
                {basicInfo.adminContactTel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                管理联系人电话
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.adminContactPhone}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                管理联系人邮箱
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.adminContactEmail}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                技术联系人名称
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactName}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                技术联系人手机
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactTel}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                技术联系人电话
              </Col>
              <Col span={12} className="text-lf">
                {basicInfo.techContactPhone}
              </Col>
            </Row>
            <Row className="col-list">
              <Col span={12} className="text-rt border-right">
                技术联系人邮箱
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
        header={<div className="head-title">注册局管理员信息</div>}
        bordered
        className="mbl"
      >
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            注册局管理员名称
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.name}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            登录帐号
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.username}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            登录密码
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.password}
          </Col>
        </Row>
        <Row className="col-list">
          <Col span={12} className="text-rt border-right">
            邮箱
          </Col>
          <Col span={12} className="text-lf">
            {accountInfo.email}
          </Col>
        </Row>
      </List>

      {/**  注册局授权TLD信息 - 表格渲染  */}
      <ComponentTable
        title={() => <p className="head-title pts pbs">注册局授权TLD信息</p>}
        loading={false}
        tableData={formData.tldInfo}
      />

      <div className="text-ct pbl ptl">
        <Button type="primary" onClick={() => handleStepChange(2)}>
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
