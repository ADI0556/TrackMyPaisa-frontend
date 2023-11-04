import React from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import im from "../../Component/logo.svg";
import img from "../../Component/th.svg";
import logo1 from './logo.png'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
// import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import FlagCircleTwoToneIcon from '@mui/icons-material/FlagCircleTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';

const Img=styled.img`
    margin-top: 20px;
    width:180px;
    height:50px;
    align-items: center;
    margin-left: 20px;
`
const P1=styled.p`
  text-decoration: none;
`
const Container=styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width:230px;
  height:97%;
  border: 1px solid #ccc; 
  align-items: left;
    justify-content: space-between; 
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`
const P2=styled.p`
  text-align: center;
  color: rgb(22, 96, 96);
  font-weight: bold;
`
const H4=styled.h4`
  text-align: center  ;
`
const Img2=styled.img`
    margin-top: 5px;
    width:40px;
    height:40px;
    border-radius: 30px;
    border: rgb(71, 87, 87) solid;
    align-items: center;
    margin-left: 80px;
    padding:2px;
`
const Button1=styled.button`
    width:70px;
    height:30px;
    border: 2px solid;
    border-radius: 5px;
    margin-left: 65px;
`
 
function MySidebar() {
  
  return (

    <>
    <Container>
    <Img src={logo1}/>
    {/* <H4>FinOrbit</H4> */}
    <br/><hr/>
      <Sidebar width='220px' >
      <Menu>
        {/* <SubMenu label="Log In">
          <MenuItem> Login </MenuItem>
          <MenuItem> SignUp </MenuItem>
        </SubMenu> */}
        <MenuItem> <Link to='/' style={{"textDecoration":"none","color":"black",fontSize:"18px"}}><HomeTwoToneIcon/>  Home</Link> </MenuItem>
       <MenuItem> <Link to='/dashboard' style={{"textDecoration":"none","color":"black",fontSize:"18px"}}><DashboardTwoToneIcon/>  Dashboard</Link> </MenuItem>
       <MenuItem style={{textDecoration:'none'}}><Link to='/addexpense' style={{"textDecoration":"none","color":"black",fontSize:"18px"}}> <ReceiptTwoToneIcon />  Add Expenses</Link> </MenuItem>
       {/* <MenuItem style={{textDecoration:'none'}}><Link to='/subscribe' style={{"textDecoration":"none","color":"black"}}> Subscribe</Link></MenuItem> */}
       <MenuItem> <Link to='/setGoal' style={{"textDecoration":"none","color":"black",fontSize:"18px"}}> <FlagCircleTwoToneIcon/> Set-Goals</Link> </MenuItem>
       <MenuItem> <Link to='/recomendations' style={{"textDecoration":"none","color":"black",fontSize:"18px"}}> <SchoolTwoToneIcon/> Our Recommends</Link> </MenuItem>
         
      </Menu>
    </Sidebar>
  <hr/>
      <Img2 src={img}></Img2>
      <P2>Shanawaz <sub>md.shanawaz@empower.com</sub></P2>
      <Button1 className='btn-info' onClick={(event=>{localStorage.removeItem('token'); window.location.href='/'})}> Logout</Button1>
</Container>
    </>

  )
}

export default MySidebar