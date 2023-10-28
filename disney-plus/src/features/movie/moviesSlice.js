import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
};

const fetchMoviesThunk = createAsyncThunk("fetchAllMovies", () => {
  return new Promise((res, rej) => {
    debugger;
    fetch("http://localhost:4020/movies").then(async (data) => {
      data = await data.json();
      res(data);
    });
  });
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.data;
    });
    builder.addCase(fetchMoviesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMoviesThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const thunks = { fetchMoviesThunk };

export const selectMovies = (state) => {
  return state;
};

export default movieSlice.reducer;
