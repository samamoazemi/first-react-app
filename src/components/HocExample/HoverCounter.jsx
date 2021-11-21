import { useState } from "react";
import WithCounter from "../HOC/WithCounter";

const HoverCounter = ({count,incrementCount}) => {
   
    return ( 
        <div>
            <h2 onMouseOver={incrementCount}> hovered {count} times </h2>
        </div>
     );
}
 
export default WithCounter(HoverCounter, 10);