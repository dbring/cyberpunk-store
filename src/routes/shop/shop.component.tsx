import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../../components/Spinner/spinner.component";
import { fetchCategoriesStart } from "../../store/categories/categories.action";

const CategoriesPreview = lazy(
  () => import("../categories-preview/categories-preview.component")
);
const Category = lazy(() => import("../category/category.component"));
const ProductPage = lazy(
  () => import("../product-page/product-page.component")
);

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
        <Route path=":category/:id" element={<ProductPage />} />
      </Routes>
    </Suspense>
  );
};

export default Shop;
