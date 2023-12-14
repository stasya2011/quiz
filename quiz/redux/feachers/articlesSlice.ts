import { createSlice } from "@reduxjs/toolkit";

const articleInitialState: { articles: any[]; totalResults: number } = {
  articles: [],
  totalResults: 0,
};

const articleSlice = createSlice({
  name: "articles",
  initialState: articleInitialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
    },
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
