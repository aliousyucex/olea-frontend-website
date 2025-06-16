import styled from "@emotion/styled";
import {Button as AntdButton} from "antd";

export namespace S {
  export const Container = styled.div`
    padding: 80px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      padding: 40px;
    }

    @media (max-width: 768px) {
      padding: 40px;
    }
  `;

  export const Title = styled.h1`
    color: #CE152D;
    font-size: 48px;
    text-align: center;
    margin-bottom: 60px;
  `;

  export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
      grid-template-columns: minmax(0, 1fr);
      max-height: 100%;
      margin: 0 auto;
      gap: 32px;
    }
  `;

  export const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 11/10;
    transition: transform 0.3s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.02);
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      min-height: 300px;
      
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  `;

  export const Button = styled(AntdButton)`
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    color: #CE152D;
    font-size: 24px;
    font-weight: 500;

    &:hover {
      color: #CE152D;
      background-color: transparent;
    }
  `;
} 