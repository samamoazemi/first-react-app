import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {

    const[inputValue, setInputValue] = useState("")
    const[count, setCount] = useState(0)

    const previousValue = useRef()
    const previousCount = useRef()

    const changeHandler = (e) => {
        setInputValue(e.target.value)
    }
    // console.log("re-render", inputValue)
    // console.log("prev-value", previousValue.current)

    useEffect(() => {
        previousValue.current = inputValue; // does not re-render component
        console.log("useEffect", previousValue.current)
    },[inputValue])
    
    useEffect(() => {
        previousCount.current = count; // does not re-render component
    },[count])

    return(
        <div>
            <input 
            type="text" 
            onChange={changeHandler} 
            value={inputValue} 
            />
            <p> my name is {inputValue} and it use to be {previousValue.current} </p>
            <div>
            <button  onClick={() => setCount(Math.ceil(Math.random()*100))}>
                generate random
            </button>
                <div>count is : {count}</div>
                <div>previous count is : {previousCount.current} </div>
            </div>
        </div>
    )
}
 
export default UseRefExample;