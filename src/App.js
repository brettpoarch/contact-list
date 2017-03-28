import React from 'react'
import Home from './home'
import About from './about'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'


export default React.createClass ({
  render: function(){
    return(
        <BrowserRouter>
          <div>
           
            <Route exact={true} path='/' component={Home} />
            <Route path='/about/:id' component={About} />

          </div>
        </BrowserRouter>
    )
  }
})

