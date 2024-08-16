import React , {useContext}from "react";
import AuthContext  from "../context/AuthContext";
import axios from "axios";  
import { useNavigate } from "react-router-dom";

const Showorders=()=>{
   let navigate = useNavigate();
    const {userId}=useContext(AuthContext);
    const intval=parseInt(userId);
const handlePlaceOrder=()=>{
    const resp=axios.post("http://localhost:8080/orders/order?userId="+intval)
    .then(response => {
        console.log(response.data);
        alert("order is placed...!");
        navigate('/orderslist');
    })
    .catch(error => {
        console.error(error);
    });
    return resp.data;
}
    return(
        <div>
              <p>{userId}</p>
              <br />
              <button onClick={handlePlaceOrder}>Place Order</button>
              <br />
              <p>{}</p>
        </div>
      
    );
}

export default Showorders;