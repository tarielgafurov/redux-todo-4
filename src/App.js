import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { createActionsTodo } from './redux/actions/Action';
import { addTodo } from './redux/ActionFunc';
import Todo from './components/Todo';

function App() {

  const [value , setValue] = useState("")

  const dispatch = useDispatch()

  const valueChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const addMyTodoItems = () => {
    dispatch(addTodo(value , Math.random().toString()))
    setValue("")
  }  

  return (
    <div className="App">
     <input onChange={valueChangeHandler} value={value} type='text' />
     <button onClick={addMyTodoItems} >ADD</button>
     <Todo/>
    </div>
  );
}

export default App;
