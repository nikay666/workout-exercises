import React from 'react';
import './App.scss';
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
import { IMenuItem } from './types/Menu';


export const menuItems: IMenuItem[] = [
  {
    id: 0,
    title: 'Home Page',
    link: '/home',
    icon: 'home',
  },
  {
    id: 1,
    title: 'Calendar',
    link: '/calendar',
    icon: 'date_range'
  },
  {
    id: 2,
    title: 'Timer',
    link: '/timer',
    icon: 'timer'
  },
  {
    id: 3,
    title: 'Workouts list',
    link: '/workouts',
    icon: 'fitness_center'
  },
  {
    id: 4,
    title: 'Exercises list',
    link: '/exercises',
    icon: 'format_list_bulleted'
  },
  {
    id: 5,
    title: 'Settings',
    link: '/settings',
    icon: 'settings'
  }
]




function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
      <div className="App">
        <PersistentDrawerLeft titles={menuItems}>
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

