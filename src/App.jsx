import React,{useState} from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
function App() {

  const [calVal,setCalVal]=useState("")

  return (
    <div className={styles.calculator}>
      <center className={styles.header}>Calculator</center>
      <Display displayValue={calVal}/>
      <Button/>
     
    </div>
  );
}

export default App;
