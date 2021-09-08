import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { VFXProvider } from 'react-vfx';
import "../src/components/Contact/Function"
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
 import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
// import RestaurantRoulette from "./components/RestaurantRoulette";
// import WorkPlanner from "./components/WorkPlanner";
// import WeatherTracker from "./components/WeatherTracker";
// import CodingQuiz from "./components/CodingQuiz";
// import PasswordGenerator from "./components/PasswordGenerator";
// import BurgerLogger from "./components/BurgerLogger";
// import JobAid from "./components/JobAid";
// import NoteTaker from "./components/NoteTaker";
// import Experiences from "./components/Experiences";
// import Skills from "./components/Skills";
// import Educations from "./components/Educations";
// import Contact from "./components/Contact";
// import Voyagr from "./components/Voyagr";
function App() {
  return (
    <Router>
       <VFXProvider>
      <div>
        {/* <Header/> */}
        {/* <Navbar /> */}
        <Wrapper>
        <Route exact path="/Welcome" component={Welcome} />
        {/* <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/Experiences" component={Experiences} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Educations" component={Educations} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/restaurantRoulette" component={RestaurantRoulette} />
          <Route exact path="/workPlanner" component={WorkPlanner} />
          <Route exact path="/weatherTracker" component={WeatherTracker} />
          <Route exact path="/codingQuiz" component={CodingQuiz} />
          <Route exact path="/passwordGenerator" component={PasswordGenerator} />
          <Route exact path="/burgerLogger" component={BurgerLogger} />
          <Route exact path="/jobAid" component={JobAid} />
          <Route exact path="/noteTaker" component={NoteTaker} />
          <Route exact path="/voyagr" component={Voyagr} /> */}
        </Wrapper>
        
        {/* <Footer /> */}
      </div>
      </VFXProvider>
    </Router>
  );
}

export default App;
