import React from 'react'
import {Navbar,Container, NavLink} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar -${props.mode} bg-${props.mode}`}>
    <Container className='mt-2'>
    <Navbar.Brand><a className={`link-cs text-${props.mode==='light'?'dark':'light'}`} href="#">Text Utilize</a></Navbar.Brand>
        {/* <NavLink ><Link to="">Base</Link></NavLink>
        <NavLink ><Link to="/Home">Home</Link></NavLink> */}
        {/* <NavLink > */}
          {/* <Link className={`link-cs mx-4 text-${props.mode==='light'?'dark':'light'}`} to="/Create">Create</Link> 
         <Link className={`link-cs mx-4 text-${props.mode==='light'?'dark':'light'}`} to="/Api" >Display </Link></NavLink> */}
         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
          {/* <Link className="link-cs" to="/Api" >Display </Link> */}
    </Container>
    
  </nav>
  </>
  )
}
