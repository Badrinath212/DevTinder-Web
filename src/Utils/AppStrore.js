import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import FeedSlice from "./FeedSlice";
import ConnectionsSlice from "./ConnectionsSlice";
import RequestsSlice from "./RequestsSlice";

const AppStore = configureStore({
    reducer: {
        User: UserSlice,
        Feed: FeedSlice,
        Connections: ConnectionsSlice,
        Requests: RequestsSlice
    }
});

export default AppStore;