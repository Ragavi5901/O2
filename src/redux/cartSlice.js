// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(p => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    incrementQty(state, action) {
      const item = state.items.find(p => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty(state, action) {
      const item = state.items.find(p => p.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(p => p.id !== action.payload);
        }
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
