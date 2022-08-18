import styles from './index.less';
import { useIntl, setLocale, getLocale } from 'umi';
import { EnumLanguageType } from '@/types/basic.d';
import React from 'react';
import PageContainer from '@/layouts/PageContainer';
import { Button, Card, Typography, Space } from 'antd';

const { Title, Text, Link } = Typography;

export default function IndexPage() {
  const { formatMessage } = useIntl();
  const changeLocale = () => {
    const locale = getLocale();
    if (locale === EnumLanguageType.zh) {
      setLocale(EnumLanguageType.en, false);
    } else {
      setLocale(EnumLanguageType.zh, false);
    }
  };
  return (
    <PageContainer>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary" onClick={changeLocale}>
        切换
      </Button>
      <p>{formatMessage({ id: 'keywords.confirm.opt' })}</p>

      {/** BUTTON */}
      <Card className="mbl">
        <Button className="mrs">button default</Button>
        <Button type="primary" className="mrs">
          button primary
        </Button>
        <Button type="primary" danger className="mrs">
          button danger
        </Button>
        <Button type="primary">button</Button>
      </Card>

      {/** Title */}
      <Card className="mbl">
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
      </Card>

      <Space
        direction="vertical"
        style={{ backgroundColor: '#fff' }}
        className="mbl"
      >
        <Text>Ant Design (default)</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete>Ant Design (delete)</Text>
        <Text strong>Ant Design (strong)</Text>
        <Text italic>Ant Design (italic)</Text>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>
    </PageContainer>
  );
}
