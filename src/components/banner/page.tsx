import { S } from "./page.styles";
import mainIcon from '../../assets/icons/hero-ustu-arma.png'

export const Banner = () => {
  return (
    <S.Container align="center" justify="center" vertical>
      <img src={mainIcon} alt="Banner" />
    </S.Container>
  );
};
