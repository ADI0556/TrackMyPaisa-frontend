import React, { Component } from 'react'

import MySidebar from './Dashboard/MySidebar'
import styled from 'styled-components'
import UserService from '../Service/UserService'
// import AllService from '../Service/AllService'

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
height:570px;
border-radius: 30px;
margin-top: 10px;
padding:10px 10px 10px 10px;
padding-left: 50px;
`
class Landing extends Component {
  
  constructor()
  {
      super();
      this.state={"emailId":"abc@gmail.com","password":""}
      this.fnLogin=this.fnLogin.bind(this)
  }

  componentDidMount()
  {
      // AllService.getAllUsers()
      // .then((response)=>
      // {
      //     alert(JSON.stringify(response.data))
      // })
      // .catch((err)=>{
      //     console.log(JSON.stringify(err));
      // })
  }

  fnLogin()
  {
      console.log(this.state);
      UserService.login(this.state)
      .then((response)=>{
          // alert(JSON.stringify(response.data))
         if(response.data.token==='Login failed')
         {
          console.log("You login attempt is failed now..")
          localStorage.removeItem('token')
         } else{
          alert("Token received")
          console.log(response.data.token)
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('email',this.state.emailId)
          var myemail=localStorage.getItem('email')
          console.log(myemail)
          //byEmail
          UserService.findUserByEmail(myemail).then(response=>{
            localStorage.setItem('userList',JSON.stringify(response.data));
            console.log(localStorage.getItem('userList'));
          }).catch(err=>{
            console.log("failed to get By email")
          })
          // window.location = '/dashboard'
          //find user object by username
          UserService.getAllUsers()
          .then((response)=>{
              console.log(response.data);
              localStorage.setItem('user',JSON.stringify(response.data));
          })
          .catch((response)=>{
              console.log(response.data);
          })
          UserService.getAllCategories().then(response=>{
            localStorage.setItem('catList',JSON.stringify(response.data));
            console.log(localStorage.getItem('catList'));
          }).catch(err=>{
            console.log("failed to get all categories");
          })
         
         }
      })
      .catch((err)=>{
         
      })
      
     
  }
  
 
  
  
  render() {
    return (
     <>
     <Container>
        <Container1> <MySidebar/></Container1>
        <Container2>
       
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
 
  
</ul>
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
    <h2 style={{textAlign:"center"}}>Login</h2>
      <hr/><br/>
      <div class="form-outline mb-4">
        <input type="email" name="emailId" class="form-control" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} />
        <label class="form-label" for="loginName">Email</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" name="password" class="form-control" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} />
        <label class="form-label" for="loginPassword">Password</label>
      </div>
     
      <button type="submit" class="btn btn-primary btn-block mb-4" onClick={this.fnLogin()}>Login</button>
          </form>
        </div>
      </div>

      
      
              </Container2>
              </Container>

     </>
    )
  }
}
export default Landing;
