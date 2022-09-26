import React from 'react'


function Nav(){
    return(
      <div>
         <nav className='nav'>
           <img src='https://reactjs.org/logo-og.png' width='100px'/>
         <ul className='nav-items'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
        </nav>
      </div>
    )
  }
  export default Nav;