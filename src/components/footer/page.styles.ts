import styled from "@emotion/styled";

export namespace S {
  export const BlackBackground = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #000000;
    padding: 1px 0; // Prevent margin collapse
  `;

  export const Container = styled.div`
    width: 300px;
    height: 100px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export const Text = styled.div`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `;

  export const img = styled.img`
    width: 100%;
    height: 100%;
  `;
} 