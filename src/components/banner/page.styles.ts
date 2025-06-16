import { Flex } from "antd";
import styled from "@emotion/styled";
import BannerImage from '../../assets/banner/hero-banner.jpg';
import BannerImageMobile from '../../assets/banner/hero-banner-mobil.jpg';

export namespace S {
  export const Container = styled(Flex)`
    background: url(${BannerImage}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 900px;

    @media (max-width: 1200px) {
      background: url(${BannerImageMobile}) no-repeat center center;
      background-size: cover;
      height: 800px;
    }

    @media (max-width: 768px) {
      background: url(${BannerImageMobile}) no-repeat center center;
      background-size: cover;
      height: 500px;
    }

  `;

  export const IconImage = styled.img`
    max-width: 100%;
    height: auto;

    @media (max-width: 1200px) {
      max-width: 60%;
    }

    @media (max-width: 900px) {
     max-width: 40%;
    }
  `;

  export const Title = styled.span`
    font-size: 48px;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 500;
    padding: 20px;
  `;

  export const Text = styled.span`
    font-size: 24px;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 300;
    padding: 20px;
  `;
}
