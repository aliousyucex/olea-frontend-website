import {S} from "./page.styles";

// Import all menu images
import tagliataManzo2 from "../../assets/menu/tagliata-di-manzo2.jpg";
import oleaDalBosco from "../../assets/menu/olea-dal-bosco.jpg";
import lasagnaAlForno from "../../assets/menu/lasagna-al-forno.jpg";
import digestifs from "../../assets/menu/digestifs.jpg";
import tiramisu from "../../assets/menu/tiramisu.jpg";
import lunediRosso from "../../assets/menu/lunedi-rosso.jpg";
import selectiveWines from "../../assets/menu/selective-wines.jpg";
import tagliataManzo from "../../assets/menu/tagliata-di-manzo.jpg";
import degistifs2 from "../../assets/menu/degistifs2.jpg";
import filettoDiSalmone from "../../assets/menu/filetto-di-salmone.jpg";
import pestoDiArancia from "../../assets/menu/pesto-di-arancia.jpg";
import abbraccioDiPuglia from "../../assets/menu/abbraccio-di-puglia-e-parma.jpg";
import cocktails from "../../assets/menu/cocktails.jpg";
import rossoEVerde from "../../assets/menu/rosso-e-verde.jpg";
import {Flex} from "antd";
import { useTranslation } from "react-i18next";

const menuImages = [
  {src: tagliataManzo2, alt: "Tagliata di Manzo"},
  {src: oleaDalBosco, alt: "Olea dal Bosco"},
  {src: lasagnaAlForno, alt: "Lasagna al Forno"},
  {src: digestifs, alt: "Digestifs"},
  {src: tiramisu, alt: "Tiramisu"},
  {src: lunediRosso, alt: "Lunedi Rosso"},
  {src: selectiveWines, alt: "Selective Wines"},
  {src: tagliataManzo, alt: "Tagliata di Manzo"},
  {src: degistifs2, alt: "Digestifs"},
  {src: filettoDiSalmone, alt: "Filetto di Salmone"},
  {src: pestoDiArancia, alt: "Pesto di Arancia"},
  {src: abbraccioDiPuglia, alt: "Abbraccio di Puglia e Parma"},
  {src: cocktails, alt: "Cocktails"},
  {src: rossoEVerde, alt: "Rosso e Verde"},
];

const handleMenuClick = (action: string) => {
  switch (action) {
    case 'food':
      window.navigateTo('foodMenu');
      break;
    case 'drinks':
      window.navigateTo('drinkMenu');
      break;
  }
};

export const Menu = () => {
  const {t} = useTranslation();
  
  return (
    <S.Container id="menu">
      <S.Title>MENU</S.Title>
      <Flex vertical gap={32}>
        <S.GridContainer>
          {menuImages.map((image, index) => (
            <S.ImageContainer key={index}>
              <img src={image.src} alt={image.alt} />
            </S.ImageContainer>
          ))}
        </S.GridContainer>
        <Flex justify="center" align="center" vertical gap={16}>
          <S.Button type="text" size="large" onClick={() => handleMenuClick('food')}>{t('Button.foodMenu')}</S.Button>
          <S.Button type="text" size="large" onClick={() => handleMenuClick('drinks')}>{t('Button.drinkMenu')}</S.Button>
        </Flex>

      </Flex>
    </S.Container>
  );
};
