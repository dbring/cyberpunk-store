import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  min-width: 290px;
  overflow: hidden;
  margin: 25px;

  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit: cover;
  }
`;

export const Box = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
