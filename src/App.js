import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import Display from './components/Display';

function App() {

  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App">
      <Todo todoList={todoList} setTodoList={setTodoList} />
      <Display 
      todoList={todoList} 
      setTodoList={setTodoList}
      />
  </div>
  );
}

export default App;
