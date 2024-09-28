import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeedData: (state, action) => {
            return action.payload;
        },
        removeFeedDate: () => {
            return null;
        }
    }
});

export const {addFeedData, removeFeedDate} = feedSlice.actions
export default feedSlice.reducer;