import React from 'react'
import styled from 'styled-components';
import Dashmain from './Dashboard/Dashmain';
import MySidebar from './Dashboard/MySidebar';

const Container=styled.div`
    background: rgb(213, 209, 223);
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 5px
`
const Container1=styled.div`
    width: 20%;
    height:100vh;
    display: flex;
    `

const Container2=styled.div`
    width: 100%;
    height:100vh;
    background: rgb(213, 209, 223);
    /* overflow: hidden; */
    display: flex;
    /* align-items: right; */
`


export default function Dashboard() {
    
  return (
    <>
    <Container>
        
                <Container1>
                    <MySidebar/> 
                </Container1>
                <Container2>
                    <Dashmain/>  
                </Container2>
    
        </Container>
    </>
  )
}
