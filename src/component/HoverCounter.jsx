import withCounter from "./HOC/withCounter";

const HoverCounter = (props) =>{
    const {count, Increment} = props
    return(
        <h2 onMouseOver={Increment} > Hovered {count} times </h2>
    )
}

export default withCounter(HoverCounter)