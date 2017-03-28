import React from 'react'
import Users from './randomUsers.json'

export default React.createClass ({


  render: function(){
    return(
      <div>
        <ul>
        	{Users.map(function(userInfo){
        		return <li key={'i' + userInfo.id}><img src={userInfo.picture.large} alt='#'/></li>
        	})}
        </ul>


      </div>
    )
  }
})