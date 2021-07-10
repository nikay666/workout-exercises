import React from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Timer } from './components/Timer/'
import TopAppBar from './components/TopAppBar/TopAppBar'
import PersistentDrawerLeft from './components/PersistentDrawerLeft/PersistentDrawerLeft'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import TimerPage from './pages/TimerPage';
import ExercisesPage from './pages/ExercisesPage';
import SettingsPage from './pages/SettingsPage';
import { WorkoutsPage } from './pages/WorkoutsPage';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
      <div className="App">
        <PersistentDrawerLeft>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/calendar' component={CalendarPage} />
          <Route  path='/timer' component={TimerPage} />
          <Route  path='/workouts' component={WorkoutsPage} />
          <Route  path='/exercises' component={ExercisesPage} />
          <Route  path='/settings' component={SettingsPage} />
        </Switch>
        </PersistentDrawerLeft>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

