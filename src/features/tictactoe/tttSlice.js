import { createSlice } from "@reduxjs/toolkit";

export const tttSlice = createSlice({
  name: "ttt",
  initialState: {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    toggleChecked: false,
    selected: [""],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
  },
  reducers: {
    jumpTo: (state, action) => {
      if (state.stepNumber !== action.payload.move) {
        state.winner = null;
      }
      state.stepNumber = action.payload.move;
      state.xIsNext = action.payload.move % 2 === 0;
    },
    handleHistory: (state, action) => {
      state.history = action.payload.history;
    },
    handleToggle: (state, action) => {
      state.toggleChecked = action.payload.checked;
    },
    deleteSelected: (state, action) => {
      state.selected = state.selected.slice(0, action.payload.move + 1);
    },
    handleClick: (state, action) => {
      state.stepNumber = action.payload.state.stepNumber;
      state.selected = action.payload.state.selected;
      state.history = action.payload.state.history;
      state.xIsNext = action.payload.state.xIsNext;
    },
    calculateWinner: (state, action) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          action.payload.squares[a] &&
          action.payload.squares[a] === action.payload.squares[b] &&
          action.payload.squares[a] === action.payload.squares[c]
        ) {
          state.winner = {
            winner: action.payload.squares[a],
            reason: [a, b, c],
          };
        }
      }
    },
  },
});

export const {
  jumpTo,
  handleClick,
  handleHistory,
  calculateWinner,
  deleteSelected,
  handleToggle,
} = tttSlice.actions;

export const selecthistory = (state) => state.ttt.value;

export default tttSlice.reducer;
