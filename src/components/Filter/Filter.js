import { useState } from "react/cjs/react.development";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "../Filter/filter.module.css";
import SelectComponent from "../../common/Select/Select";

const options = [
    { value: '', label: 'All' },
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
];

const sortOptions = [
    { value: 'highest', label: 'highest' },
    { value: 'lowest', label: 'lowest' },
];
  
const Filter = () => {

    const dispatch = useProductsActions();
    const[value, setValue] = useState("");
    const[sort, setSort] = useState("");

    const changeHandler = (selectedOption) => {
        dispatch({ type: "filter", selectedOption })
        dispatch({ type: "sort", selectedOption : sort })
        setValue(selectedOption);
    }

    const sortHandler = (selectedOption) => {
        dispatch({ type: "sort", selectedOption })
        setSort(selectedOption);
    }

    return(
        <div className={styles.filter}>
            <p>filter products based on :</p>
            {/* <div className={styles.selectContainer}></div> */}
            <SelectComponent 
             title="filter by size"
             value={value}
             onChange={changeHandler}
             options={options}
            />
            <SelectComponent 
             title="sort by price"
             value={sort}
             onChange={sortHandler}
             options={sortOptions}
            />
        </div>
    )
}
 
export default Filter;