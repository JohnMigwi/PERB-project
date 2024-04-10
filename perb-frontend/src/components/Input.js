import React,{Fragment, useState} from 'react'


function Input() {

    const [description, setDescription] = useState ('');

    function handleChange(event){
       setDescription ( event.target.value);
    }

    async function handlesubmit (event){
        event.preventDefault();
        const body = { description };
        const response = await fetch ("http://localhost:5000/todo",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
        window.location = "/";
    }

  return (
    <Fragment>
        <h1 className='text-center mt-5'>PERN todo List</h1>
        <form className='d-flex mt-4' onSubmit={handlesubmit}>
            <input className='form-control' type='text' placeholder='Entertext' value={description} onChange={handleChange}/>
            <button className='btn btn-success'>submit</button>
        </form>
        
    </Fragment>
    
  );
}

export default Input