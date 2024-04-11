import React, {Fragment, useEffect, useState} from 'react'
import Edit from './Edit';

function List(editTodo) {

  const [todos, setTodos] = useState([]);


  async function deleteTodo(id){
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`,{
        method:"DELETE"
      });
      if (response.ok) {
        await getTodos();
      } else {
        throw new Error('Failed to delete todo');
      }
      
    } catch (error) {
      console.log(error.message);
    }
    
  }



  async function getTodos(){
      try {
        const response = await fetch ("http://localhost:5000/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error.message);
      }
     
  };

 

useEffect (() =>{
  getTodos();
},[])



  return (
    <Fragment>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map( todo =>(
        <tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td><Edit todo={todo}/></td>
        <td>
        <button className='btn btn-danger' onClick={ () => deleteTodo(todo.todo_id)}>Delete</button>

        </td>
        </tr>
      ))}
    </tbody>
     </table>
    </Fragment>
  )
}

export default List