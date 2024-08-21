import React, { useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../utils/hooks';
import { setSortType, setSortOrderType, selectFilter } from '../../../../../redux/slices/filterSlice'

import './Sort.scss'

const Sort = () => {
   const [modalSort, setModalSort] = React.useState(false);
   const [modalOrder, setModalOrder] = React.useState(false);
   const sortRef = useRef<HTMLDivElement>(null);
   const sortOrderRef = useRef<HTMLDivElement>(null);
   const { sortType, sortOrderType } = useAppSelector(selectFilter);
   const dispatch = useAppDispatch();

   const list: string[] = ['name', 'rating', 'price'];
   const listOrder: string[] = ['asc', 'desc'];

   useEffect(() => {
      document.body.addEventListener('click', handleOnClick)
      return () => {
         document.body.removeEventListener('click', handleOnClick)
      }
   }, [])

   const handleOnClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (!target.className.includes('sort')) {
         setModalOrder(false)
         setModalSort(false)
      }
   }

   const onSelectedSort = (type: string) => {
      dispatch(setSortType(type));
      setModalSort(false)
   }

   const onSelectedSortOrder = (type: string) => {
      dispatch(setSortOrderType(type));
      setModalOrder(false)
   }

   return (
      <div className="sort_wrapper">
         <div ref={sortOrderRef} className="sort">
            <p>Order: <span onClick={() => { setModalOrder(!modalOrder) }} className='sort_type'>{sortOrderType}</span></p>

            {modalOrder && (
               <ul className='sort_popup'>
                  {listOrder.map(type => (
                     <li key={type} onClick={() => onSelectedSortOrder(type)}>
                        {type}
                     </li>))}
               </ul>
            )}
         </div>



         <div ref={sortRef} className="sort">
            <p>Sort by: <span onClick={() => {
               setModalSort(!modalSort)
            }
            } className='sort_type'>{sortType}</span></p>


            {modalSort && (
               <ul className='sort_popup'>
                  {list.map(type => (
                     <li key={type} onClick={() => onSelectedSort(type)}>
                        {type}
                     </li>))}
               </ul>
            )}
         </div>
      </div>
   );
}

export default Sort;