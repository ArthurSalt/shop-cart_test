import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import paginationSlice from './slices/paginationSlice'
import fetchItemsSlice from './slices/getItemsSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pages: paginationSlice,
    items: fetchItemsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
