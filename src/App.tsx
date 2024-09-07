import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';

import './reset.css';
import './App.scss';

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ './components/Pages/Cart/Cart'));
const ProductCard = lazy(() => import(/* webpackChunkName: 'ProductCard' */ './components/ProductCard/ProductCard'));

function App() {

  return (
    <div className="wrapper">
      
      <main className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}> <Cart /> </Suspense>} />
            <Route path='/:id' element={<Suspense fallback={<div>Loading...</div>}> <ProductCard /> </Suspense>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;