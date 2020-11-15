import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FormspreeProvider } from '@formspree/react';

import NavTabs from "./components/NavTabs";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
