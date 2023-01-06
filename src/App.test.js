import { Elements } from "@stripe/react-stripe-js";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persister } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  test('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    const view = render(
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  });
});
