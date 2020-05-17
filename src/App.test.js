import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

it("Render App", () => {
  const AppRendered = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(AppRendered.container).toMatchSnapshot();
  expect(AppRendered.container).toBeInTheDocument();
});
