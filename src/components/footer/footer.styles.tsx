import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/tyrell.svg";

export const FooterContainer = styled.div`
    display:block;'
`;

export const ImportantInformation = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const CategoryLinks = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const BottomFooter = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 100%;
`;
