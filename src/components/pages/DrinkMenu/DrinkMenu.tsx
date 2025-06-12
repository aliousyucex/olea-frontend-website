import React, {useEffect} from 'react';
import { Header } from '../../header/page.tsx';
import { S } from './DrinkMenu.styles.ts';
import drinkMenuImage from '../../../assets/menuImages/drinks-1.png';
import drinkMenuImage2 from '../../../assets/menuImages/drinks-2.png';

export const DrinkMenu: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'MuseoSans, sans-serif', backgroundColor: '#DCDDDE', minHeight: '100vh' }}>
      <Header />
      <S.Container>
        <S.Title>Drink Menu</S.Title>
        <S.MenuImageContainer>
          <S.MenuImage
            src={drinkMenuImage}
            alt="Drink Menu"
            loading="lazy"
          />
          <S.MenuImage
            src={drinkMenuImage2}
            alt="Drink Menu"
            loading="lazy"
          />
        </S.MenuImageContainer>
      </S.Container>
    </div>
  );
};