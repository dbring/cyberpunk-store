import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;
