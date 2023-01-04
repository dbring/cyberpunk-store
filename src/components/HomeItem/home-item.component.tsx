import { FC, Key } from "react";
import { useNavigate } from "react-router-dom";
import { HomeCategory } from "../Categories/categories.component";
import { BackgroundImage, Body, HomeItemContainer } from "./home-item.styles";

export type HomeItemProps = {
  category: HomeCategory;
};

export const HomeItem: FC<HomeItemProps> = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title.toLowerCase()}`);
  return (
    <HomeItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </HomeItemContainer>
  );
};
