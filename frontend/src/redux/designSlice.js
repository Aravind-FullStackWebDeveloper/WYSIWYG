// frontend/src/redux/designSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDesigns = createAsyncThunk('design/fetchDesigns', async (token) => {
  const response = await axios.get('/api/designs', {
    headers: { Authorization: token },
  });
  return response.data;
});

export const createDesign = createAsyncThunk('design/createDesign', async ({ token, design }) => {
  const response = await axios.post('/api/designs', design, {
    headers: { Authorization: token },
  });
  return response.data;
});

const designSlice = createSlice({
  name: 'design',
  initialState: { designs: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesigns.fulfilled, (state, action) => {
        state.designs = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchDesigns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createDesign.fulfilled, (state, action) => {
        state.designs.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(createDesign.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default designSlice.reducer;
