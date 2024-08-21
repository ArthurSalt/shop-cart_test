import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';


const initialState: Record<string, number> = {
   currentPage: 1,
   itemsPerPage: 10,
}

export const paginationSlice = createSlice({
   name: 'pagination',
   initialState,
   reducers: {
      setCurrentPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload;
      },

      setItemsPerPage(state, action: PayloadAction<number>) {
         state.itemsPerPage = action.payload;
      }
   },
})

export const selectPages = (state: RootState) => state.pages
export const { setCurrentPage, setItemsPerPage } = paginationSlice.actions

export default paginationSlice.reducer