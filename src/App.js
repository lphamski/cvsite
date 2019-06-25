import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faHome)

function App() {

  
  return (
    <BrowserRouter>
    <Navbar/>
      
        <div className="App">
          <AnimatedSwitch atEnter={{ opacity: 0.5 }}
                          atLeave={{ opacity: 0 }}
                          atActive={{ opacity: 2 }}>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          </AnimatedSwitch>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
