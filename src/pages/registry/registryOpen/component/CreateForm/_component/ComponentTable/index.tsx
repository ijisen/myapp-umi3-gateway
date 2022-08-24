import React, { FC } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Table } from 'antd';

/** 自定义函数 */

/** type 类申明 */
import {
  TLDItemDataType,
  TLDTableDataType,
  EnumDictKey,
} from '../../typings.d';

interface PageInit {
  title?: (data: any) => React.ReactNode;
  loading: boolean;
  tableData: TLDTableDataType;
  onBtnClick?: (type: EnumDictKey, record: TLDItemDataType) => void;
  showOtp?: boolean;
}

const ComponentTable: FC<PageInit> = ({
  title,
  loading,
  showOtp,
  tableData,
  onBtnClick,
}) => {
  const columns = [
    {
      // title: '序号',
      title: <FormattedMessage id="keywords.rowNo" />,
      dataIndex: 'index',
      width: 50,
      align: 'center',
      render: (text: string, record: TLDItemDataType, index: number) => {
        return index + 1;
      },
    },
    {
      // title: '注册局名称',
      title: <FormattedMessage id="registryOpen.createForm.tld.registry" />,
      dataIndex: 'registryName',
      width: 200,
    },
    {
      // title: 'tld',
      title: 'TLD',
      dataIndex: 'tld',
      width: 200,
    },
  ];
  if (showOtp) {
    columns.push({
      title: <FormattedMessage id="keywords.opt" />,
      dataIndex: 'opt',
      width: 105,
      align: 'center',
      className: 'opt-style',
      // @ts-ignore
      render: (text: any, record: TLDItemDataType) => (
        <>
          <Button
            type="link"
            size="small"
            danger
            onClick={() => onBtnClick && onBtnClick(EnumDictKey.DELETE, record)}
          >
            <FormattedMessage id="keywords.delete" />
          </Button>
        </>
      ),
    });
  }

  if (!Array.isArray(tableData)) {
    tableData = [];
  }

  return (
    <Table
      title={title}
      loading={loading}
      bordered
      rowKey="tld"
      size="small"
      pagination={false}
      // @ts-ignore
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default ComponentTable;
