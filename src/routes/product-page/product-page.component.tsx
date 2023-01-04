import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/button.component";
import { CurrencySymbol } from "../../components/CurrencySymbol/currency-symbol";
import { handleAddToCartButtonClick } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { Category } from "../../store/categories/categories.types";
import {
  Box,
  ImageContainer,
  ProductPageContainer,
  Row,
} from "./product-page.styles";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [product, setProduct] = useState({} as Category);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    if (category) {
      for (const product of categoriesMap[category]) {
        if (product.id !== id) continue;
        setProduct(product);
        break;
      }
    }
  }, [category, categoriesMap, id]);

  const { src, name, prompt, price } = product;

  const addToCart = () =>
    dispatch(handleAddToCartButtonClick(cartItems, product));

  return (
    <ProductPageContainer>
      <ImageContainer>
        <img src={src} alt={name} />
      </ImageContainer>

      <Box>
        <Row>
          <h2>{name}</h2>
          <h2>
            <CurrencySymbol />
            {price}
          </h2>
        </Row>

        <p>{prompt}</p>

        <Button onClick={addToCart}>Add to cart</Button>
      </Box>
    </ProductPageContainer>
  );
};
