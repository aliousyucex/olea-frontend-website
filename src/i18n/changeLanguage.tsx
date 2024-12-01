import styled from '@emotion/styled';
import {changeCurrentLanguage, getCurrentLanguageCode} from './i18n';

namespace S {
  export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
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
