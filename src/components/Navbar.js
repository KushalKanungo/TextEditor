import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

  // let appName="Text Editor" 
  const [active, setActive] = useState({
    home: "active",
    about: "" 
  })

   const setAbout=()=>{
     setActive({
       home: "",
       about: "active"
     })
   }

   const setHome=()=>{
    setActive({
      home: "active",
      about: "home"
    })
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={setHome} to="/">{props.companyName}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${active.home}`} aria-current="page" onClick={setHome} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${active.about}`} to="/about" onClick={setAbout} >About</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className ={`form-check-label text-${props.mode==='light' ? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='dark' ? 'Light': 'Dark'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
