import { Flex } from "antd";
import styled from "@emotion/styled";


export namespace S {
  export const Header = styled(Flex)`
    background: #F8F7F3;
    height: 85px;
    padding: 0 80px 0 80px;

    @media (max-width: 650px) {
      margin-top: 2px;
    }
  `;

  export const MenuItem = styled.div`
    width: 100px;
  `;
}
