import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/restaurant";

type CartState = {
  items: Product[];
  visible: boolean;
};

const initialState: CartState = {
  items: [],
  visible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    },
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((p) => p.id === action.payload.id);

      if (!product) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { open, close, add, remove } = cartSlice.actions;
export default cartSlice.reducer;
