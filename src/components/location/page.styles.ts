import styled from "@emotion/styled";

export namespace S {
  export const WhiteBackground = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    padding: 1px 0; // Prevent margin collapse
  `;

  export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
  `;

  export const ContentWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 32px;
    }
  `;

  export const ImageSection = styled.div`
    flex: 4;
    
    @media (max-width: 1024px) {
      flex: none;
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  `;

  export const MapSection = styled.div`
    flex: 6;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;

    @media (max-width: 1024px) {
      flex: none;
      width: 100%;
    }
  `;

  export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  `;

  export const BlackText = styled.p`
    color: #000;
    font-size: 28px;
    font-weight: 500;
  `;

  export const RedText = styled.p`
    color: #CE152D;
    font-size: 36px;
    font-weight: 300;
    line-height: 0;
  `;

  export const PhoneText = styled.p`
    color: #000;
    font-size: 36px;
    font-weight: 500;
    line-height: 0;
  `;
} 