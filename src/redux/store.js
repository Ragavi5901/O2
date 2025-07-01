// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load cart state from localStorage
const loadCartState = () => {
  try {
    const savedState = localStorage.getItem('cart');
    return savedState ? JSON.parse(savedState) : { items: [] };
  } catch (err) {
    return { items: [] };
  }
};

// Save cart state to localStorage
const saveCartState = (state) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch (err) {
    console.error('Failed to save cart:', err);
  }
};

const preloadedState = {
  cart: loadCartState(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Save cart to localStorage on every state change
store.subscribe(() => {
  saveCartState(store.getState());
});
