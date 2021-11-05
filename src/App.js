import './App.css';
import Header from './components/Header';
import ToDoInput from './components/ToDoInput';
import ToDoItem from './components/ToDoItem';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { todoList } from './redux/todoSlice';


function App() {
    const AllTodoList = useSelector(todoList)
    const onDragEnd = result => {

    }
  return (
    <div className="App">
      <Header/>
      <div className="list-container">
            <ToDoItem allTodos={AllTodoList}/>
      </div>
      <ToDoInput /> 
      
    </div>
  );
}

export default App;
