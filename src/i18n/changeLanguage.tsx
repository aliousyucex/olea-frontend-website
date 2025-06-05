import styled from '@emotion/styled';
import {changeCurrentLanguage, getCurrentLanguageCode} from './i18n';

namespace S {
  export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    color: #CE152D;
    padding: 0;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 400;
    
    &:hover {
      opacity: 0.8;
    }
  `;
}

export const ChangeLanguageButton = () => {
  return (
    <S.Button
      onClick={() => changeCurrentLanguage()}
    >
      {getCurrentLanguageCode() === 'en' ? 'TR' : 'EN'}
    </S.Button>
  );
};
