import React from 'react'
import Users from './randomUsers.json'
import {Route, Link} from 'react-router-dom'

export default React.createClass ({
	
	getInitialState: function(){
		return{
			user: Users.filter(function(value){
				return Number(value.id) === Number(this.props.match.params.id)
			}.bind(this))[0]
		}
	},

  render: function(){
    return(
      <div>
        <ul>
        	<li>
	        	<div>
	        		<img src={this.state.user.picture.large} alt='#'/>
	        	</div>
        	</li>
        	<li>{this.state.user.name.first + ' ' + this.state.user.name.first}</li>
        	<li>{this.state.user.email}</li>
        	<li>{this.state.user.cell}</li>
        	<li>{this.state.user.location.city + ', ' + this.state.user.location.state}</li>
        </ul>


      </div>
    )
  }
})