import styles from "./Display.module.css"

const Display=(props)=>{
 return (
    <input className={styles.display}
     type='text'
     placeholder="Value"
     value={props.displayValue} readOnly 
      ></input>
 )
}
export default Display