import { Flex } from "antd";
import styled from "@emotion/styled";


export namespace S {
  export const Container = styled(Flex)`
    padding: 60px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      padding: 40px;
    }

    @media (max-width: 768px) {
      padding: 30px;
    }
  `;

  export const Image = styled.img`
    max-width: 100%;
    height: auto;
    width: 500px;

    @media (max-width: 1024px) {
      width: 400px;
    }

    @media (max-width: 768px) {
      width: 300px;
    }
  `;

  export const Text = styled.span`
    font-size: 24px;
    padding: 20px;
  `;

  export const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
    text-align: center;
    color: #333;
    max-width: 900px;
    margin: 80px auto 0;
    white-space: pre-line;
    white-space: pre-wrap;

    @media (max-width: 1024px) {
      margin: 60px auto 0;
      font-size: 16px;
    }

    @media (max-width: 768px) {
      margin: 40px auto 0;
      font-size: 15px;
    }
  `;
}
