import React from "react";
import MySidebar from "../Dashboard/MySidebar";
import styled from "styled-components";
const Container = styled.div`
  background: rgb(213, 209, 223);
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 5px;
`;
const Container1 = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
`;

const Container2 = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(213, 209, 223);
  /* overflow: hidden; */
  display: flex;
  /* align-items: right; */
`;
const Div=styled.div`
width:99% ;
border-radius: 25px;
margin-top: 10px;
height :96%;
background-color: white;
`

const Spendings = () => {
  return (
    <>
      <Container>
        <Container1>
          <MySidebar />
        </Container1>
        <Container2>
            <Div>
                
            </Div>
        </Container2>
      </Container>
    </>
  );
};

export default Spendings;
