
import {Flex} from 'antd';
import {S} from './page.styles';
import {useTranslation} from 'react-i18next';
import {ChangeLanguageButton} from '../../i18n/changeLanguage';

export const Header = (props: {size: 'L' | 'S' | undefined}) => {
  const {t} = useTranslation();


  if (props.size === 'S') {
    return (
      <S.Header>
        Sen niye bu kadar kucuksunn
      </S.Header>
    )
  }

  return (
    <S.Header align="center" justify="space-between">
      <img src="" style={{border: '1px solid black', height: 20, width: 20}}></img>
      <Flex gap={5} align="center">
        <S.MenuItem><ChangeLanguageButton /></S.MenuItem>
        <S.MenuItem onClick={() => {}}>{t('Header.about')}</S.MenuItem>
        <S.MenuItem onClick={() => {}}>{t('Header.menu')}</S.MenuItem>
        <S.MenuItem onClick={() => {}}>{t('Header.rezervation')}</S.MenuItem>
      </Flex>
    </S.Header>
  )
};
