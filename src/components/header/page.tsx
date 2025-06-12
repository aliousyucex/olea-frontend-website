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
                Go to preview
              </S.DropdownItem>
              <S.DropdownItem onClick={() => handleMenuClick('food')}>
                Food menu
              </S.DropdownItem>
              <S.DropdownItem onClick={() => handleMenuClick('drinks')}>
                Drink menu
              </S.DropdownItem>
            </S.DropdownMenu>
          </S.MenuItemContainer>
          <S.MenuItem onClick={() => scrollToComponent('location')}>{t('Header.rezervation')}</S.MenuItem>
          <S.MenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MenuItem>
          <ChangeLanguageButton />
        </S.MenuContainer>

        <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuOutlined />
        </S.MobileMenuButton>
      </S.Header>

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileMenuItem onClick={() => handleMenuClick('preview')}>{t('Header.menu')} - Go to preview</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => handleMenuClick('food')}>Food menu</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => handleMenuClick('drinks')}>Drink menu</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => scrollToComponent('location')}>{t('Header.rezervation')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={handleFollowUs}>{t('Header.followUs')}</S.MobileMenuItem>
        <S.MobileMenuItem onClick={() => changeCurrentLanguage()}>
          {getCurrentLanguageCode() === 'en' ? 'TR' : 'EN'}
        </S.MobileMenuItem>
      </S.MobileMenu>
    </>
  );
};
