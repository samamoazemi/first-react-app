// HOC
// HOC => Function
// input : Component => output : NewComponent
// why ? to share logic (functionality) between component

const Wrapper = (props) => {
    return  <div className={props.class}>{props.children}</div>
}
 
export default Wrapper;
