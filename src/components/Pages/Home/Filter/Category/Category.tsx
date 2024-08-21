import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryType } from '../../../../../redux/slices/filterSlice';

import './Category.scss';

const Category: React.FC = () => {
   const categories = ['All', 'T-Shirt', 'Hoodie', 'Longsleeve', 'Sweatshirt'];

   const { categoryType } = useSelector(selectFilter);
   const dispatch = useDispatch();

   return (
      <ul className='categories'>
         {categories.map((category, idx) => (
            <li key={idx} onClick={() => dispatch(setCategoryType(idx))}
               className={categoryType === idx ? 'category active' : 'category'}>
               {category}
            </li>
         ))}
      </ul>
   );
}

export default Category;