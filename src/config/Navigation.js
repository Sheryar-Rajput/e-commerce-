
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Dashboard from "../views/Dashboard"
  import SignIn from "../views/signIn"
  import SignUp from "../views/signUp"
  import About  from '../views/about'
  import ProductShoes from "../views/productShoes";
  function Navigation() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}  /> 
          <Route path="/Dashboard" element={<Dashboard/>}  /> 
          <Route path="/about" element={<About/>}  /> 
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/products" element={<ProductShoes />} />

        </Routes>
      </BrowserRouter>
  
    )
  }
  
  export default Navigation ;