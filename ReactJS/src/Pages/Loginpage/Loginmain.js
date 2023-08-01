
import Signup from "../Signup";
import Login from "./Login";
import { Routes, Route, Link} from "react-router-dom";
function Loginmainn() {
    return(
        <>
      <div>
        <nav>
    <Login />
        
        
           </nav>
           <Routes>
                <Route exact path="/Signup" element={<Signup/>}></Route>
              
           </Routes>
  </div>
    </>
    )
};
   
export default Loginmainn;