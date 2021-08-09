import React,{useState} from "react";
import "./style.css";
import {useLocation} from "react-router-dom"
function Footer() {
  let location = useLocation();
 const footerText = location.pathname.substring(1)
  return (
    <footer className=" navbar-dark bg-dark size" >
  <div >
  <p className="d-flex justify-content-center">{footerText} </p>
    <p className="d-flex justify-content-center">&copy; 2021 Koffi Danhounsrou</p>
  </div>
</footer>
  );
}

export default Footer;
