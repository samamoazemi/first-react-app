import { useContext } from "react/cjs/react.development";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";



const CountrOne = () => {

    const count = useContext(CounterContext)  //state
    const setCount = useContext(CounterContextDispatcher)  //setState

    return(
        <div>
            <h2> count is : {count} </h2>
            <button onClick={() => setCount( count + 1 )}>Add one</button>
        </div>
    )
}
 
export default CountrOne;