import React from 'react'
import Home from './home'
import About from './about'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'


export default React.createClass ({
  render: function(){
    return(
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
            
            <Route exact={true} path='/' component={Home} />
            <Route path='/about/:id' component={About} />

          </div>
        </BrowserRouter>
    )
  }
})