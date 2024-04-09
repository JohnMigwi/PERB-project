import React,{Fragment, useState} from 'react'


function Input() {

    const [enteredTodo, setEnteredTodo] = useState ('');

    function handleChange(event){
       setEnteredTodo ( event.target.value);
    }

    async function handlesubmit (event){
        event.preventDefault();
        const body = { enteredTodo };
        const response = await fetch ("http://localhost:5000/todo",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });

        console.log(response);
        console.log("This is the body", body)
        
    }

  return (
    <Fragment>
        <h1 className='text-center mt-5'>PERN todo List</h1>
        <form className='d-flex mt-4'>
            <input className='form-control' type='text' placeholder='Entertext' value={enteredTodo} onChange={handleChange}/>
            <button className='btn btn-success' onClick={handlesubmit}>submit</button>
        </form>
        
    </Fragment>
    
  );
}

export default Input