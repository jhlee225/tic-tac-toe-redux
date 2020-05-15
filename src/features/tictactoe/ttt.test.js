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
  it("Click Go to game start", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const centerSquare = gameRendered.getAllByRole("button")[4];
    const rightSquare = gameRendered.getAllByRole("button")[5];
    const leftSquare = gameRendered.getAllByRole("button")[3];
    const GoToGameStart = gameRendered.getByText("Go to game start");
    expect(gameRendered.container).toMatchSnapshot();
    fireEvent.click(centerSquare);
    expect(centerSquare.textContent).toBe("X");
    expect(centerSquare.className).toBe("squareSelecting");
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
    const centerSquare = gameRendered.getAllByRole("button")[4];
    const rightSquare = gameRendered.getAllByRole("button")[5];
    const leftSquare = gameRendered.getAllByRole("button")[3];
    const GoToGameStart = gameRendered.getByText("Go to game start");
    expect(gameRendered.container).toMatchSnapshot();
    fireEvent.click(centerSquare);
    const GoToMove = gameRendered.getByText("Go to move #1");
    expect(gameRendered.container).toMatchSnapshot();
    fireEvent.click(rightSquare);
    fireEvent.click(leftSquare);
    fireEvent.click(GoToMove);
    expect(gameRendered.container).toMatchSnapshot();
  });
});
