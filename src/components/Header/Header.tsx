import React from 'react';

import { Logo, Search, CartPanel } from '../index';

const Header: React.FC = () => {
   return (
      <header className='header'>
         <Logo />
         <Search />
         <CartPanel />
      </header>
   );
}

export default Header;