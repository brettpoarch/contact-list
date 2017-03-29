import React from 'react'
import Users from './randomUsers.json'

export default React.createClass ({
	
	getInitialState: function(){
		return{
			user: Users.filter(function(value){
				return Number(value.id) === Number(this.props.match.params.id)
			}.bind(this))[0]
		}
	},

	handleClick: function(e){
		e.preventDefault()
		this.props.history.goBack()
	},

  render: function(){
    return(
      <div>
        <ul>
        	<li>
	        	<div className='main'>
	        		<button className='back' onClick={this.handleClick}><i className='fa fa-long-arrow-left'></i></button>
	        		<img className='mainImg' src={this.state.user.picture.large} alt='#'/>
	        	</div>
        	</li>
	        <li className='mainInfo'>
	        	<div><i className='fa fa-user'></i> {this.state.user.name.first} {this.state.user.name.last}</div>
	        	<div><i className='fa fa-envelope'></i> {this.state.user.email}</div>
	        	<div><i className='fa fa-mobile'></i> {this.state.user.cell}</div>
	        	<div><i className='fa fa-globe'></i> {this.state.user.location.city + ', ' + this.state.user.location.state}</div>
        	</li>
        </ul>


      </div>
    )
  }
})