import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const AppStore = configureStore({
    reducer: {
        User: UserSlice
    }
});

export default AppStore;