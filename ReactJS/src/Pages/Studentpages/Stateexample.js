import { useRef, useState } from "react";

function New(){
  
  const text = useRef();
 
  
function handle(){
  
  }
    return(
        <div>
             <p ref="text">This is file</p>
             <button onClick={handle}>Click me</button>
            </div>
    );
}
export default New;