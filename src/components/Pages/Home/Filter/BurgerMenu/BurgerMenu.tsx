import React, { useState } from 'react';
import Category from '../Category/Category';

import './BurgerMenu.scss'

const BurgerMenu: React.FC = () => {
  const [popUp, setPopUp] = useState(false);


  return (
    <aside className="burger_wrapper" >
      <div className="burger" onClick={() => setPopUp(prev => !prev)}>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
      </div>

      <div className={popUp ? 'popUp_wrapper popUp_wrapper--active' : 'popUp_wrapper'} onClick={() => setPopUp(prev => !prev)}>
        <div className={popUp ? 'popUp_content popUp_content--active' : 'popUp_content'}>
          <ul className='popUp_categories'>
            <Category />
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default BurgerMenu