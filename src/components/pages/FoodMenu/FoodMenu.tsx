import React, {useEffect} from 'react';
import { Header } from '../../header/page.tsx';
import { S } from './FoodMenu.styles.ts';
import foodMenuImage from '../../../assets/menuImages/food-1.jpg';
import foodMenuImage2 from '../../../assets/menuImages/food-2.jpg';


export const FoodMenu: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'MuseoSans, sans-serif', backgroundColor: '#DCDDDE', minHeight: '100vh' }}>
      <Header />
      <S.Container>
        <S.Title>Food Menu</S.Title>
        <S.MenuImageContainer>
          <S.MenuImage
            src={foodMenuImage}
            alt="Food Menu"
            loading="lazy"
          />
          <S.MenuImage
            src={foodMenuImage2}
            alt="Food Menu"
            loading="lazy"
          />
        </S.MenuImageContainer>
      </S.Container>
    </div>
  );
};