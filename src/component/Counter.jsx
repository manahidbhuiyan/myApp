import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)

    return(
        <>
            <p> {count} </p>
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1 )} >increment</button>
            </p>
        </>
    )
}
export default Counter