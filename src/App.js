import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer.component";
import { Spinner } from "./components/Spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user.action";

const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Error = lazy(() => import("./routes/error/error.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />} data-testid="app-test-1">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
