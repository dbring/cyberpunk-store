import styled from "styled-components";

export const SectionCenter = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  width: 80vw;
  height: 250px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
  margin-bottom: 0.75rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  span {
    font-size: 0.85em;
    color: var(--clr-primary-5);
    margin-right: 1rem;
    font-weight: 700;
  }
`;
export const Text = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;

  @media (min-width: 800px) {
    max-width: 45em;
  }
`;

export const StyledArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;

  h4 {
    text-transform: uppercase;
    color: white;
    margin-bottom: 0.25rem;
  }
`;

export const ActiveSlide = styled(StyledArticle)`
  opacity: 1;
  transform: translateX(0);
`;

export const LastSlide = styled(StyledArticle)`
  opacity: 0;
  transform: translate(-100%);
`;

export const NextSlide = styled(StyledArticle)`
  opacity: 0;
  transform: translate(100%);
`;

export const BaseArrow = styled.button`
  position: absolute;
  top: 150px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--clr-primary-5);
  }

  @media (min-width: 800px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

export const PrevArrow = styled(BaseArrow)`
  left: 0;
`;

export const NextArrow = styled(BaseArrow)`
  right: 0;
`;
