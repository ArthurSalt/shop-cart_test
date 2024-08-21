import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ItemT } from '../../components/ProductCard/ProductCard';

export interface ICartItem extends ItemT {
   count?: number;
   size?: string
}

export interface ICartSlice {
   totalPrice: number;
   items: ICartItem[]
}

const initialState: ICartSlice = {
   totalPrice: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).totalPrice : 0,
   items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).items : [],
}

const cartToLocal = (items: ICartItem[], totalPrice: number): void => {
   localStorage.setItem('cart', JSON.stringify({ items, totalPrice }))
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {

      addItem(state, action: PayloadAction<ICartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
         if (findItem) {
            findItem.count++;
         } else {
            state.items.push(action.payload);
         }

         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);
         cartToLocal(state.items, state.totalPrice)
      },

      removeItem(state, action: PayloadAction<ICartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size);
         findItem.count = 0;
         state.items = state.items.filter(obj => obj.count !== 0);
         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);
         cartToLocal(state.items, state.totalPrice)
      },

      minusItem(state, action: PayloadAction<ICartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
         if (findItem.count > 0) {
            findItem.count--;
         };
         if (findItem.count === 0) {
            state.items = state.items.filter(obj => obj.count !== 0);
         };

         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);
         cartToLocal(state.items, state.totalPrice)
      },

      clearCart(state) {
         state.items = [];
         state.totalPrice = 0;
         cartToLocal(state.items, state.totalPrice)
      }
   },
})

export const selectorCart = (state: RootState) => state.cart;

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions

export default cartSlice.reducer