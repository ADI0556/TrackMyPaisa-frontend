import React, { Component } from 'react';
// import { useState } from 'react'
import { Button,Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import UserService from "../../Service/UserService";
import MySidebar from '../Dashboard/MySidebar';
import { DisplayExp } from './DisplayExp';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HouseIcon from '@mui/icons-material/House';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GroupIcon from '@mui/icons-material/Group';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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

    const mystyle={
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"
    }
    const mystyle2={
      boxShadow:"2px 2px 5px rgba(0,0,0,0.25)"
    }

const Container2=styled.div`
background: white;
width:99%;
display: flex;
flex:1;
height:580px;
border-radius: 30px;
margin-top: 10px;
padding:10px 10px 10px 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

`
const Div=styled.div`
width:500px;
height:560px;
margin-top: 2px;
background-color: rgb(199, 224, 224);
border-radius: 1.5rem;
margin-left: 5px;
padding:20px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`
const Input=styled.input`
  font-family: inherit;
  margin-left: 90px;
  width: 60%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.5rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  text-shadow: 2rem;
  &:placeholder-shown {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`

const H3=styled.h3`
  color:rgb(74, 92, 225);
  text-align: center;
  margin-top: -5px;
`
const Div2=styled.div`
display: flex;
margin-left: 10px;
margin-top: 20px;
`
const P=styled.p`
  color:rgb(41, 86, 221);
`
const Div3=styled.div` 
    display: flex;
    justify-content: space-between;
    
`

export default class Expensecal extends Component {
  
  
  constructor(props)
  {
      super(props)
      var myUser=localStorage.getItem('userList')
      var user=JSON.parse(myUser);
      var myCategory=localStorage.getItem('Categories')
      var category=JSON.parse(myCategory)
      console.log(myUser);
      console.log(user.name)
      console.log(myCategory);
      var data=localStorage.getItem('id');
    console.log(data ,"data is getttinh stored")
      this.state={
        expenseId:"",
        expenseName:"",
        amount:0,
        date:new Date().toISOString().split('T')[0],
        comments:"",
        category:{
          categoryId:0,
          categoryName:""
        },
        users:{
            userId:user.userId,
            name:user.name,
            emailId:user.emailId, 
        } 
      }
          
      this.fnAdd=this.fnAdd.bind(this);
      this.fnUpdate=this.fnUpdate.bind(this);
      this.fnDelete=this.fnDelete.bind(this);
      this.onFoodChange=this.onFoodChange.bind(this);
      
  }
  componentDidMount(){
    UserService.getAllExpense().then(response =>{
      var myData=JSON.stringify(response.data);
      console.log(JSON.parse(myData))  
      localStorage.setItem('ExpenseList',myData)
  })
  }
    
    // fnCat(){
    //   UserService.getCategories(this.state.category.categoryName).then(response =>{
    //       console.log(JSON.stringify(response.data));
    //       localStorage.setItem('Categories',JSON.stringify(response.data))
    //   })
    // }
  


  fnAdd()
  {
    const expenseList=JSON.parse(localStorage.getItem('ExpenseList'))
    console.log(expenseList,"Hiiiii")
    const isExpenseIdValid = expenseList.some(item => item.expenseId === this.state.expenseId);
    
      UserService.addExpense(this.state).then((response)=>{
        if(isExpenseIdValid){
          toast.error('Failed to add, Id already Exists!!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2200,
            closeOnClick: true,
            pauseOnHover: false
          });
        }
          console.log(response.data);
          toast.success('Expense added Successfully!', { position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false});
  
      }).catch(err=>{
        toast.error('Failed to add, \n please enter all details!!', {position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false})
      })
      setTimeout(() => {
        window.location.reload(false);
      }, 2100);
  }

  fnUpdate()
  {
      console.log(this.state.expenseId )
      console.log(this.state);
    var id=this.state.expenseId;
    UserService.updateExpense(id,this.state).then(response=>{
      toast.success('Expense Updated Successfully!', { position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false});
    }).catch(err=>{
      toast.error('Failed to Update, Enter All the details correctly', {position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false})

      })
      setTimeout(() => {
        window.location.reload(false);
      }, 2100);
  }

  fnDelete()
  {
    console.log(this.state.expenseId , "Deleted");
    var id=this.state.expenseId;
    UserService.deleteExpense(id).then(response=>{
      toast.success('Expense Deleted Successfully!', { position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false});

      }).catch(err=>{
        toast.error('Failed to Delete, Enter correct Id!!', {position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false})

      })
      setTimeout(() => {
        window.location.reload(false);
      }, 2100); 

  }
  
  onFoodChange(event)
  {
    var value=event.target.value;
    var obj=this.state;
    obj.category.categoryName=value;
    console.log(this.state)
    UserService.getCategories(obj.category.categoryName).then(response=>{
      var category=JSON.parse(JSON.stringify(response.data));
      var id=category.categoryId;
      // localStorage.setItem('category',category)
      console.log(id)
      localStorage.setItem('id',id)
      var st=this.state;
      st.category.categoryId=id;
      this.setState(st);
      
    }).catch(response=>{
      toast.error('Please Select category AGAIN!!', {position: toast.POSITION.TOP_RIGHT ,autoClose:2100, closeOnClick: true,pauseOnHover: false})
    })

    // const data= localStorage.getItem('category');
    // obj.category.categoryID=data.categoryId;
    console.log(this.state)
  }
  
  render() {
    const { amount, id, name, comments } = this.state;
    const isAmountValid = true;
    const isIdValid = id > 0;

    
    // const isNameValid = name.trim() !== '';
    // const isCommentsValid = comments.trim() !== '';
    return (
      <>
      <ToastContainer/>
    <Container>
        <Container1> <MySidebar/></Container1>

        <Container2>
        <div>
          <Col> 
                <Row>
                  <Div>
                  <H3>Add expense</H3>
                  <Input type="number" placeholder="Price" name="amount" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} required  aria-label="Username" aria-describedby="basic-addon1" /> 
                  {isAmountValid && (
                  <div className="invalid-feedback">Please enter a valid amount.</div>
                )}

                  <hr/>
                  <div className="input-group mb-2" style={mystyle2}>
                          <span className="input-group-text" id="basic-addon1">Id</span>
                            <input type="number" name="expenseId" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} className="form-control" placeholder="Id" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                  {/* //Category */}
                  <div><h6><P>Select Category</P></h6></div>
                    
                    <Div3>
                      <Button style={{height:"50px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="Food" onClick={this.onFoodChange}><FastfoodIcon/>Food</Button>
                      <Button style={{height:"50px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="Clothing" onClick={this.onFoodChange}><CheckroomIcon/>Clothing</Button>
                      <Button style={{height:"50px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="Rent" onClick={this.onFoodChange}><HouseIcon/>Rent</Button>
                      <Button style={{height:"50px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="invest" onClick={this.onFoodChange}><ShowChartIcon/>Invest</Button>
                      <Button style={{height:"50px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="Entertainment" onClick={this.onFoodChange}><SportsEsportsIcon/>Party</Button>
                      <br/>
                      {/* <Button variant="primary" name="category" value="misc" onClick={(e)=>{this.setState({[e.target.name]:e.target.value})}}>Misc</Button>
                      <Button variant="primary" name="category" value="friend" onClick={(e)=>{this.setState({[e.target.name]:e.target.value})}}>Friend</Button>
                    </Div3> */}

                   
                    </Div3>
                    <br/>
                    <Button style={{marginLeft:"10px",height:"50px",marginTop:"-5px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} variant="info"  name="category.categoryName" value="hospital" onClick={this.onFoodChange}><MedicalServicesIcon/>Medics</Button>
                    <Button variant="info" name="category.categoryName" style={{marginLeft:"10px",height:"50px",marginTop:"-5px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} value="transportation" onClick={this.onFoodChange}><DirectionsBusIcon/>Transport</Button>
                    <Button variant="info" name="category.categoryName" style={{marginLeft:"10px",height:"50px",marginTop:"-5px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} value="friend" onClick={this.onFoodChange}><GroupIcon/>Friend</Button>
                    <Button variant="info" name="category.categoryName" style={{marginLeft:"10px",height:"50px",marginTop:"-5px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)",fontSize:"14px"}} value="misc" onClick={this.onFoodChange}><MiscellaneousServicesIcon/>Misc</Button>
                    {/* <Button variant="info" name="category.categoryName" style={{marginLeft:"10px",height:"50px",marginTop:"-5px",boxShadow:"2px 2px 5px rgba(0,0,0,0.25)"}}  onClick={alert("please add category in backend")}><AddIcon/>Add</Button> */}

                        <hr/>
                        <div className="input-group mb-2" style={mystyle2}>
                          <span className="input-group-text" id="basic-addon1">Expense</span>
                            <input type="text" name="expenseName" className="form-control" placeholder="Expense name" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        {/* <div className="input-group mb-2" style={mystyle2}>
                          <span className="input-group-text" id="basic-addon1">Date</span>
                        <input type="date" name="date" onChange={(event)=>this.setState({[event.target.name]:event.target.value.toString})} className="form-control" placeholder="Date" aria-label="Username" aria-describedby="basic-addon1" />
                        </div> */}
                        <div className="input-group mb-2" style={mystyle2}>
                          <span className="input-group-text" id="basic-addon1">Comment</span>
                            <input type="name" name="comments" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} className="form-control" placeholder="Comments" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                      {console.log(this.state)}
                      <hr/>
                        {/* <Div2 > */}
                          <input type='button' style={mystyle2} className='btn btn-primary ml-3' value="Add"  onClick={this.fnAdd} />
                          <input type='button' style={mystyle2} className='btn btn-warning ml-3' value="Update"  onClick={this.fnUpdate} />
                          <input type='button' style={mystyle2} className="btn btn-danger ml-3" value="Delete"  onClick={this.fnDelete} />
                          <input type='button' style={mystyle2} className="btn btn-info ml-3" value="Select" />
                        {/* </Div2> */}
                  <br/>
                  </Div>
                </Row>          
            </Col>
            </div>
           <Div2><DisplayExp/></Div2>
        </Container2>
        {console.log(localStorage.getItem('expenseList'))}
    </Container>
    
  
       
    </>
    )
  }
}

