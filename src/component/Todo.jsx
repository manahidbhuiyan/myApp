import { useState } from "react";

function Todo(){

    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)

    const handleChange = (e) =>{
        const inputValue = e.target.value
        const updateWarning = inputValue.includes('.js') ? 'You need to learn Javascript first !!' : null

        setTodo(inputValue)
        setWarning(updateWarning)
    }

    return(
        <>
            <input type="text" value={todo} onChange={handleChange} />
            <hr />
            {warning || 'Good Choice!!'}
        </>
    )
}

export default Todo