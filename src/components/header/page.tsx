import {S} from "./page.styles";
import {useTranslation} from 'react-i18next';
import Logo from '../../assets/icons/Logo.jpg';
import {useState} from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {ChangeLanguageButton} from '../../i18n/changeLanguage';
import {changeCurrentLanguage, getCurrentLanguageCode} from '../../i18n/i18n';

declare global {
  interface Window {
    navigateTo: (path: string) => void;
  }
}

export const Header = () => {
  const {t} = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

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

  const handleMenuClick = (action: string) => {
    setIsMenuDropdownOpen(false);
    setIsMobileMenuOpen(false);
    
    if (window.location.hash !== '#home' && action === 'location') {
      window.navigateTo('home');
      setTimeout(() => scrollToComponent('location'), 200);
    } else if (window.location.hash === '#home' && action === 'location') {
      scrollToComponent('location')
    }

    switch (action) {
      case 'preview':
        // If we're not on home page, navigate to home first
        if (window.location.hash !== '#home' && window.location.hash !== '') {
          window.navigateTo('home');
          setTimeout(() => scrollToComponent('menu'), 200);
        } else {
          scrollToComponent('menu');
        }
        break;
      case 'food':
        window.navigateTo('foodMenu');
        break;
      case 'drinks':
        window.navigateTo('drinkMenu');
        break;
    }
  };

  const handleLogoClick = () => {
    window.navigateTo('home');
  };

  return (
    <>
      <S.Header>
        <S.HeaderSection>
          <img src={Logo} alt="Olea Logo" onClick={handleLogoClick} style={{cursor: 'pointer'}} />
        </S.HeaderSection>

        <S.MenuContainer>
          <S.MenuItemContainer 
            onMouseEnter={() => setIsMenuDropdownOpen(true)}
            onMouseLeave={() => setIsMenuDropdownOpen(false)}
          >
            <S.MenuItem>{t('Header.menu')}</S.MenuItem>
            <S.DropdownMenu isOpen={isMenuDropdownOpen}>
              <S.DropdownItem onClick={() => handleMenuClick('preview')}>
                {t('Button.goToPreview')}
              </S.DropdownItem>
              <S.DropdownItem onClick={() => handleMenuClick('food')}>
                {t('Button.foodMenu')}
              </S.DropdownItem>
              <S.DropdownItem onClick={() => handleMenuClick('drinks')}>
                {t('Button.drinkMenu')}
              </S.DropdownItem>
            </S.DropdownMenu>
          </S.MenuItemContainer>
          <S.MenuItem onClick={() => handleMenuClick('location')}>{t('Header.rezervation')}: <a href="tel:+902122522754" style={{color: 'black', textDecoration: 'none'}}>+90 212 252 27 54</a></S.MenuItem>
          <S.MenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MenuItem>
          <ChangeLanguageButton />
        </S.MenuContainer>

        <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuOutlined />
        </S.MobileMenuButton>
      </S.Header>

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileMenuItem onClick={() => handleMenuClick('preview')}>{t('Header.menu')} - {t('Button.goToPreview')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => handleMenuClick('food')}>{t('Button.foodMenu')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => handleMenuClick('drinks')}>{t('Button.drinkMenu')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => handleMenuClick('location')}>{t('Header.rezervation')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => changeCurrentLanguage()}>
          {getCurrentLanguageCode() === 'en' ? 'TR' : 'EN'}
        </S.MobileMenuItem>
      </S.MobileMenu>
    </>
  );
};
