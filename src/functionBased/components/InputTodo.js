import React, { useState } from "react"

import { FiPlusCircle } from "react-icons/fi";

const InputTodo = props => {
    const [title, setTitle] = useState("")

    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("")
        } else {
            alert("Please write an item")
        }
    }

    return <form onSubmit={handleSubmit} className="form-container">
        <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={title}
            name="title"
            onChange={onChange}
        />
        <button className="input-submit">
            <FiPlusCircle 
            style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
        </button>
    </form>
}

export default InputTodo