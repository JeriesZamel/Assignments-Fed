import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const imgStyle = {
  borderRadius: "50%",
  width: "150px",
  height: "150px"
};
const menubtnStyle = {
  fontSize: "30px",
  cursor: "pointer"
};
const sidenav={
  position:"absolute",
  marginTop:"55px"
}
 
export default class Header extends React.Component {
  constructor() {
    super();
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("menubtn").style.display = "none";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(() => {
      document.getElementById("menubtn").style.display = "inline";
    }, 500);
  }
  render() {
    return (
      <>
        <div styel={{position:"absolute"}}>
          <span id="menubtn" style={menubtnStyle} onClick={this.openNav}>
            &#9776;
          </span>
          <div id="mySidenav" className="sidenav" style={sidenav}>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.closeNav}
            >
              &times;
            </a>
            <img
              id="userImage"
              src="me.jpeg"
              alt="userImage"
              style={imgStyle}
            />
            <Link to="/" onClick={this.closeNav}>Home</Link>
            <Link to="/Projects" onClick={this.closeNav}>Projects History</Link>
            <Link to="/" onClick={this.closeNav}>Assign To Project</Link>
            <Link to="/" onClick={this.closeNav}>Creat Project</Link>

            {/* <Route path="/add-project" component={AddProject} /> */}
          </div>
        </div>
      </>
    );
  }
}
