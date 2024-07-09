/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

const CreteTodo = ({onTodoAdded}) =>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    async function addTodo(){
        const res = await fetch(`${import.meta.env.VITE_APP_ADD_TODO}`, {
            method: "POST",
            body: JSON.stringify({
                title,
                description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        const json = await res.json()
        console.log(json);

        if (onTodoAdded) {
            onTodoAdded();
          }
      
          // Clear the form fields
          setTitle("");
          setDescription("");
    }

    return (
        <div className="addTodo ">
            <input type="text" placeholder="Title goes here.." onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            <input type="text" placeholder="Description goes here.." onChange={(e) => {
                setDescription(e.target.value)
            }}/>

            <button className="add_bth" 
            onClick={addTodo}
            >Add Todo</button>
        </div>
    )
}

export default CreteTodo