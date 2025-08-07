import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        country: 'us'
    },
    reducers: {
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    }
});

export const { setCountry } = newsSlice.actions;
export default newsSlice.reducer;