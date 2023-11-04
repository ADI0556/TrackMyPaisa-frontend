import React, { useEffect, useState } from 'react'
import UserService from './UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Button } from 'react-bootstrap';
const MyService = () => {
    const [user,setUser]=useState([]);
    useEffect(() => {
        UserService.getAllExpense().then((response) => {
            console.log("ENtered service")
            setUser(response.data)

            
        })
          .catch((err)=>{
              alert("response error")
          })
        }, [])


        const handleButtonClick = () => {
          // Display a success message in a toast
         
          
          // You can also specify additional options:
          toast.success('Success message!', { position: toast.POSITION.TOP_RIGHT });
        };
  return (
    <>
    <ToastContainer/>
        <div>Hello</div>
        <div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>        
    </>
  )
}

export default MyService