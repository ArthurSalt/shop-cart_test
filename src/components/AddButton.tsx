import React from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { addItem } from '../redux/slices/cartSlice';

const AddButton = ( {newItem} ): JSX.Element => {
   const dispatch = useAppDispatch();
   const itemCount = useAppSelector(state => state.cart.items.filter(obj => obj.id === newItem.id).reduce((sum, obj) => sum += obj.count, 0))

   return (
      <>
         <button
            onClick={() => dispatch(addItem(newItem))}
            className={itemCount > 0 ? 'item_addedButton' : 'item_addButton'}>
            {itemCount > 0 ? `Items in cart: ${itemCount}` : `+ Add to cart`}
         </button>
      </>
   );
}

export default AddButton;