import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recipeReducer from "./slices/recipeSlice"; // 🔥 add this line

export const store = configureStore({
  reducer: {
    recipe: recipeReducer, 
    user: userReducer,
  },
});
