import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { clearCart, selectorCart } from '../../../redux/slices/cartSlice';

import cartIcon from '../../../assets/img/cart_icon.png';

import CartItem from './CartItem';

import './Cart.scss'
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {

   const { items, totalPrice } = useAppSelector(selectorCart)

   const dispatch = useAppDispatch()

   const itemsCount = items.reduce((sum, obj) => sum += obj.count, 0);

   const onClickClear = () => {
      if (window.confirm('Are you sure you want to clear cart?')) {
         dispatch(clearCart());
      }
   }

   const onClickPurchase = () => {
      if (window.confirm('Thank You for the purchase!!!')) {
         dispatch(clearCart());
      }
   }

   return (
      <div className='cart_wrapper'>
         <div className='cart_head'>
            <div className='cart_head_left'>
               <img className='cart_logo' src={cartIcon} alt="cart_logo" />
               <h1 className='cart_title'>My Cart</h1>
            </div>
            <div>
               <p onClick={onClickClear} className='cart_clear'>&#10006; clear cart</p>
            </div>
         </div>
         <ul className="cart_list">
            {items.length
               ? items.map(item => <CartItem key={item.id + item.size} {...item} />)
               : <p className='cart_empty'>Your cart is empty. Please add items to proceed</p>}
         </ul>
         <div className="cart_info">
            <p>Items in cart: {itemsCount}</p>
            <p>Total: <span className='cart_total'>${totalPrice}</span></p>
         </div>
         <div className="cart_buttons">
            <Link to='/'><button className='btn_back'>← Back</button></Link>
            <button onClick={onClickPurchase} disabled={items.length ? false : true} className='btn_purchase'>{items.length ? `Purchase ${itemsCount} items` : 'Purchase'}</button>
         </div>
      </div>
   );
}

export default Cart;