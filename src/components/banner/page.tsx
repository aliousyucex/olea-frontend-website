import { S } from "./page.styles";
import mainIcon from '../../assets/icons/hero-ustu-arma.png'
import mainIconTr from '../../assets/icons/hero-ustu-arma-tr.png'
import { getCurrentLanguageCode } from '../../i18n/i18n';

export const Banner = () => {
  const currentLang = getCurrentLanguageCode();
  const iconToUse = currentLang === 'tr' ? mainIconTr : mainIcon;

  return (
    <S.Container align="center" justify="center" vertical>
      <S.IconImage src={iconToUse} alt="Banner" />
    </S.Container>
  );
};
