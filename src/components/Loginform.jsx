
import React ,{useState} from "react";
import './Navbar.css';

const initLogin={
    "Email": "",
    "Password": "",
};
export const Login=()=>{
   const[form,setForm]= useState(initLogin)
    const inputevent = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      };

   const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(form);


   }








    return(
  <form onSubmit={handleSubmit} >"
  <h1>Login here</h1>
<label> Email </label>{" "}<br/>
      <input
        type="email"
        name="Email"
        placeholder=" Enter email"
        onChange={inputevent}
      />{" "}<br/>
      <label> password </label>{" "}<br/>
      <input
        type="password"
        name="Password"
        placeholder=" Enter password"
        onChange={inputevent}
      />{" "}<br/>
      <input type="submit" value="SUBMIT"/>

  </form>


    )
}