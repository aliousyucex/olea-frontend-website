import { Flex } from "antd";
import styled from "@emotion/styled";


export namespace S {
  export const Container = styled(Flex)`
    background: green;
    width: 100%;
    height: 700px;
  `;

  export const Card = styled.div`
    min-width: 200px;
    min-height: 200px;

    max-height: 500px;
    max-width: 500px;

    background: red;

    align-content: center;
    text-align: center;
  `;

  export const Title = styled.span`
    font-size: 28px;
    font-family: 'MuseoSans', sans-serif;
    font-weight: 600;
  `;
}
