import React, { FormEvent, useRef } from 'react'
import './NewTodo.css'
interface Todo {
    onSubmitHandler:(text:string)=>void;
}

const AddTodo: React.FC<Todo> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const Onsubmit = (event: FormEvent) => {
    event.preventDefault()
    props.onSubmitHandler(inputRef.current!.value);
  }
 
  return (
    <React.Fragment>
        <form onSubmit={Onsubmit}>
            <div className='form-control'>
                <label htmlFor="text-inp">Add new todo</label>
                <input type="text" id='text-inp' ref={inputRef}/>
            </div>
            <button type='submit'>Add todo</button>
        </form>
    </React.Fragment>
  )
}

export default AddTodo