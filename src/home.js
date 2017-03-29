import React from 'react'
import Users from './randomUsers.json'
import { Link } from 'react-router-dom'



export default React.createClass ({


  render: function(){
    return(
      <div className='container'>
        <h1>My Peeps</h1>
        <ul>
        	{Users.map(function(userInfo){
        		return <li key={'i' + userInfo.id}>
                    <div className='userList'>
                      <Link to={"/about/" + userInfo.id}><img src={userInfo.picture.thumbnail} alt='#'/>
                        <p>{userInfo.name.first}  {userInfo.name.last}</p>
                      </Link>
                    </div>
                   </li>
        	})}
        </ul>


      </div>
    )
  }
})