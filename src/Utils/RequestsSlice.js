import { createSlice } from "@reduxjs/toolkit";

const RequestsSlice = createSlice({
    name: 'Requests',
    initialState: null,
    reducers: {
        addRequestsData: (state, action) => {
            return action.payload;
        },
        removeRequestsData: () => {
            return null;
        }
    }
});

export const {addRequestsData, removeRequestsData} = RequestsSlice.actions;
export default RequestsSlice.reducer;