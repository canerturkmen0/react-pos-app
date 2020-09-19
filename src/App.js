import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppProvider } from './AppContext';
import './css/reset.css';
import './App.css';
import './css/main.css';
import './css/header.css';
import './css/submenu.css';
import Home from './pages/home';
import MenuType from './pages/menutype';
import Success from './pages/success';
import SubMenu from './pages/submenu';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menutype' component={MenuType} />
            <Route exact path='/success' component={Success} />
            <Route exact path='/submenu' component={SubMenu} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
