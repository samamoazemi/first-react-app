import {useCount, useCountActions } from "./CounterProvider";

const CountrOne = () => {

    const count = useCount()
    const setCount = useCountActions()
    
    return(
        <div>
            <h2> count is : {count} </h2>
            <button onClick={() => setCount( count + 1 )}>Add one</button>
        </div>
    )
}
 
export default CountrOne;