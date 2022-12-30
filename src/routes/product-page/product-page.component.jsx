import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/button.component";
import { CurrencySymbol } from "../../components/CurrencySymbol/currency-symbol";
import { handleAddToCartButtonClick } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import "./product-page.styles.scss";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [product, setProduct] = useState({});
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    setProduct(categoriesMap[category].find((product) => product.id === id));
  }, [category, categoriesMap, id]);

  const { src, name, prompt, price } = product;

  const addToCart = () =>
    dispatch(handleAddToCartButtonClick(cartItems, product));

  return (
    <div className="details" key={id}>
      <div className="big-img">
        <img src={src} alt={name} />
      </div>

      <div className="box">
        <div className="row">
          <h2>{name}</h2>
          <h2>
            <CurrencySymbol />
            {price}
          </h2>
        </div>

        <p>{prompt}</p>

        <Button onClick={addToCart}>Add to cart</Button>
      </div>
    </div>
  );
};
