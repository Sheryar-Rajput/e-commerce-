
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
  import AdminDashboard from "../admin/views/AdminDashboard";
  import Order from "../admin/views/order";
  import Customer from "../admin/views/Customer";
  import AddProduct from "../admin/views/AddProduct";

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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/AddProduct" element={<AddProduct />} />



          

        </Routes>
      </BrowserRouter>
  
    )
  }
  
  export default Navigation ;