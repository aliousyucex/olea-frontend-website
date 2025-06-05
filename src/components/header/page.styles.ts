import { Flex } from "antd";
import styled from "@emotion/styled";


export namespace S {
  export const Header = styled(Flex)`
    background: #FFF;
    height: 85px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
      padding: 0 20px;
      height: 65px;
    }
  `;

  export const HeaderSection = styled.div`
    display: flex;
    align-items: center;

    &:first-of-type {
      position: relative;
      left: 0;
      transform: none;
    }

    &:last-of-type {
      margin-left: auto;
    }

    img {
      height: 80px;
      object-fit: contain;

      @media (max-width: 1024px) {
        height: 60px;
      }
    }

    @media (max-width: 1024px) {
      &:last-of-type {
        display: none;
      }
    }
  `;

  export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    margin-right: 48px;

    @media (max-width: 1024px) {
      display: none;
    }
  `;

  export const MenuItem = styled.div`
    font-size: 16px;
    color: #CE152D;
    cursor: pointer;
  `;

  export const MobileMenuButton = styled.div`
    display: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 4px;
    background: #FFF;
    align-items: center;
    justify-content: center;
    
    .anticon {
      color: #CE152D;
      font-size: 20px;
    }
    
    @media (max-width: 1024px) {
      display: flex;
      margin-left: auto;
    }
  `;

  export const MobileMenu = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    background: #FFF;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    z-index: 999;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  `;

  export const MobileMenuItem = styled.div`
    font-size: 18px;
    color: #CE152D;
    padding: 16px 0;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  `;
}
