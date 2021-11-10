import { useState } from "react/cjs/react.development";

const HookObject = () => {

  const [user , setuser] = useState({ firstName:"" , lastName:""})

  const firstNameHandler = (e) => {
    setuser({ ...user, firstName: e.target.value})
}
  const lastNameHandler = (e) => {
    setuser({ ...user, lastName: e.target.value})
    }
    
    return (
        <form>
            <input type="text" value={user.firstName} onChange={firstNameHandler}/>
            <h2>my name is : {user.firstName} </h2>
            <input type="text" value={user.lastName} onChange={lastNameHandler}/>
            <h2>my name is : {user.lastName} </h2>
        </form>
    );
}
 
export default HookObject;