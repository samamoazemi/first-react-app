import styles from "./navBar.module.css";

const NavBar = (props) => {
  return(
    <header className={styles.navBar}>
    <h2>fronthooks.ir shopping</h2>
    <span>{props.totalItems}</span>
    </header>
  )
}
 
export default NavBar;