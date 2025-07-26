import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
function App() {

 

  return (
    <div className={styles.calculator}>
      <center className={styles.header}>Calculator</center>
      <Display />
      <Button/>
     
    </div>
  );
}

export default App;
