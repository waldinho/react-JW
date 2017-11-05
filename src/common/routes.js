import { Route } from "react-router";
import React from "react";
import { IndexRoute } from 'react-router';

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import ServicesPage from "./components/Services";
import LCGPage from "./components/LCG";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="portfolio">
          <IndexRoute component={PortfolioPage}/>
          <Route path="lcg" component={LCGPage} />
      </Route>      
      <Route path="services" component={ServicesPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
