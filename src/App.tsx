import React from 'react';
import './App.css';
import Gen from './components/Gent';
import Member from './components/member';

function App() {
  return (
    <div className="App">
      <Gen name='momo'>
        <Member handel={()=> console.log('add')}/>
      </Gen>
    </div>
  );
}

export default App;
