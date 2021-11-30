import { useState } from "react/cjs/react.development";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "../Filter/filter.module.css";


const options = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
];

const Filter = () => {
    const dispatch = useProductsActions();
    const[value, setValue] = useState();

    const changeHandler = (selectedOption) => {
        console.log(selectedOption)
        dispatch({ type: "filter", selectedOption })
        setValue(selectedOption);
    }
    return(
        <div className={styles.filter}>
            <p>filter products based on :</p>
            <div className={styles.selectContainer}>
               <span> order by </span>
                 <Select
                 value={value}
                 onChange={changeHandler}
                 options={options}
                 className={styles.select}
               />
            </div>
              
        </div>
    )
}
 
export default Filter;