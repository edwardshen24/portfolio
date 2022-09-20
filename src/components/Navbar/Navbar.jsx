import React from 'react';
import './Navbar.css';

// put links to stuff on the top 
const Navbar = () => {
  return (
    <div className = "navbar">
        <div className = "navbar_home">Home</div>
        <div className = "navbar_education">Education</div>
        <div className = "navbar_projects">Projects</div>
        <div className = "navbar_skills">Skills</div>
    </div>
  )
}

export default Navbar