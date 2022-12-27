import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";
import { ProductPage } from "../product-page/product-page.component";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:id" element={<ProductPage />} />
    </Routes>
  );
};
