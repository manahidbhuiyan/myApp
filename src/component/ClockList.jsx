import Clock from "./Clock";

export default function ClockList({quantities = []}){
    console.log("quantities",quantities)
    return(
        <div>
            { quantities.map((item) =>(
               <>
               <Clock locale="bn-BD" count={item} />
               </>
            ))}
        </div>
    )
}