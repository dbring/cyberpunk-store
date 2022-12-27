import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/button.component";
import { CurrencySymbol } from "../../components/CurrencySymbol/currency-symbol";
import { CartContext } from "../../contexts/cart.context";
import { CategoriesContext } from "../../contexts/categories.context";
import "./product-page.styles.scss";

export const ProductPage = () => {
  const { category, id } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState({});
  const { handleAddToCartButtonClick } = useContext(CartContext);

  const addToCart = () => handleAddToCartButtonClick(product);

  useEffect(() => {
    setProduct(categoriesMap[category].find((product) => product.id === id));
  }, [category, categoriesMap, id]);

  const { src, name, prompt, price } = product;

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
