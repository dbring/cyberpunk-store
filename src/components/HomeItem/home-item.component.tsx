import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, HomeItemContainer } from "./home-item.styles";

export type HomeItemProps = {
  category: {
    id: number;
    title: string;
    imageUrl: string;
  };
};

export const HomeItem = ({ category }: HomeItemProps) => {
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
