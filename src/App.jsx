// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  const [option, setOption] = useState('');

  return (
    <div className="app">
      <Sidebar setOption={setOption} />
      <MainContent option={option} />
    </div>
  );
};

export default App;
