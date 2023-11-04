import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Expensecal from './Expense/Expensecal'
import Landing from './Landing'
import MySidebar from './Dashboard/MySidebar'
import SetgoalCal from '../SetGoal/SetgoalCal'
import Spendings from './SpendAnalytics/Spendings'
import Subcription from './Subcription'
import Display from './OurRecomends/Display'
import MyService from '../Service/MyService'
import Home from '../Component/Landing/Home.js'
function Main() {
  return (
    <>

      <Router>
        <Routes>
          {/* <Route path="/" element={<Landing/>}></Route> */}
          {/* <Route path='/land' element={<Landing />} />\ */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/addexpense' element={<Expensecal />}></Route>
          <Route path='/setGoal' element={<SetgoalCal />}></Route>
          <Route path='/subscribe' element={<MyService />}></Route>
          <Route path='/spendings' element={<Spendings />}></Route>
          <Route path='/recomendations' element={<Display />}></Route>
          <Route path="/" exact element={<Home />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </>



  )
}

export default Main