import React from 'react';
import {useState, useEffect} from 'react';
import ReactDomClient from 'react-dom/client';
import {useTranslation} from "react-i18next";
import {Header} from "./src/components/header/page";
import {Banner} from "./src/components/banner/page";
import {About} from "./src/components/about/page";
import {Menu} from "./src/components/menu/page";
import {Location} from "./src/components/location/page";
import {FoodMenu} from "./src/components/pages/FoodMenu/FoodMenu";
import {DrinkMenu} from "./src/components/pages/DrinkMenu/DrinkMenu";
import './src/i18n/i18n';
import injectFonts from './src/assets/fonts/fonts';
import { Footer } from './src/components/footer/page';

type PageType = 'home' | 'foodMenu' | 'drinkMenu';

const App = () => {
  const {t} = useTranslation();
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Inject fonts on app startup
  useEffect(() => {
    injectFonts();
  }, []);

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as PageType;
      if (['home', 'foodMenu', 'drinkMenu'].includes(hash)) {
        setCurrentPage(hash);
        // Scroll to top when page changes
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // Scroll to top for home page too
        window.scrollTo(0, 0);
      }
    };

    // Listen to hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigate function for global use
  window.navigateTo = (page: string) => {
    window.location.hash = page;
    // Also scroll to top immediately when navigating
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'foodMenu':
        return <FoodMenu />;
      case 'drinkMenu':
        return <DrinkMenu />;
      default:
        return (
          <div style={{fontFamily: 'MuseoSans, sans-serif', backgroundColor: '#DCDDDE'}}>
            <Header />
            <Banner />
            <About />
            <Menu />
            <Location />
            <Footer />
          </div>
        );
    }
  };

  return renderPage();
};

// Global navigation function
declare global {
  interface Window {
    navigateTo: (page: string) => void;
  }
}

const root = ReactDomClient.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
