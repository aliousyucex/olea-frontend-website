import { Flex } from "antd";
import styled from "@emotion/styled";
import BannerImage from '../../assets/banner/hero-banner.jpg';
import BannerImageMobile from '../../assets/banner/hero-banner-mobil.jpg';

export namespace S {
  export const Container = styled(Flex)`
    background: url(${BannerImage}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 700px;

    @media (max-width: 900px) {
      background: url(${BannerImageMobile}) no-repeat center center;
      background-size: cover;
    }

  `;

  export const Title = styled.span`
    font-size: 48px;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 600;
    padding: 20px;
  `;

  export const Text = styled.span`
    font-size: 24px;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 400;
    padding: 20px;
  `;
}
