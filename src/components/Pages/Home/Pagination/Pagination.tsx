import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../utils/hooks';
import { selectPages, setCurrentPage, setItemsPerPage } from '../../../../redux/slices/paginationSlice';

import './Pagination.scss'

const Pagination = ( {itemsLength} ) => {

   const dispatch = useAppDispatch();
   const pages = [];
   const { currentPage, itemsPerPage } = useAppSelector(selectPages);

   const onPerPageClick = (num: number) => {
      dispatch(setItemsPerPage(num))
      dispatch(setCurrentPage(1))
   }

   for (let i = 1; i <= Math.ceil(itemsLength / itemsPerPage); i++) {
      pages.push(i);
   }

   return (
      <div className='pagination'>
         <ul className='pages_row'>
            {pages.map((num, i) => (
               <li onClick={() => dispatch(setCurrentPage(num))} className={currentPage === i + 1 ? 'page_active' : 'page'} key={num}>{num}</li>
            ))}
         </ul>

         <div className="pages_row"><span>Items per page: </span>
            {[5, 10, 20].map(num => (
               <li onClick={() => onPerPageClick(num)} className={itemsPerPage === num ? 'page_active' : 'page'} key={num}>{num}</li>
            ))}
         </div>
      </div>
   );
}

export default Pagination;