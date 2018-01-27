import { Route } from "react-router";
import React from "react";
import { IndexRoute } from 'react-router';

import App from "./containers/App";

//Redux Smart

import HomePage from "./containers/HomePage";

//Redux Dumb
import PortfolioPage from "./components/Portfolio";
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import IndependentPage from "./components/independent";
import StandardPage from "./components/standard";
import StandardAfterPage from "./components/standard-after";
import EbayPage from "./components/ebay";
import StubHubPage from "./components/stub-hub";
import KurtGeigerPage from "./components/kurt-geiger";
import ShellPage from "./components/shell";
import TradefairPage from "./components/tradefair";
import BetVictorPage from "./components/betvictor";
import LCGPage from "./components/LCG";
import TheSmallsPage from "./components/the-smalls";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="/home" component={HomePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      {/* <Route path="/portfolio"> */}
          {/* <IndexRoute component={PortfolioPage}/> */}
          <Route path="portfolio/independent" component={IndependentPage} />
          <Route path="portfolio/evening-standard" component={StandardPage} />
          <Route path="portfolio/evening-standard-after" component={StandardAfterPage} />
          <Route path="portfolio/ebay" component={EbayPage} />
          <Route path="portfolio/stub-hub" component={StubHubPage} />
          <Route path="portfolio/kurt-geiger" component={KurtGeigerPage} />
          <Route path="portfolio/shell" component={ShellPage} />
          <Route path="portfolio/tradefair" component={TradefairPage} />
          <Route path="portfolio/betvictor" component={BetVictorPage} />
          <Route path="portfolio/lcg" component={LCGPage} />
          <Route path="portfolio/the-smalls" component={TheSmallsPage} />
      {/* </Route> */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
); 
