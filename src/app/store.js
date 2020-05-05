import { configureStore } from "@reduxjs/toolkit";
import tttReducer from "../features/tictactoe/tttSlice";

export default configureStore({
  reducer: {
    ttt: tttReducer,
  },
});
