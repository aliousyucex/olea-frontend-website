import {S} from "./page.styles";
import locationImage from "../../assets/location/lokasyon-resim.png";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const {t} = useTranslation();
  
  const mapLocation = {
    address: "Yeni Çarşı Cad. No: 46/A, Galatasaray, Beyoğlu, İstanbul",
    // Using Google Maps embed without API key
    mapPreviewUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1535770641387!2d28.97743545!3d41.0319445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e19c2a1ee9%3A0x5c62d20da98c7f2f!2sYeni%20%C3%87ar%C5%9F%C4%B1%20Cd.%2046%2FA%2C%2034433%20Beyo%C4%9Flu%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1710272147953!5m2!1str!2str",
    navigationUrl: "https://maps.google.com/maps?q=Yeni+Çarşı+Cad.+No:+46/A,+Galatasaray,+Beyoğlu,+İstanbul"
  };

  const handleMapClick = () => {
    window.open(mapLocation.navigationUrl, '_blank');
  };

  return (
    <S.WhiteBackground id="location">
      <S.Container>
        <S.ContentWrapper>
          <S.ImageSection>
            <img src={locationImage} alt="Olea Location" />
          </S.ImageSection>
          <S.MapSection onClick={handleMapClick} style={{cursor: 'pointer'}}>
            <iframe
              src={mapLocation.mapPreviewUrl}
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen={false}
              loading="lazy"
            />
          </S.MapSection>
        </S.ContentWrapper>
        
        <S.TextSection>
          <S.BlackText>
          Yeni Çarşı Cad. No: 46/A, Galatasaray, Beyoğlu, İstanbul
          </S.BlackText>
          <S.RedText>
          {t('Location.call')}
          </S.RedText>
          <S.PhoneText >
            <a href="tel:+902122522754" style={{color: 'black', textDecoration: 'none'}}>+90 212 252 27 54</a>
          </S.PhoneText>
        </S.TextSection>
      </S.Container>
    </S.WhiteBackground>
  );
};
