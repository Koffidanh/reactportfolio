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

function App() {
  return (
    <Router>
       <VFXProvider>
      <div>
      {/* <Navbar /> */}
        <Wrapper>
        <Route exact path="/Welcome" component={Welcome} />
                </Wrapper>
        
        {/* <Footer /> */}
      </div>
      </VFXProvider>
    </Router>
  );
}

export default App;
