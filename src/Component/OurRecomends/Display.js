import React from 'react'
import styled from 'styled-components';
import MySidebar from '../Dashboard/MySidebar';
import rule2 from '../Images/rule2.png'
import s1 from '../Images/Stocks/s1.png'
import s2 from '../Images/Stocks/s7.png'
import s3 from '../Images/Stocks/s8.png'
import s4 from '../Images/Stocks/s4.png'
import s5 from '../Images/Stocks/s5.png'
import s6 from '../Images/Stocks/s6.png'
import s7 from '../Images/Stocks/s8.png'
import s8 from '../Images/Stocks/s10.png'
import s9 from '../Images/Stocks/s3.png'

import c13 from '../Images/c13.jpg';
import c11 from '../Images/c11.jpg';
import c3 from '../Images/c3.jpg';
import c4 from '../Images/c4.jpg';
import c6 from '../Images/c6.jpg';
import c8 from '../Images/c8.jpg';
import c14 from '../Images/c14.jpg';
import c15 from '../Images/c15.jpg';
import c16 from '../Images/c16.jpg';
import c12 from '../Images/c12.jpg';
import sbi from '../Images/Stocks/SBI.png'
import birla from '../Images/Stocks/Birla.png'
import icici from '../Images/Stocks/icici.png'
import tata from '../Images/Stocks/tata.png'
import axis from '../Images/Stocks/Axis.png'
import Qactive from '../Images/Stocks/Qactive.png'
import quant from '../Images/Stocks/quant.png'
import kotak from '../Images/Stocks/Kotak.png'
import '../../App.css'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
const Container = styled.div`
    background: rgb(213, 209, 223);
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 10px;
`
const Container1 = styled.div`
    width: 20%;
    height:100vh;
    display: flex;
    `
const Container2 = styled.div`
background: white;
width:99%;
flex:1;
height:580px;
border-radius: 30px;
margin-top: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

`
const Img = styled.img`
    width:280px;
    height:200px;
    margin-top:28px;
    border-radius: 1.5rem;
    margin-left: 35px;
    
`
const Img2 = styled.img`
    width:130px;
    height:90px;
    border-radius: 1.5rem;
    margin-top:5px;
    margin-left: 10px;
    
`
const Img3 = styled.img`
    width:250px;
    
    height:220px;
    margin-top:10px;
    border-radius: 1.5rem;
    margin-left: 25px;
    
`
const Img7 = styled.img`
    width:280px;
    margin-left: 10px;
    margin-top: 5px;
`
const Div = styled.div`
    width:98%;
    height:230px;
    display: flex;
    /* flex-direction: row; */
    margin-left: 10px;
    margin-top: 20px;
    background-color: rgb(165, 153, 195);
    border-radius: 1.5rem;
    padding: 10px 10px 10px 10px;
    box-shadow: 5px 5px 10px rgb(0, 0,0,0.5); 
    overflow-x: scroll; /* Add your existing styles here */
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
const Div2 = styled.div`
    width:100%;
    height:450px;
    margin-top: -10px;
    display: flex;
    background-color:rgb(165, 153, 195);
    border-radius: 1.5rem;
    padding: 10px 10px 10px 10px;
    box-shadow: 5px 5px 10px rgb(0, 0,0,0.5);
`
const Div3 = styled.div`
    height:320px;
    padding: 10px 10px 10px 10px;
    display: flex;
    
`
const Div4 = styled.div`
align-items: center;
overflow-y: auto;
    background-color: rgb(181, 164, 222);
    border-radius:1.5rem;
    display: flex-wrap;
    box-shadow: 5px 5px 10px rgb(0, 0,0,0.5);
    width:320px;
    padding:10px 10px 10px 10px;
    margin-left: 10px;
    height:310px;
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
const Div5 = styled.div`
    width:280px;
    height:60px;
    background-color: azure;
    margin-bottom: 5px;
    border-radius: 1.5rem;
`

const Display = () => {
    return (

        <>
            <Container>
                <Container1> <MySidebar /></Container1>

                <Container2>
                    <Div3>
                        <Div4 style={{}}>
                            <h5>Thumb rule of Investing</h5>
                            <Img3 src={rule2} />
                        </Div4>
                        <Div4>
                            <h5>Top in crypto</h5>
                            <Img2 src={c3} /><Img2 src={c11} /> <Img2 src={c4} /> <Img2 src={c6} /> <Img2 src={c13} /> <Img2 src={c8} />
                            <Img2 src={c14} /><Img2 src={c15} /><Img2 src={c16} /><Img2 src={c12} />
                        </Div4>
                        <Div4>
                            <h5>Top in Mutual Funds</h5>
                            <Img7 src={sbi} />
                            <Img7 src={icici} />
                            <Img7 src={birla} />
                            <Img7 src={tata}  />
                            <Img7 src={axis} />
                            <Img7 src={kotak} />
                            <Img7 src={Qactive} />
                            <Img7 src={quant}  />
                        </Div4>
                    </Div3>
                    <Div>    
                        <div>
                        <h5>In Stocks</h5>
                        <Img src={s1} /> <Img src={s4} /> <Img src={s3} /><Img src={s2}/><Img src={s5} />
                        <Img src={s6} /> <Img src={s7} /> <Img src={s8} /><Img src={s9}/>
                        </div>
                    </Div>
                    <br />
                    {/* <Div2>
            <h5>Top in crypto</h5>
             <Img2 src={c3}/><Img2 src={c11}/> <Img2 src={c4}/> <Img2 src={c6}/> <Img2 src={c5}/> <Img2 src={c8}/></Div2>
         */}
                </Container2></Container>

        </>
    )
}

export default Display