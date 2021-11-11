import { useState } from "react/cjs/react.development";

const HookArray = () => {
    const [item, setItem] = useState([]);

    const addItemHandler = () => {
        setItem([
            ...item,
             {id: item.length, number: Math.floor(Math.random() * 10) }
        ])
    }

    return (
        <div>
            <button onClick={addItemHandler}>add item</button>
            {item.map((item) => {
                return <li key={item.id}>{item.number}</li>
            })}
        </div>
      );
}
export default HookArray;