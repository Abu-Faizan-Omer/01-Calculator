import styles from "./Display.module.css"

const Display=(props)=>{
 return (
    <input className={styles.display}
     type='text'
     placeholder="Value"
    
      ></input>
 )
}
export default Display