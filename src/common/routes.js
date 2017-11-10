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
import IndependentPage from "./components/independent";
import StandardPage from "./components/standard";
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
      <Route path="/portfolio">
          <IndexRoute component={PortfolioPage}/>
          <Route path="independent" component={IndependentPage} />
          <Route path="evening-standard" component={StandardPage} />
          <Route path="ebay" component={EbayPage} />
          <Route path="stub-hub" component={StubHubPage} />
          <Route path="kurt-geiger" component={KurtGeigerPage} />
          <Route path="shell" component={ShellPage} />
          <Route path="tradefair" component={TradefairPage} />
          <Route path="betvictor" component={BetVictorPage} />
          <Route path="lcg" component={LCGPage} />
          <Route path="the-smalls" component={TheSmallsPage} />
      </Route>
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
); 
