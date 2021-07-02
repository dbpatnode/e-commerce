import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homepage/homepage.jsx'
import ShopPage from '../src/pages/shop/shop.jsx'
import LoginAndSignupPage from '../src/pages/login-and-signup-page/login-and-signup-page.jsx'
import Header from '../src/components/header/header.jsx'

import './App.css';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch> 
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/> 
        <Route path='/signin' component={LoginAndSignupPage}/> 
      </Switch>
      
    </div>
  );
}

export default App;
