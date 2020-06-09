import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Home from './Home';
import MenuTabs from './MenuTabs';
import Skills from './Skills';

const home = () => <Home />;
const skills = () => <Skills />;

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

export default function Pages() {
  return (
    <BrowserRouter>
      <MenuTabs />
      <Container>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: bounce(1) }}
          className="switch-wrapper"
        >
          <Route exact path="/portfolio" component={home} />
          <Route path="/portfolio/skills" component={skills} />
        </AnimatedSwitch>
      </Container>
    </BrowserRouter>
  );
}
