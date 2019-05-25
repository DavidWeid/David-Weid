import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import "./App.scss";

import { HomePage, ContactPage, WorksPage, AboutPage } from "./pages";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <HashRouter basename="/portfolio">
      <Route
        render={({ location }) => {
          return (
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={500}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/works" component={WorksPage} />
                    <Route path="/about" component={AboutPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
    </HashRouter>
  );
}

export default App;