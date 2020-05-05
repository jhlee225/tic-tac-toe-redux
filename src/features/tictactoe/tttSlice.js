import { createSlice } from "@reduxjs/toolkit";

export const tttSlice = createSlice({
  name: "ttt",
  initialState: {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
  },
  reducers: {
    jumpTo: (state, action) => {
      state.stepNumber = action.payload.move;
      state.xIsNext = action.payload.move % 2 === 0;
    },
    handleHistory: (state, action) => {
      state.history = action.payload.history;
    },
    handleClick: (state, action) => {
      state.stepNumber = action.payload.state.stepNumber;
      state.history = action.payload.state.history;
      state.xIsNext = action.payload.state.xIsNext;
    },
  },
});

export const { jumpTo, handleClick, handleHistory } = tttSlice.actions;

export const selecthistory = (state) => state.ttt.value;

export default tttSlice.reducer;
