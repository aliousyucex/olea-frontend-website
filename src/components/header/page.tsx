import {S} from "./page.styles";
import {useTranslation} from 'react-i18next';
import Logo from '../../assets/icons/Logo.jpg';
import {useState} from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {ChangeLanguageButton} from '../../i18n/changeLanguage';
import {changeCurrentLanguage, getCurrentLanguageCode} from '../../i18n/i18n';

export const Header = () => {
  const {t} = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      setIsMobileMenuOpen(false);
    }
  };

  const handleFollowUs = () => {
    window.open('https://www.instagram.com/oleapizzeria/', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <S.Header>
        <S.HeaderSection>
          <img src={Logo} alt="Olea Logo" />
        </S.HeaderSection>

        <S.MenuContainer>
          <S.MenuItem onClick={() => scrollToComponent('menu')}>{t('Header.menu')}</S.MenuItem>
          <S.MenuItem onClick={() => scrollToComponent('location')}>{t('Header.rezervation')}</S.MenuItem>
          <S.MenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MenuItem>
          <ChangeLanguageButton />
        </S.MenuContainer>

        <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuOutlined />
        </S.MobileMenuButton>
      </S.Header>

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileMenuItem onClick={() => scrollToComponent('menu')}>{t('Header.menu')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => scrollToComponent('location')}>{t('Header.rezervation')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => changeCurrentLanguage()}>
          {getCurrentLanguageCode() === 'en' ? 'TR' : 'EN'}
        </S.MobileMenuItem>
      </S.MobileMenu>
    </>
  );
};
