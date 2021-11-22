import react from "react";

const MemoComp = (props) => {
    console.log("Memo Comp")
    return(
        <div>memo comp - {props.name} </div>
    )
}
 
export default react.memo(MemoComp);


/* 
 The concept of react.memo :
 Examines and compares props and states and does not 
 render them if they have not changed.(Optimization)
*/