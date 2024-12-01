import { Flex } from "antd";
import { S } from "./page.styles";

export const Cards = () => {
  return (
    <Flex wrap="wrap" align="center" justify="center" gap={36}>
      <S.Card>
        <S.Title>LOCATION</S.Title>
      </S.Card>
      <S.Card>
        <S.Title>MENU</S.Title>
      </S.Card>
      <S.Card>
        <S.Title>RESERVATION</S.Title>
      </S.Card>
    </Flex>
  );
};
