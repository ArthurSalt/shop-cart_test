/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

import { fetchItems, selectItems } from '../../../redux/slices/getItemsSlice';
import { selectPages, setCurrentPage, setItemsPerPage } from '../../../redux/slices/paginationSlice';
import { selectFilter, setFilters } from '../../../redux/slices/filterSlice';

import { Category, Sort, ItemCard, Pagination, Skeleton } from '../../index';
import qs from 'query-string';
import ThemeButton from './Filter/ThemeButton/ThemeButton';
import BurgerMenu from './Filter/BurgerMenu/BurgerMenu';

const Home: React.FC = () => {
   const dispatch = useAppDispatch();
   const useSelector = useAppSelector;
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false);
   const isMounted = useRef(false);
   const isSearch = useRef(false);

   const { items } = useSelector(selectItems);
   const { categoryType, sortType, sortOrderType, searchValue } = useSelector(selectFilter);
   const { currentPage, itemsPerPage } = useSelector(selectPages);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const searchResult = [...items].filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()));
   const searchActive = searchValue ? searchResult : items;
   const currentItems = searchActive.slice(firstItem, lastItem);


   const getItems = async () => {
      try {
         setIsLoading(true)
         await dispatch(fetchItems({ categoryType, sortType, sortOrderType, searchValue }));
         setIsLoading(false)
      } catch (error) {
         alert('Failed to get data from server')
      }
   };

   useEffect(() => {
      dispatch(setCurrentPage(1))
   }, [categoryType])

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         dispatch(setFilters(params));
         dispatch(setCurrentPage(Number(params.page)));
         dispatch(setItemsPerPage(Number(params.limit)));
         isSearch.current = true;
      }
   }, [])

   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            ...(categoryType ? { category: categoryType } : {}),
            sortBy: sortType,
            order: sortOrderType,
            page: currentPage,
            limit: itemsPerPage
         })
         navigate(`?${queryString}`)
      }
      isMounted.current = true;
   }, [categoryType, sortType, sortOrderType, itemsPerPage, currentPage])

   useEffect(() => {
      if (!isSearch.current) {
         setIsLoading(true)
         getItems().then(() => setIsLoading(false))
      }
      isSearch.current = false;
   }, [categoryType, sortType, sortOrderType, itemsPerPage, currentPage])

   return (
      <>
         <section className='content_top'>
            <Category />
            <Sort />
         </section>
         <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
               <BurgerMenu />
               {isLoading
                  ? [...new Array(itemsPerPage)].map((_, idx) => <Skeleton key={idx} />)
                  : currentItems.map(obj => <ItemCard key={obj.id} {...obj} />)}
            </div>
         </section>
         <section className='pagination_wrapper'>
            <Pagination itemsLength={searchActive.length} />
            <ThemeButton />
         </section>
      </>
   );
}

export default Home;