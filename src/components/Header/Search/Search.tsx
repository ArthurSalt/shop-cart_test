import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

import { selectFilter, setSearchValue } from '../../../redux/slices/filterSlice';

import styles from './Search.module.scss'

const Search: React.FC = () => {
   const dispatch = useAppDispatch()
   const { searchValue } = useAppSelector(selectFilter)

   // const delay = async (ms: number) => new Promise(() => setTimeout(() => console.log('delay'), ms))


   return (
      <div className={styles.search}>
         <input onChange={(e) => dispatch(setSearchValue(e.target.value))}
            value={searchValue}
            className={styles.search_input} type="text" placeholder='search...' />
      </div>
   );
}

export default Search;