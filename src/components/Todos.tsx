import React from 'react'
import './TodoList.css'
interface Todo {
    items: {id:string,title:string}[];
    DeleteHandler:(id:string)=>void;
}

const Todos: React.FC<Todo> = (props) => {
  return (
    <div>
        <h1>Todos</h1>
        {props.items.map((item)=>(
            <li key={item.id}>
                <span>{item.title}</span>
                <div>
                    <button onClick={props.DeleteHandler.bind(null,item.id)}>Delete</button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default Todos