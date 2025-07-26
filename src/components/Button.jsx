import styles from './Button.module.css';

const Button =()=>{

  const buttonList=["C",1,2,3,4,5,6,7,8,9,0,"+","-","*","/",".","="]
 return(
   <div className={styles.buttonContainer}>
    {buttonList.map((list) =>{
      return <button className={styles.button}>{list}</button>
    })}

  </div>
    //  <div className={styles.buttonContainer}>
    //     <button className={styles.button}>C</button>
    //     <button className={styles.button}>1</button>
    //     <button className={styles.button}>2</button>
    //     <button className={styles.button}>+</button>
    //   </div>
 )
}
export default Button