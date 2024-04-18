import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CurrentData from './pages/current-data';
import HistoryData from './pages/history-data';
import Home from './pages/home';
import { initRem } from './utils/rem';
import { ThemeProvider } from './context/ThemeContext'
initRem(1920);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/current" component={CurrentData} />
          <Route exact path="/history" component={HistoryData} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
