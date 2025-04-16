import React from "react";


 function EyesOnMe() {
    function display(){
     console.log("Good!");
    }
    function display2(){
        console.log("Hey! Eyes on me!")
    }
  return (
    <div>
      <button onFocus={display} onBlur={display2}>Eyes on me</button>
    </div>
  )
}
export default EyesOnMe

