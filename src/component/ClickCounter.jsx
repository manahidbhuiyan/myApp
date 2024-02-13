import withCounter from "./HOC/withCounter";

const ClickCounter = (props) =>{
    const {count, Increment} = props
    return(
        <button onClick={Increment} > Clicked {count} times </button>
    )
}

export default withCounter(ClickCounter)