import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
//components
import Todos from './components/Todos';

interface Todo {
  id:string;
  title:string
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (text: string) => {
    setTodos(previous=>{
      return [...previous,{id:Math.random().toString(),title:text}]
    })
  }

  const DeleteTodo = (id:string) => {
    setTodos(todo=>todo.filter(one=>one.id !== id))
  }
  return (
    <div>
      <AddTodo onSubmitHandler={addHandler} />
      <Todos DeleteHandler={DeleteTodo} items={todos}/>
    </div>
  )
}

export default App
