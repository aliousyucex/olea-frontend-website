import { Space } from 'antd';
import {S} from './page.styles';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/icons/instagram-icon-footer.png';

export const Footer = () => {
  const {t} = useTranslation();
  
    return (
    <S.BlackBackground>
      <S.Container>
        <Space size={10} align="center">
            <S.Text>{t('Header.followUs')}:</S.Text>
        <S.img src={logo} alt="logo" />
        </Space>
      </S.Container>
    </S.BlackBackground>
  );
};