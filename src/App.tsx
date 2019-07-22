import React from 'react';
import './App.css';
import {Button,Icon} from 'antd'
import TodoList from './components/Todolist'

const App: React.FC = () => {
  return (
    <div className="App">
     <TodoList />  
    </div>
  );
}

export default App;
