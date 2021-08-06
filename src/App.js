import './App.css';
import Header from './components/Header';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <ToDoInput/> 
      
    </div>
  );
}

export default App;
