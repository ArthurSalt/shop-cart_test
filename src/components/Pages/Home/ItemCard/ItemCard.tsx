import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ItemT } from '../../../ProductCard/ProductCard';
import {SizeBar, AddButton} from '../../../index';
import styles from './ItemCard.module.scss';

const ItemCard: React.FC<ItemT> = ({ id, name, imageUrl, price, sizes, rating }) => {
   const [activeSize, setActiveSize] = useState<string>('XL');

   const newItem = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      count: 1
   }

   return (
      <div className={styles.item}>
         <Link to={`/${id}`}><img className={styles.item_img} src={imageUrl} alt="" /></Link>
         <p className={styles.item_title}>{name}</p>
         <p className={styles.item_rating}>Rating: {rating}</p>
         <div className={styles.item_controls}>
            <SizeBar
               sizes={sizes}
               activeSize={activeSize}
               setActiveSize={setActiveSize} />
         </div>
         <div className={styles.item_buyMenu}>
            <div className={styles.item_price}>{price}$</div>
            <AddButton newItem={newItem} />
         </div>
      </div>
   );
}

export default ItemCard;