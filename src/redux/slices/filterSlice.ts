import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface IFilterSlice {
   categoryType?: number;
   sortType?: string;
   sortOrderType?: string;
   searchValue?: string;
   category?: number;
   sortBy?: string;
   order?: string
}

const initialState: IFilterSlice = {
   categoryType: 0,
   sortType: 'name',
   sortOrderType: 'asc',
   searchValue: '',
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {

      setCategoryType(state, action: PayloadAction<number>) {
         state.categoryType = action.payload
      },

      setSortType(state, action: PayloadAction<string>) {
         state.sortType = action.payload
      },

      setSortOrderType(state, action: PayloadAction<string>) {
         state.sortOrderType = action.payload
      },

      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload
      },

      setFilters(state, action: PayloadAction<IFilterSlice>) {
         state.categoryType = action.payload.category;
         state.sortType = action.payload.sortBy;
         state.sortOrderType = action.payload.order
      }
   }
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryType, setSortType, setSortOrderType, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer