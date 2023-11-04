import React, { useState } from 'react'
import styled from 'styled-components'
import MySidebar from '../Component/Dashboard/MySidebar'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Display from './Display'
const Container=styled.div`
    background: rgb(213, 209, 223);
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 5px;
`
const mystyle={
  boxShadow:"2px 2px 5px rgba(0,0,0,0.25)"
}
const Container1=styled.div`
    width: 20%;
    height:100vh;
    display: flex;

  `
  const Div=styled.div`
  width:99% ;
  display:flex;
  border-radius: 25px;
  margin-top: 10px;
  height :95%;
  background-color: white;
  box-shadow:"5px 5px 10px rgba(0,0,0,0.5)";
  `
const Div2=styled.div`
  background-color: rgb(173, 225, 225);
  width:50%;
  height:95%;
  margin:10px 10px 10px 10px;
  border-radius: 25px;
  padding: 10px 10px 10px 10px;
  box-shadow:"5px 5px 10px rgba(0,0,0,0.5)";
`
const H2=styled.h2`
  text-align: center;
  color:rgb(42, 51, 51);
  
`
const H4=styled.h4`
  text-align: center;
  color:rgb(42, 51, 51);
  
`

const SetgoalCal = () => {
  const [name,setName]=useState('');
  const [id,setId]=useState();
  const [goalAmount, setGoalAmount] = useState();
  const [monthlyContribution, setMonthlyContribution] = useState();
  const [timeToGoal, setTimeToGoal] = useState();
  const [monthlySavings, setMonthlySavings] = useState();
  // [name,goalAmount,monthlyContribution,timeToGoal]=arr[];
  const [arr,setArr]=useState({myName:"",goal:0.0,contribution:0,time:0,myid:0});
  const [visible,setVisible]=useState(false);

  const calculateSavings = () => {
    const goal = parseFloat(goalAmount);
    const contribution = parseFloat(monthlyContribution);
    const time = parseFloat(timeToGoal);

    if (!isNaN(goal) && !isNaN(contribution) && !isNaN(time)) {
      const monthlySavingsValue = (goal - contribution) / time;
      setMonthlySavings(monthlySavingsValue.toFixed(2));
    } else {
      setMonthlySavings('');
    }

    
  };
  const addGoal=()=>{
    // setArr.name=name;
    // const { myname, mycontribution, mygoal,mytime } = arr;
    // const updatedName = name;
    // setArr(...arr,name:updatedName)

    const goal = parseFloat(goalAmount);
    const contribution = parseFloat(monthlyContribution);
    const time = parseFloat(timeToGoal);

    if (!isNaN(goal) && !isNaN(contribution) && !isNaN(time)) {
      const monthlySavingsValue = (goal - contribution) / time;
      setMonthlySavings(monthlySavingsValue.toFixed(2));
    } else {
      setMonthlySavings('');
    }
    // console.log(name,goal,contribution);
    let obj={name:'Shanawaz',goal:2000.0,contribution:10.0,time:12.0,myid:1011,msavings:0};
    obj.name=name;
    obj.goal=goalAmount;
    obj.contribution=monthlyContribution;
    obj.time=timeToGoal;
    obj.msavings=monthlySavings;

    setArr(obj)
    const myArray=[];
    myArray.push(obj);
   
    
   
    // setVisible(!visible)
    const arrayAsJSON = JSON.stringify(myArray);
    localStorage.setItem("savingData",arrayAsJSON);
    


   
if(id==null || goalAmount==null || timeToGoal==null || monthlySavings==null || monthlyContribution==null){
  setVisible(true);
  toast.error('Failed to add, \n please enter all details!!', {position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false})
}
else{
  setVisible(true)
  toast.success('Goal added Successfully!', { position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false});

}
    


    // this.arr.name=name;
      // setArr({...arr,myName:name});
      // setArr({...arr,contribution:monthlyContribution});
      // setArr({...arr,goal:goalAmount});
      // setArr({...arr,time:timeToGoal});
      // setArr.contribution=monthlyContribution;
      // setArr.time=timeToGoal;
      // setArr.goal=goalAmount;
    
  };
  return (
    <>
    <ToastContainer/>
      <Container>
        <Container1><MySidebar/></Container1>
        <Div>
        <Div2>
      <H2>Goal Calculator</H2><hr/>
      <div className="input-group mb-3" style={mystyle}>
            <span className="input-group-text" id="basic-addon1">Goal Name</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" className="form-control" placeholder="eg: car,house" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3" style={mystyle}>
            <span className="input-group-text" id="basic-addon1">Goal Id</span>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} name="id" className="form-control" placeholder="eg: 101" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

      <div className="input-group mb-3" style={mystyle}>
            <span className="input-group-text" id="basic-addon1">Goal Amount (Rs.):</span>
            <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} name="name" className="form-control" placeholder="Total amount" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      
      <div className="input-group mb-3" style={mystyle}>
            <span className="input-group-text" id="basic-addon1"> Current Contribution (Rs.):</span>
            <input  type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} name="name" className="form-control" placeholder="eg: 2000" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3" style={mystyle}>
            <span className="input-group-text" id="basic-addon1"> Time(months):</span>
            <input  type="number" value={timeToGoal} onChange={(e) => setTimeToGoal(e.target.value)} name="name" className="form-control" placeholder="eg:12" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div style={{display:"flex"}}>
      <Button style={{marginLeft:"80px",height:"40px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)"}} onClick={calculateSavings}>Calculate</Button>
      <Button style={{marginLeft:"50px",height:"55px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)"}} onClick={addGoal}>Calculate & Add Goal<br></br><sub>Double Click</sub></Button></div>
      <br/><hr/>
      {monthlySavings && (
        <div>
          You need to save <strong>Rs.{monthlySavings}</strong> each month to reach your goal.
        </div>
      )}
    </Div2>
        <Div2>
        <H4>Current Goals</H4><hr/>
        { visible &&
          <Display data={arr} savings={monthlySavings}/>
        }

        </Div2>
          
        </Div>
        
      </Container>
    </>
  )
}

export default SetgoalCal