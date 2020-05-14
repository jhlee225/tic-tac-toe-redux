import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from "./tttContainer";
import { Provider } from "react-redux";
import store from "../../app/store";

it("Renders Game", () => {
  const gameRendered = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  expect(gameRendered.container).toMatchSnapshot();
  expect(gameRendered.container).toBeInTheDocument();
});

describe("Clicks", () => {
  it("Click a center square", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const centerSquare = gameRendered.getAllByRole("button")[5];
    fireEvent.click(centerSquare);
    expect(centerSquare.textContent).toBe("X");
    expect(centerSquare.className).toBe("squareSelecting");
  });

  it("Click Go to game start", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    expect(gameRendered.container).toMatchSnapshot();
    const centerSquare = gameRendered.getAllByRole("button")[5];
    const rightSquare = gameRendered.getAllByRole("button")[6];
    const GoToGameStart = gameRendered.getByText("Go to game start");
    fireEvent.click(centerSquare);
    fireEvent.click(rightSquare);
    fireEvent.click(GoToGameStart);
    expect(gameRendered.container).toMatchSnapshot();
  });

  it("Click Go to move #1", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const centerSquare = gameRendered.getAllByRole("button")[5];
    const rightSquare = gameRendered.getAllByRole("button")[6];
    fireEvent.click(centerSquare);
    const GoToMove = gameRendered.getByText("Go to move #1");
    expect(gameRendered.container).toMatchSnapshot();
    fireEvent.click(rightSquare);
    fireEvent.click(GoToMove);
    expect(gameRendered.container).toMatchSnapshot();
  });
});
