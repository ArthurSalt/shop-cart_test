import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { SizeBar, AddButton } from '../index';

import './ProductCard.scss'

export interface ItemT {
   id: number,
   imageUrl?: string,
   name?: string,
   rating?: number,
   price?: number,
   sizes?: string[],
   category?: number,
}


const ProductCard: React.FC = (): JSX.Element => {
   const { id } = useParams();

   const [item, setItem] = useState<ItemT>();
   const [activeSize, setActiveSize] = useState<string>('XL');

   useEffect(() => {
      async function fetchItems() {
         try {
            const { data } = await axios.get<ItemT>(`https://64efad78219b3e2873c4c415.mockapi.io/items/${id}`);
            setItem(data)
         } catch (error) {
            alert('Error! Failed to get data from server!')
         }
      }
      fetchItems()
   }, [id])

   if (!item) {
      return <div>"Loading..."</div>
   }

   return (
      <div className='product_card'>
         <div>
            <img className='product_img' src={item.imageUrl} alt="img" />
         </div>
         <div className="product_info">
            <h1 className='product_name'>{item.name}</h1>
            <p className='product_rating'>Rating: {item.rating}</p>
            <p className='product_price'>${item.price}</p>
            <div className="product_sizes">
               <SizeBar
                  sizes={item.sizes}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize} />
            </div>
            <div className='product_desc'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Iure minima suscipit nesciunt qui enim? Eos, eum quod!
               In fugit excepturi aliquid, consequuntur vitae quidem harum tempora, ab sit at expedita?
            </div>
            <div className="product_buy">
               <Link to='/'><button className='btn_back'>← Back</button></Link>
               <AddButton newItem={{ ...item, count: 1, size: activeSize }} />
            </div>
         </div>
      </div>
   );
}

export default ProductCard;