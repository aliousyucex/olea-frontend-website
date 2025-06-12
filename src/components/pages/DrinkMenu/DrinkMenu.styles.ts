import styled from "@emotion/styled";

export namespace S {
  export const Container = styled.div`
    padding: 100px 20px 40px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 85px);

    @media (max-width: 1024px) {
      padding: 80px 20px 40px;
    }
  `;

  export const Title = styled.h1`
    color: #CE152D;
    font-size: 48px;
    text-align: center;
    margin-bottom: 40px;
    font-family: 'MuseoSans', sans-serif;

    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 30px;
    }
  `;

  export const MenuImageContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
  `;

  export const MenuImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  export const PlaceholderText = styled.div`
    padding: 60px 40px;
    color: #666;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
    
    a {
      color: #CE152D;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      padding: 40px 20px;
      font-size: 14px;
    }
  `;
} 