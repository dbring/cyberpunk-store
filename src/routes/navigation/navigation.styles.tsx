import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/tyrell.svg";

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 100%;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;
export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 10px 15px;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLinksContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
