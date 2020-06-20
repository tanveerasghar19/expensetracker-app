import React from 'react';
import { Header } from './components/header'; 
import { Balance } from './components/balance'; 
import { Incm } from './components/incm';
import { List } from './components/list';
import { Addlist } from './components/addlist';
import './App.css';

import {GlobalProvider } from './context/GlobalState';
import { Transaction } from './components/Transaction';

function App() {
  return (
    
      <GlobalProvider>
      <div className="main-col">
      <Header />
      <div className="container">
      <Balance />
      <Incm />
      <List />
      <Addlist />
      </div>
      </div>
      </GlobalProvider>
      
  
  );
}

export default App;
