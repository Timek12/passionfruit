import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItem: [],
};

export const menuItmSlice = createSlice({
    name: "menuItem",
    initialState: initialState,
    reducers: {
        setMenuItem: (state, action) => {
            state.menuItem = action.payload;
        },
    },
});

export const { setMenuItem } = menuItmSlice.actions;
export const menuItemReducer = menuItmSlice.reducer;