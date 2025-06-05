import { S } from "./page.styles";
import aboutImage from '../../assets/icons/Tanimlama.png';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <S.Container align="center" justify="center" vertical>
      <S.Image src={aboutImage} alt="About" />
      <S.Description>{t('About.description')}</S.Description>
    </S.Container>
  );
};
