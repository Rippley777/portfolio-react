import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

//
// import portfolioMockData from '../../../assets/mockData/work.json';

export type PortfolioItem = {
  id: number;
  year: string;
  cardColor: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

type PortfolioState = {
  status: 'idle' | 'loading' | 'failed';
  error?: string;
  list: PortfolioItem[];
};

const initialState: PortfolioState = {
  status: 'idle',
  error: undefined,
  list: [],
};

export const fetchPorfolioData = createAsyncThunk<PortfolioState>(
  'portfolio/fetchPorfolioData',
  async () => {
    // const response = await fetch('https://api.example.com/user');

    const response = await require('../../../assets/mockData/work.json');

    // const data: { user: PortfolioState } = await response.json();
    return { list: response, status: 'idle' };
  },
);

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    // toggleTheme: (state) => {
    //   state.theme = state.theme === 'light' ? 'dark' : 'light';
    // },
    // setCustomTheme: (state, action) => {
    //   state.theme = action.payload.theme;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPorfolioData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchPorfolioData.fulfilled,
        (state, action: PayloadAction<PortfolioState>) => {
          state.status = 'idle';
          state.list = action.payload.list;
        },
      )
      .addCase(fetchPorfolioData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = portfolioSlice.actions;
export default portfolioSlice.reducer;
