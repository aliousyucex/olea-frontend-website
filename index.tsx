import React from 'react';
import {useState} from 'react';
import ReactDomClient from 'react-dom/client';
import {useTranslation} from "react-i18next";
import {Header} from "./src/components/header/page";
import {Banner} from "./src/components/banner/page";
import {About} from "./src/components/about/page";
import {Menu} from "./src/components/menu/page";
import {Location} from "./src/components/location/page";
import './src/i18n/i18n';

const App = () => {
  const {t} = useTranslation();
  const [renderMode, setRenderMode] = useState<'L' | 'S' | undefined>();

  return (
    <div style={{fontFamily: 'MuseoSans, sans-serif', backgroundColor: '#DCDDDE'}}>
      <Header />
      <Banner />
      <About />
      <Menu />
      <Location />
      <br />
      {t("GOBR")}
    </div>
  );
}

const root = ReactDomClient.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
