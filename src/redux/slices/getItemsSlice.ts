import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ItemT } from '../../components/ProductCard/ProductCard';
import { RootState } from '../store';


export const fetchItems = createAsyncThunk<ItemT[], Record<string, string | number>>(
   'fetchItems/fetchItemsStatus',
   async (params) => {
      const { categoryType, sortType, sortOrderType } = params;
      const url = 'https://64efad78219b3e2873c4c415.mockapi.io/items?' +
         `${categoryType ? `category=${categoryType}` : ''}` +
         `&sortBy=${sortType}&order=${sortOrderType}`;

      const { data } = await axios.get<ItemT[]>(url)

      return data;
   }
)

export interface IGetItemsSlice {
   items: ItemT[];
   status: string;
}

const initialState: IGetItemsSlice = {
   items: [],
   status: '',
}

export const fetchItemsSlice = createSlice({
   name: 'fetchItems',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchItems.pending, (state) => {
            state.status = "loading"
            state.items = []
         })
         .addCase(fetchItems.fulfilled, (state, action) => {
            state.status = "success"
            state.items = action.payload
         })
         .addCase(fetchItems.rejected, (state) => {
            state.status = "error"
            state.items = []
         })
   }
})

export const selectItems = (state: RootState) => state.items

export default fetchItemsSlice.reducer