import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import FeedSlice from "./FeedSlice";

const AppStore = configureStore({
    reducer: {
        User: UserSlice,
        Feed: FeedSlice
    }
});

export default AppStore;