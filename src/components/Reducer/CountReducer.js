import { useReducer } from "react";

const initialState = 0;
const reducer = (state,action) => {
  switch (action) {
      case "addOne" :
         return state + 1;
      case "addFive" :
          return state + 5;
      case "decrement" :
          return state - 1;  
      default :
          return state;

    }
}

const CounterOne = () => {

     // steps :
     // 1. import useReduser()
     // 2. useReduser(reducer,initialState)
     // 3. return[count,dipatch]
     // 4. reducer(state,action)

     const[count,dispatch] = useReducer(reducer,initialState);

     return(
        <div>
            <h2>count is : {count}</h2>
            <button onClick={() => dispatch("addOne")}>add one</button>
            <button onClick={() => dispatch("addFive")}>add five</button>
            <button onClick={() => dispatch("decrement")}>decrement</button>
        </div>
    )
}
 
export default CounterOne;