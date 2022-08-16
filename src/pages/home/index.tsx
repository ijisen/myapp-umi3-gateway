import styles from './index.less';
import { useIntl, setLocale,getLocale } from 'umi';
import { Button } from 'antd';
import { EnumLanguageType } from '@/types/basic.d';

export default function IndexPage() {
  const { formatMessage } = useIntl();
  const changeLocale = () => {
    const locale = getLocale();
    if (locale === EnumLanguageType.zh) {
      setLocale(EnumLanguageType.en, false);
    } else {
      setLocale(EnumLanguageType.zh, false);
    }
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary" onClick={changeLocale}>切换</Button>
      <p>{formatMessage({ id: 'keywords.confirm.opt' })}</p>
    </div>
  );
}
