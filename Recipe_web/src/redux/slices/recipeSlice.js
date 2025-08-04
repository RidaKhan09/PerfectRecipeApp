/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../api/BaseURL";

// Get one recipe by ID
export const fetchRecipeById = createAsyncThunk(
  "recipe/fetchRecipeById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/recipes/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch recipe.");
    }
  }
);

// Get logged-in user's generated recipes
export const fetchMyRecipes = createAsyncThunk(
  "recipe/fetchMyRecipes",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/recipes/my-recipes`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch your recipes.");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: null,
    myRecipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearRecipe: (state) => {
      state.recipe = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchMyRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.myRecipes = action.payload;
      })
      .addCase(fetchMyRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

