import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import Display from './components/Display';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [complete, setComplete] = useState(false);




  return (
    <div className="App">
      

      <Todo todoList={todoList} setTodoList={setTodoList} />
      <Display 
      todoList={todoList} 
      complete={complete} 
      setComplete={setComplete} 
      setTodoList={setTodoList}
      />

    </div>
  );
}

export default App;
