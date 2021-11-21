import { useState } from "react";
import WithCounter from "../HOC/WithCounter";

const ClickCounter = ({ count, incrementCount, name }) => {
    console.log(name)
    return ( 
        <div>
            <h2 onClick={incrementCount}> click {count} times </h2>
        </div>
     );
}
 
export default WithCounter(ClickCounter, 5);