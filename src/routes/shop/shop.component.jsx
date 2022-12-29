import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { getLexicaArt } from "../../utils/lexica/lexica.utils";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";
import { ProductPage } from "../product-page/product-page.component";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getLexicaArt();

      dispatch(setCategoriesMap(categories));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:id" element={<ProductPage />} />
    </Routes>
  );
};
