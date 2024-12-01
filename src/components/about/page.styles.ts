import { Flex } from "antd";
import styled from "@emotion/styled";


export namespace S {
  export const Container = styled(Flex)`
    padding: 36px;
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
