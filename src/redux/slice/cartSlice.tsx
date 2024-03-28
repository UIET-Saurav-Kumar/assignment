import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartObject {
    price: number;
    img: string;
    name: string;
}

export type CartData = CartObject[];

const initialState: CartData = [];

const cartSlice = createSlice({
    name: "cartdata",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartData>) => {
            return [...state, ...action.payload];
        }
    }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
