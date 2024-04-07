import React from "react";
import Topnav from "./Components/Topnav";
import Fetaure from "./Components/Fetaure";
import Deliver from "./Components/Deliver";
import Toppicks from './Components/Toppicks'
import Meal from "./Components/Meal";
import Categories  from "./Components/Categories";
import NewsLetter from './Components/Newletter'
import Footer from './Components/Footer'

function App() {
  return (
 <>
  <Topnav />
  <Fetaure/>
  <Deliver/>
  <Toppicks/>
  <Meal/>
  <Categories/>
  <NewsLetter/>
  <Footer/>
 </>
  );
}

export default App;
