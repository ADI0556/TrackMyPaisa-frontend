import React from 'react'
import styled from 'styled-components'
import MySidebar from './Dashboard/MySidebar'
import { Button } from 'react-bootstrap'
const Container=styled.div`
    background: rgb(213, 209, 223);
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 15px;
    
`
const Container1=styled.div`
    width: 20%;
    height:100vh;
    display: flex;
    `

const Container2=styled.div`
background: white;
width:98%;
display: flex;
flex:1;
height:580px;
border-radius: 30px;
margin-top: 10px;
background-color: rgb(168, 177, 210);
`
const Div=styled.div`

    margin-left: 100px;
    width:220px;
    margin-top:65px;
    height:450px;
    border-radius: 1.8rem;
    padding:10px 10px 10px 10px;
    padding-top: 50px;
    background-color: white;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`
const Div2=styled.div`
    color:black;
    margin-left: 50px;
    width:220px;
    margin-top:40px;
    height:500px;
    background-color: rgb(92, 106, 214);
    border-radius: 1.8rem;
    padding:10px 10px 10px 10px;
    padding-top: 70px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`
const Div3=styled.div`
    color:"black";
    margin-left: 50px;
    width:220px;
    margin-top:65px;
    height:450px;
    border-radius: 1.8rem;
    padding:10px 10px 10px 10px;
    padding-top: 70px;
    background-color: rgb(42, 46, 77);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`
const P =styled.h2`
    color:rgb(92, 106, 214);
    text-align: center;
`
const Subcription = () => {
  return (
   <>
        <Container>
        <Container1> <MySidebar/></Container1>
        <Container2>
            <Div>   
                    <h4 style={{textAlign:"center", color:"rgb(92, 106, 214)"}}>Basic</h4><hr/>
                    <div><P><sup style={{fontSize:"20px"}}>Rs.</sup>399</P></div>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <Button style={{backgroundColor:"rgb(92, 106, 214)",borderRadius:"1.8rem",marginLeft:"60px"}}>Buy  </Button>
                    
            </Div>
            <Div2>
            <h4 style={{textAlign:"center"}}>Standard</h4><hr/>
                    <div><P style={{color:"black"}}><sup style={{fontSize:"20px"}}>Rs.</sup>799</P></div>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <Button style={{backgroundColor:"white",borderRadius:"1.8rem",marginLeft:"60px",color:"rgb(92, 106, 214)"}}><b>Buy  </b> </Button>
                    
            </Div2>
            <Div3>
            <h4 style={{textAlign:"center", color:"rgb(92, 106, 214)"}}>Premium</h4><hr/>
                    <div><P><sup style={{fontSize:"20px"}}>Rs.</sup>999</P></div>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <p>Dashboard</p><hr/>
                    <Button style={{backgroundColor:"rgb(92, 106, 214)",borderRadius:"1.8rem",marginLeft:"60px"}}>Buy   </Button>
                    
            </Div3>
        </Container2>
        </Container>
   </>
  )
}

export default Subcription