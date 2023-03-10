import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { handleAddToCartButtonClick } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Category } from "../../store/categories/categories.types";
import { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import {
  AddButton,
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

type ProductCardProps = {
  product: Category;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, src, price, category: productCategory } = product;
  const cartItems = useSelector(selectCartItems);
  const { category } = useParams();

  const addToCart = () =>
    dispatch(handleAddToCartButtonClick(cartItems, product));

  return (
    <ProductCardContainer>
      <Link to={category ? id : `${productCategory}/${id}`}>
        <img src={src} alt={name} />
      </Link>
      <Footer>
        <Name>{name}</Name>
        <Price>
          <CurrencySymbol />
          {price}
        </Price>
      </Footer>
      <AddButton buttonType={BUTTON_TYPE_CLASSES.base} onClick={addToCart}>
        Add to Cart
      </AddButton>
    </ProductCardContainer>
  );
};
