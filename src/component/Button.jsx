import React from "react";
function Button({HandleClick, children}) {
    console.log(`rendering button ${children}`);

    return(
        <>
            <button type="button" onClick={HandleClick}> {children} </button>
        </>
    )
}
export default React.memo(Button)