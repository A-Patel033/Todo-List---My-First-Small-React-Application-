import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    
    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-2">
            <h5><strong>Add New Todo</strong></h5>
            <form onSubmit={submit}>
                <div className="my-2">
                    <label htmlfor="title" className="form-lable my-2">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" placeholder="Enter Todo Title" />
                    
                </div>
                <div className="my-2">
                    <label htmlfor="desc" className="form-lable my-2">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}
