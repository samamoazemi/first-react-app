import {useCount, useCountActions } from "./CounterProvider";

const CountrOne = () => {

    const count = useCount()
    const dispatch = useCountActions()

    return(
        <div>
            <h2> count is : {count} </h2>
            <button onClick={() => dispatch({ type : "add", value: 1 })}>
                add one
            </button>
            <button onClick={() => dispatch({ type : "decrement", value: 1 })}>
                decrement
            </button>
            <button onClick={() => dispatch({ type : "reset" })}>reset</button>
        </div>
    )
}
 
export default CountrOne;