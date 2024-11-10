import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HoroscopeCard from './components/horoscopecardard';
import ZodiacCompatibility from './components/zodiacCompatibility';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div className="home">
            <h2>Welcome to AstroGeeks</h2>
            <HoroscopeCard
              sign="Aries"
              description="Today you will find peace and clarity."
              date="October 23, 2024"
            />
          </div>
        </Route>
        <Route path="/horoscope">
          <HoroscopeCard
            sign="Taurus"
            description="Expect some challenges in relationships today."
            date="October 23, 2024"
          />
        </Route>
        <Route path="/compatibility" component={ZodiacCompatibility} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
