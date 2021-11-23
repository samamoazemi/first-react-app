import { useRef, useState } from "react";

const UseRefExample = () => {

    const[inputValue, setInputValue] = useState("")
    const inputRef = useRef()

    const resetHandler = () => {
        setInputValue("")
        inputRef.current.focus()

    }

    const changeHandler = (e) => {
        setInputValue(e.target.value)

    }

    return(
        <div>
            <input 
            type="text" 
            ref={inputRef} 
            onChange={changeHandler} 
            value={inputValue} 
            />
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}
 
export default UseRefExample;