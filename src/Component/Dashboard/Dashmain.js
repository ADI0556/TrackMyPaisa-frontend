import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
// import im from "../../Component/logo.svg";
// import { Chart } from "react-google-charts";
// import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import UserService from "../../Service/UserService";
import image from "../Images/user.png";
import Report from "./Report";

const Container = styled.div`
  display: flex;
`;
const P1 = styled.p`
  flex: 1;
  margin-left: 10px;
  margin-top: -5px;
`;
// const P2=styled.p`
// text-shadow: 2px;
// float: left;
// `

const Image = styled.img`
  width: 30px;
  height: 40px;
`;
const Div = styled.div`
  display: flex;
`;
const Div2 = styled.div`
  width: 220px;
  height: 570px;
  margin-top: 10px;
  background-color: white;
  border-radius: 1.5rem;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Div3 = styled.div`
  width: 500px;
  height: 60px;
  margin-top: 10px;
  background-color: rgb(208, 238, 185);
  border-radius: 1.5rem;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Container1 = styled.div`
  display: flex;
  width: 550px;
  height: 280px;
  margin-top: 10px;
  background-color: white;
  border-radius: 1.5rem;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Container3 = styled.div`
  float: right;
  width: 550px;
  margin-top: 300px;
  background-color: white;
  margin-left: -550px;
  height: 280px;
  padding: 10px;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Container4 = styled.div`
  width: 230px;
  margin-left: 10px;
  margin-top: 10px;
  height: 95vh;
  background-color: white;
  padding: 10px;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: rgb(11, 169, 19);
  color: white;
  border-radius: 0.5rem;
  margin-left: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
const Button2 = styled.button`
  width: 160px;
  height: 40px;
  background-color: rgb(11, 169, 19);
  color: white;
  border-radius: 0.5rem;
  margin-left: 10px;
  margin-top: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
const Div4 = styled.div`
  width: 205px;
  height: 160px;
  border-radius: 1.5rem;
  padding: 10px 10px 10px 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(181, 170, 209);
`;
const Ul = styled.ul`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
const Li = styled.li`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background-color: rgb(181, 170, 209);
`;
const Img = styled.img`
  width: 110px;
  height: 130px;
  margin-top: 5px;
  margin-left: 45px;
  border-radius: 2rem;
  border: 1px solid;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 3px;
