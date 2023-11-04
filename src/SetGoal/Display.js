import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HouseIcon from "@mui/icons-material/House";
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from "react-bootstrap";

const Div=styled.div`
  margin-top: 20px;
  max-height: 400px; 
  
  border: 1px solid #ccc;
  padding: 10px;
  background-color:rgb(145, 214, 128);   
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow-y: scroll; /* Add your existing styles here */
  scrollbar-width: thin; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 11 */
  scrollbar-width: none; /* Hide scrollbar in Firefox */

  /* Hide the vertical scrollbar in WebKit-based browsers (e.g., Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`
;
const Div3 = styled.div`
  width: 440px;
  height: 140px;
  margin-top: 5px;
  background-color: rgb(208, 238, 185);
  border-radius: 1rem;
  box-shadow:"2px 2px 5px rgba(0,0,0,0.5)"
`;
const P=styled.p`
  font-size: 14px;
`

const Display = (props) => {

  const [currentDate,setCurrentDate]=useState();
useEffect(() => {
  
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

   
    setCurrentDate(formattedDate);
  }, []); 


  const value= (((props.data.goal-props.data.contribution)/props.data.goal )).toFixed(2) 
  /* const myData=JSON.parse(localStorage.getItem('savingData')); */
  const data1=JSON.stringify(props.data)
  localStorage.setItem('myData',data1)
  const msav=props.savings

  // let arr=[]
  // arr.push(props.data)
  console.log(props.data,"this is data")
  /* console.log(myData) */
  const data2 = localStorage.getItem('myData');
  const data3=JSON.parse(data2)

  return (
    <>
      <Div>
      <Div3 className="card">
          <div className="card-body" >
            <h5 className="card-title">{props.data.name}  <Button variant='info' style={{height:"30px",float:"right",marginRight:"10px"}}>Goal Rs.{props.data.goal} </Button></h5>
            <P className="card-text">
              Monthly Contribution:{msav}  Remaining Days:{props.data.time * 30-1}<br/>
              Date: {currentDate}
            </P>
            {/* //progress bar  */}
            <ProgressBar animated now={2} label={2+"%"} style={{height:"10px"}}/>
            </div>
        </Div3>
        <Div3 className="card">
          <div className="card-body">
            <h5 className="card-title"><TwoWheelerIcon />  Bike   <Button variant='info' style={{height:"30px",float:"right",marginRight:"10px"}}>Goal Rs.224000 </Button></h5>
            <P className="card-text">
              Monthly-contribution:{msav}  Remaining Days:341
            </P>
            {/* //progress bar  */}
            <ProgressBar animated now={1} label={value+"%"} style={{height:"10px"}}/>
            </div>
        </Div3> 
        
        
        <Div3 className="card">
          <div className="card-body">
            <h5 className="card-title"><HouseIcon />    House  <Button variant='info' style={{height:"30px",float:"right",marginRight:"10px"}}>Goal Rs.12000000 </Button></h5>
            <P className="card-text">
            Monthly Contribution: Rs.20000 Remaining Days: 220
            Date: 22 Oct 2023
            </P>
            {/* //progress bar  */}
            <ProgressBar animated now={30} label={`${30}%`} style={{height:"10px"}}/>
            </div>
        </Div3>
        <Div3 className="card">
          <div className="card-body">
            <h5 className="card-title"><ElectricCarIcon />     Car  <Button variant='info' style={{height:"30px",float:"right",marginRight:"10px"}}>Goal Rs.450000 </Button></h5>
            <P className="card-text">
            Monthly Contribution:Rs.10000  Remaining Days:117
              
            </P>
            {/* //progress bar  */}
            <ProgressBar animated now={95} label={`${15}%`} style={{height:"10px"}}/>
            </div>
        </Div3>
        <Div3 className="card">
          <div className="card-body">
            <h5 className="card-title"><TwoWheelerIcon />     Bike  <Button variant='info' style={{height:"30px",float:"right",marginRight:"10px"}}>Goal Rs.125000</Button></h5>
            <p className="card-text">
            Monthly Contribution:Rs.10000  Remaining Days:117
              
            </p>
            {/* //progress bar  */}
            <ProgressBar animated now={75} label={`${15}%`} style={{height:"10px"}}/>
            </div>
        </Div3>
      </Div>
      <br/>
      <h5 style={{textAlign:"center",color:"#183165"}}>Strategize for success. Stay one step ahead!</h5>
    </>
  );
};

export default Display;
