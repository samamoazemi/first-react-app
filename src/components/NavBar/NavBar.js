import styles from "./navBar.module.css";

const NavBar = ({ totalItems }) => {

  console.log("NavBar.js render")

  return(
    <header className={styles.navBar}>
    <h2>fronthooks.ir shopping</h2>
    <span>{totalItems}</span>
    </header>
  )
}
 
export default NavBar;