`;

function Dashmain(props) {
  // const [value, setValue] = useState(new Date());

  const [user, setUser] = useState([]);
  const [expense, setExpense] = useState([
    {
      expenseId: "",
      expenseName: "",
      amount: 0,
      date:new Date().toISOString().split('T')[0],
      comments: "",
      category: {
        categoryId: 0,
        categoryName: "",
      },
      users: {
        userId: user.userId,
        name: user.name,
        emailId: user.emailId,
      },
    },
  ]);
const [details,setDetails]=useState({net:282000,mear:45000,msav:7000});
const [monthly,setMonthly]=useState({may:12,jun:12,jul:12,aug:12,sep:12,oct:12})
  useEffect(() => {
    let email = localStorage.getItem("email");
    UserService.findUserByEmail(email)
      .then((response) => {
        console.log("Finding email");
        setUser(response.data);
        localStorage.setItem("myUser", user);
      })
      .catch((err) => {
        alert("response error");
      });
    UserService.getAllExpense()
      .then((response) => {
        setExpense(response.data);
        console.log(expense);
      })
      .catch((err) => {
        alert("fetching prob");
      });

      
  }, []);

  const data = [
    {
      name: "1st",
      uv: 1500,
      pv: 2000,
      amt: 2000,
    },
    {
      name: "5th",
      uv: 2000,
      pv: 2500,
      amt: 3000,
    },
    {
      name: "10th",
      uv: 5000,
      pv: 3000,
      amt: 8000,
    },
    {
      name: "15th",
      uv: 2000,
      pv: 4000,
      amt: 4000,
    },
    {
      name: "20th",
      uv: 2500,
      pv: 1500,
      amt: 2122,
    },
    {
      name: "25th",
      uv: 2200,
      pv: 2100,
      amt: 2500,
    },
    {
      name: "30th",
      uv: 2900,
      pv: 2400,
      amt: 2100,
    },
  ];
  const data2 = Object.keys(monthly).map((label) => ({
    label: label,
    expenses: monthly[label],
    salary: 45
  }));
  // const data2 = [
  //   { label: "may", expenses:32, salary: 56 },
  //   { label: "jun", expenses: 35, salary: 79 },
  //   { label: "jul", expenses: 55, salary: 97 },
  //   { label: "aug", expenses: 51, salary: 60 },
  //   { label: "sep", expenses: 41, salary: 63 },
  //   { label: "oct", expenses: 47, salary: 71 },
  // ];
  
  
  /* const data3 = [
    { name: "Food", value: 4000, fill: "#0088FE" },
    { name: "Food", value: 4000, fill: "#1088FE" },
    { name: "Transport", value: 2500, fill: "#00C49F" },
    { name: "Entertainment", value: 3000, fill: "#FFBB28" },
    { name: "Hospital", value: 3000, fill: "#FF8042" },
    { name: "dailyExp", value: 5000, fill: "#FFC49F" },
  ]; */
  console.log("value");
  console.log(expense, "Inside dashmain  ");
  const data3 = [
    { category: "Category", value: "Value", fill: "" },
    ...expense.map((item) => ({
      category: item.category.categoryName,
      value: item.amount,
    })),
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#975c72', '#cd72b4', '#6f60c1', '#5cc550', '#a8c53f', '#e79154'];

  const combinedData = data3.reduce((accumulator, current) => {
    const existingItem = accumulator.find((item) => item.category === current.category);
    if (existingItem) {
      existingItem.value += current.value;
    } else {
      accumulator.push({ category: current.category, value: current.value });
    }
    return accumulator;
  }, []);
  console.log("combine", combinedData)

  const categoryColors = {
    Food: "#0088FE",
    Rent: "orange",
    Clothing: "#5a889c",
    Entertainment: "#bd77ac",
    Hospital: "#68e399",
    dailyExp: "#cdd737",

  };
  const data4 = data3.map((item) => ({
    ...item,
    fill: categoryColors[item.category],
  }));

  console.log(data4);
  // const aggregatedData = data.reduce((acc, data4) => {
  //   if (!data4.category || !data4.category.categoryName) {
  //     return acc; // Skip this entry if it doesn't have a valid category
  //   }

  //   const categoryname = data4.category.categoryName;
  //   const amount = data4.value; // Assuming the value property contains the amount

  //   if (!acc[categoryname]) {
  //     acc[categoryname] = 0;
  //   }
  //   acc[categoryname] += amount;

  //   return acc;
  // }, {});

  /* console.log(aggregatedData); */

  /* const data3 = [
  
  const options = {
    title: "Expenses",
    fill:["#0088FE","#00C49F","#FFBB28","#FF8042","#FFC49F"],
    is3D: true,
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  }
     /* return (
       <text
         x={x}
         y={y}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
       >
         {`${(percent * 100).toFixed(0)}%`}
       </text>
     );
   }; */
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;

    const style = {
      color: color,
      fontWeight: 'bold',
      marginRight: '5px', // Adjust as needed
      display: 'inline-block',
    };

    return (
      <span style={style}>
        {value}
      </span>
    );
  };

  // let high=localStorage.getItem('ExpenseList')
  // console.log('high:',high)
  //   let highestAmount= 0;
  //   let highestCategory = null;
  //   for (const item of high) {
  //     if (item.amount > highestAmount) {
  //       highestAmount = item.amount;
  //       highestCategory = item.category.categoryName;
  //     }
  //   }


  // const toggleModal = () => {
  //   this.setState((prevState) => ({
  //     isModalVisible: !prevState.isModalVisible,
  //   }));
  // };
  const uniqueCategories = new Set(data3.map((entry) => entry.category));
  const uniqueData = Array.from(uniqueCategories);

  const sortedExpenseList = expense.sort((a, b) => b.amount - a.amount);
// Select the first two elements (highest amounts)
const highestAmounts = sortedExpenseList.slice(0, 2);
// Extract expense names from the highest amounts
const highestAmountsWithNames = highestAmounts.map(item => ({
  expenseName: item.category.name,
  amount: item.amount,
}));
console.log(expense)
console.log("expense")
console.log(highestAmountsWithNames,"highest twooooo")

  return (
    
    <>
      <Div>
        <Col style={{ marginLeft: "-10px" }}>
          <Row>
            <Div2>
              <Img src={image} />
              <br />
              <hr />
              <Container>

                <P1>
                  <AccountBalanceWalletTwoToneIcon fontSize="large" /><h7> Net Worth</h7>
                  <h5 style={{ marginLeft: "30px", fontSize:"16px"}}>Rs.{details.net}</h5>
                </P1>
              </Container>

              <Container>

                <P1>
                  <PaidTwoToneIcon fontSize="large" /> <h7>Monthly Earnings</h7>
                  <h5 style={{ marginLeft: "30px",fontSize:"16px" }}>Rs.{details.mear}</h5>
                </P1>
              </Container>

              <Container>

                <P1>
                  <AnalyticsTwoToneIcon fontSize="large" /><h7>Monthly spends</h7>
                  <h5 style={{ marginLeft: "30px" ,fontSize:"16px"}}>  Rs.{expense.reduce((total, item) => total + item.amount, 0)}</h5>
                </P1>
              </Container>

              <Container>

                <P1>
                  <SavingsTwoToneIcon fontSize="large" />  <h7>Monthly savings</h7>
                  <h5 style={{ marginLeft: "30px",fontSize:"16px" }}>Rs.{details.msav}</h5>
                </P1>
              </Container>
              {/* <Button className="btn btn-info">Add Details</Button> */}
              <Button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Add Details
              </Button>
              
              <br/>
              <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form id="login-form">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5 d-flex align-items-center">
                           User Details
                        </h1>
                        <button type="reset" className="btn-close shadow-none" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        
                        <div className="mb-3">
                          <label className="form-label fw-bold">
                             Net Worth
                          </label>
                          <input type="number" name="net" required className="form-control shadow-none" value={details.net} onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setDetails({
                                                                     ...details,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder='Net Worth'
                             />
                        </div>
                        <div className="mb-4">
                          <label className="form-label fw-bold">
                             Monthly Earnings
                          </label>
                          <input type="number" name="mear" required className="form-control shadow-none" value={details.mear} onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setDetails({
                                                                     ...details,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Earnings"
                             />
                        </div>
                        <div className="mb-4">
                          <label className="form-label fw-bold">
                             Monthly Sav.
                          </label>
                          <input type="number" name="msav" required className="form-control shadow-none" value={details.msav} onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setDetails({
                                                                     ...details,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <button type="button" className="btn btn-dark shadow-none "  >
                            Add Details
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>



              <Button2
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal2"
              >
                Add M.Expenses
              </Button2>
              <div className="modal fade" id="loginModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form id="login-form">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5 d-flex align-items-center">
                           Enter last 6 months expenses
                        </h1>
                        <button type="reset" className="btn-close shadow-none" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        
                        <div className="mb-3">
                         Month 1
                          <input type="number" name="may" value={monthly.may} required className="form-control shadow-none" onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder='Monthly Spent'
                             />
                        </div>
                        <div className="mb-2">
                        Month 2
                          <input type="number" name="jun" value={monthly.jun} required className="form-control shadow-none"  onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                        <div className="mb-2">
                        Month 3
                          <input type="number" name="jul" value={monthly.jul} required className="form-control shadow-none"  onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                        <div className="mb-2">
                        Month 4
                          <input type="number" name="aug" value={monthly.aug} required className="form-control shadow-none"  onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                        <div className="mb-2">
                        Month 5
                          <input type="number" name="sep" value={monthly.sep} required className="form-control shadow-none"  onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                        <div className="mb-2">
                        Month 6
                          <input type="number" name="oct" value={monthly.oct} required className="form-control shadow-none"  onChange={(event) => {
                                                                   const { name, value } = event.target;
                                                                        setMonthly({
                                                                     ...monthly,
                                                                           [name]: value,
                                                                                });
                                                      }} placeholder="Monthly Spent"
                             />
                        </div>
                       
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <button type="button" className="btn btn-dark shadow-none"  data-bs-dismiss="modal" >
                            Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
             
            </Div2>
          </Row>
        </Col>
        <Container1>
          <h4 style={{ paddingLeft: "10px", fontSize:"20px"}}>Expenses</h4>

          <div className="row div1">
            <div className="col-md-12">
              {/* <h2>Charts with recharts library</h2> */}
            </div>

            <div className="section col-md-6">
              <h6
                className="section-title"
                style={{ marginTop: "35px",marginLeft:"-40px" }}
              >
                Monthly comparison
              </h6>
              <div className="section-content" style={{marginLeft:"-120px" }}>
                <ResponsiveContainer width="98%" height={200}>
                  <AreaChart
                    width={600}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#8884d8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#82ca9d"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#82ca9d"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#82ca9d"
                      fillOpacity={1}
                      fill="url(#colorPv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="section col-md-6">
              <h6
                className="section-title"
                style={{ marginTop: "35px", marginLeft: "10px" }}
              >
                Last 6 Months expense
              </h6>
              <div className="section-content" style={{ marginLeft: "-50px" }}>
                <ResponsiveContainer width="100%" height={210}>
                  <BarChart
                    data={data2}
                    margin={{ top: 15, right: 0, bottom: 0, left: -30 }}
                  >
                    <XAxis dataKey="label" />
                    <YAxis />
                    {/* <CartesianGrid stroke="#ccc" /> */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="expenses" fill="#FB8833" />
                    <Bar dataKey="salary" fill="#17A8F5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Container1>
        <br />
        <hr />
        {/* <Container1>Hello</Container1> */}
        <Container3>
          <h4>Goals</h4>
          <Div3 className="container">
            <h6>House</h6>
            <ProgressBar striped variant="success" style={{ height: "8px" }} now={30} />
          </Div3>
          <Div3 className="container">
            <h6>Car</h6>
            <ProgressBar striped variant="success" style={{ height: "8px" }} now={70} />
          </Div3>
          <Div3 className="container">
            <h6>Investment</h6>
            <ProgressBar striped variant="success" style={{ height: "8px" }} now={10} />
          </Div3>
        </Container3>
        <Container4>
          <h5 style={{fontSize:"15px"}}> Category-wise Spends</h5>
          {/* <PieChart width={220} height={220}>
            <Pie data={data3} nameKey="name" dataKey="value" outerRadius={80}
            startAngle={90} endAngle={-270} innerRadius={30} label={renderCustomizedLabel} />
        </PieChart> */}
          <PieChart width={200} height={200}>
            <Pie
              data={combinedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              startAngle={90}
              endAngle={-270}
              innerRadius={50}
              outerRadius={80}
            // dataKey="value"
            >
              {data3.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              height={42}

              iconType="diamond"
              layout="horizontal"
              verticalAlign="bottom"
              iconSize={8}
              payload={uniqueData.map((category, index) => ({
                value: category,
                type: 'diamond',
                color: COLORS[index % COLORS.length],
              }))}
            />
          </PieChart>
          <br />
          <Report data={expense} />
          <hr />

          <Div4>

            Highest Spends:
            <hr />
            <Ul className="list-group">
              <Li className="list-group-item d-flex justify-content-between align-items-center">
                Rent
                <span className="badge bg-primary rounded-pill">Rs.12000</span>
              </Li>
              <Li className="list-group-item d-flex justify-content-between align-items-center">
                Food
                <span className="badge bg-primary rounded-pill">Rs.4600</span>
              </Li>
            </Ul>
          </Div4>
        </Container4>
      </Div>
    </>
  );
}

export default Dashmain;
