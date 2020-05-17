import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from "./tttContainer";
import { Provider } from "react-redux";
import store from "../../app/store";
import reducer, { calculateWinner } from "./tttSlice";
//Game Render Test
it("Renders Game", () => {
  const gameRendered = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  expect(gameRendered.container).toMatchSnapshot();
  expect(gameRendered.container).toBeInTheDocument();
});

//Click Test
describe("Clicks", () => {
  //CLick Square 기능 Test
  it("Center Square", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );

    const Buttons = gameRendered.getAllByRole("button");
    const centerSquare = Buttons[4];
    fireEvent.click(centerSquare);
    expect(centerSquare.textContent).toBe("X");
    expect(gameRendered.getByText("B2")).toBeInTheDocument();
  });

  // Time Muchine 기능 Test
  it("Go to move #1", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    expect(gameRendered.container).toMatchSnapshot();
    const Buttons = gameRendered.getAllByRole("button");
    const rightSquare = Buttons[5];
    const GoToMove = gameRendered.getByText("Go to move #1");
    fireEvent.click(rightSquare);
    fireEvent.click(GoToMove);
    expect(gameRendered.container).toMatchSnapshot();
  });

  //Game Start 기능 Test
  it("Go to game start", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const GoToGameStart = gameRendered.getByText("Go to game start");
    fireEvent.click(GoToGameStart);
    expect(gameRendered.container).toMatchSnapshot();
    const Buttons = gameRendered.getAllByRole("button");
    const centerSquare = Buttons[4];
    const rightSquare = Buttons[5];
    fireEvent.click(centerSquare);
    fireEvent.click(rightSquare);
    fireEvent.click(GoToGameStart);
    expect(gameRendered.container).toMatchSnapshot();
  });

  // 오름/내림차순 테스트
  it("Toggle button", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const GoToGameStart = gameRendered.getByText("Go to game start");
    fireEvent.click(GoToGameStart);
    const Buttons = gameRendered.getAllByRole("button");
    const centerSquare = Buttons[4];
    fireEvent.click(centerSquare);
    expect(gameRendered.container).toMatchSnapshot();
    const ToggleBtn = gameRendered.getByRole("checkbox");
    fireEvent.click(ToggleBtn);
    const BtnsAfterToggle = gameRendered.getAllByRole("button");
    expect(Buttons[9] === BtnsAfterToggle[10]).toBeTruthy();
    fireEvent.click(ToggleBtn);
    expect(gameRendered.container).toMatchSnapshot();
  });
});

describe("Result", () => {
  // 승리 테스트
  it("is Win", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const GoToGameStart = gameRendered.getByText("Go to game start");
    fireEvent.click(GoToGameStart);
    const Buttons = gameRendered.getAllByRole("button");
    fireEvent.click(Buttons[0]);
    fireEvent.click(Buttons[7]);
    fireEvent.click(Buttons[1]);
    fireEvent.click(Buttons[8]);
    fireEvent.click(Buttons[2]);
    expect(gameRendered.getByText("Winner: X")).toBeInTheDocument();
  });
  // 무승부 테스트
  it("is Draw", () => {
    const gameRendered = render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const GoToGameStart = gameRendered.getByText("Go to game start");
    fireEvent.click(GoToGameStart);
    const Buttons = gameRendered.getAllByRole("button");
    fireEvent.click(Buttons[0]);
    fireEvent.click(Buttons[1]);
    fireEvent.click(Buttons[2]);
    fireEvent.click(Buttons[3]);
    fireEvent.click(Buttons[5]);
    fireEvent.click(Buttons[4]);
    fireEvent.click(Buttons[6]);
    fireEvent.click(Buttons[8]);
    fireEvent.click(Buttons[7]);
    expect(gameRendered.getByText("Draw!")).toBeInTheDocument();
  });
});
