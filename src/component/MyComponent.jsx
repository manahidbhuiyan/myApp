import { useEffect, useState } from "react"

function MyComponent(){
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())

    const tick = () =>{
        setDate(new Date())
    }

    useEffect(() =>{
        console.log('rendered');
        document.title = `clicked ${count} times`
    }, [count])

    useEffect(() =>{
        const interval = setInterval(tick, 1000)

        // Do the cleanup - stop the timer
        return () => {
            clearInterval(interval)
        }

    }, [])

    const addClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

   

    return(
        <>
            <p>Time: {date.tolocalString()}</p>
            <p>
                <button type="button" onClick={addClick}>Click {count} times </button>
            </p>
        </>
    )
}
export default MyComponent