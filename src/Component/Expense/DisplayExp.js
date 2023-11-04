import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import UserService from "../../Service/UserService";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

const Div = styled.div`
  width: 440px;
  height: 300px;
`;
const Div1 = styled.div`
  width: 400px;
  height: 220px;
  margin-left: 10px;
  padding: 20px;
`;
const Div2 = styled.div`
  margin-top: -20px;
  height: 320px;
  
  border: 1px solid #ccc;
  padding: 10px;
  background-color: rgb(191, 228, 182);
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
const H3=styled.h3`
  color:rgb(74, 92, 225);
  text-align: center;
  margin-top: -5px;
`

// const data = [
//   ["Category", "Amount"],
//   ["Debt", 11],
//   ["Mfs", 5],
//   ["Stocks", 4],
//   ["Real-estate", 9],
//   ["account", 7],
// ];



const options = {
  title: "Expenses",
  is3D: true,
};

export const DisplayExp = () => {
  const [expense, setExpense] = useState([]);
  // const [bydate,setByDate] =useState();
  // const [cat,setCat]=useState([]);
  // var mydata=JSON.parse(localStorage.getItem('expenseList'))
  // console.log(mydata)
  const data = [
    ["Category", "Value"],
    ...expense.map((item) => [item.category.categoryName, item.amount])
  ];
  useEffect(() => {
    UserService.getAllExpense()
      .then((response) => {
        console.log("ENtered display Expense");
        setExpense(response.data);
        
        // window.location.reload(false)
      })
      .catch((err) => {
        alert("response error");
      });
  }, []);

  // useEffect(() => {

  //     UserService.getCategories().then((response) => {
  //         console.log("ENtered in cats service")
  //         setExpense(response.data)
  //         console.log(expense)

  //     })
  // }, [])
  // UserService.getAllExpensesOrderedByDateDesc().then((response)=>{
  //     try{
  //         setByDate(response.data);
  //     }
  //     catch(err){
  //         console.log("Not able to fetch")
  //     }

  //     console.log("inside Date");
  // },[])

  return (
    <>
      <Div>
        <Div2>
    
          <p style={{ paddingLeft: "10px" }}>
            <H3>Expenses</H3>
          </p>
          {expense.map((expense,i) => (
            <MDBCard
              key={expense.expenseId}
              className="w-100"
              style={{ marginTop: "10px", height: "90px" }}
            >
              <MDBCardBody>
                <h6>
                 {i+1}  .  {expense.category.categoryName} .  Id:{expense.expenseId}
                </h6>
                <p>
                  {expense.expenseName} - ({expense.comments})
                  
                   <p>Date: {expense.date}</p>
                   <Button style={{marginLeft:"280px",marginTop:"-140px"}}>Rs.{expense.amount}</Button>  
                </p>
                <p></p>
              </MDBCardBody>
            </MDBCard>
          ))}
          {/* <div class="card text-center" style={{maxHeight:"200px"}}>
            <div class="card-header">Category: Food</div>
            <div class="card-body" style={{display:"flex"}}>
             
              <button class="btn btn-primary" style={{float:"right",marginRight:"20px",borderRadius:"1.5rem",maxHeight:"40px"}}>
                Rs 2000
              </button>
            </div>
            <div class="card-footer text-body-secondary">2 days ago</div>
          </div> */}
        </Div2>
<hr/>
        <Div1>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"200px"}
        style={{borderRadius:"1rem",marginTop:"-5px"}}
        legendToggle // Enable the legend toggle button
        
      />
      
        </Div1>
      </Div>
    </>
  );
};
