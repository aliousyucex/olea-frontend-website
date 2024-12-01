import React from 'react';
import {useState} from 'react';
import ReactDomClient from 'react-dom/client';
import { useTranslation } from "react-i18next";
import { Header } from "./src/components/header/page";
import { Banner } from "./src/components/banner/page";
import { About } from "./src/components/about/page";
import { Cards } from "./src/components/cards/page";

const App = () => {
  const { t } = useTranslation();
  const [renderMode, setRenderMode] = useState<'L' | 'S' | undefined>();

  // Find better practice for this...
  window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
      setRenderMode('L');
    } else {
      setRenderMode('S')
    }
  })

  return (
    <div style={{fontFamily: 'MuseoSans, sans-serif'}}>
      <Header size={renderMode} />
      <Banner />
      <About />
      <Cards />
      <br />
      {t("GOBR")}
    </div>
  );
}

const appElement = document.getElementById('app');
if (!appElement) throw new Error('Failed to find the app element');
ReactDomClient.createRoot(appElement).render(<App />);
