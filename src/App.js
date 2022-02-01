import React from 'react';

import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

import './App.css';

function App() {
  const [citiesList, dispatch] = useCitiesList()
  
  return (
    <div className="Main">
      <Input dispatch={dispatch}/>
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
