import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from '../component/Home';
import About from '../component/About';
import Contact from '../component/Contact';
import Gallery from '../component/Gallery';
import Service from '../component/Service';
import Animal from '../component/Animal';
import Architecture from '../component/Architecture';
import People from '../component/People';
import Sport from '../component/Sport';
import Travel from '../component/Travel';
import Others from '../component/Others';
import Nature from '../component/Nature';
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';
import NatureDetails from '../component/NatureDetails';
import AnimalDetails from '../component/AnimalDetails';

export class Header extends Component {

  constructor(){
    super();
    this.state={
      web_name:"...",
      facebook:"...",
      instagram:"...",
      linkedin:"...",
      copyright:"...",
    }

  }
componentDidMount() {
  RestClient.GetRequest(AppUrl.CommonPage)
    .then((result) => {
      console.log(result); // Add this line to check the structure of the result
      this.setState({ web_name: result[0]['web_name'], facebook: result[0]['facebook'], instagram: result[0]['instagram'], linkedin: result[0]['linkedin'], copyright: result[0]['copyright']});
    })
    .catch((error) => {
      this.setState({ web_name: "???", facebook: "???", instagram: "???", linkedin: "???", copyright: "???"});
    });
}




  render() {
    return (
      <div>


<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
       
     <img src="assets/img/logo.png" alt=""/> 
        <i class="bi bi-camera"></i>
        <h1>{this.state.web_name}</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
          <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li class="dropdown"><Link to="/gallery">Gallery </Link>
            <ul>
              <li><Link to="/nature">Nature</Link></li>
              <li><Link to="/travel">Travel</Link></li>
              <li><Link to="/animal">Animal</Link></li>
              <li><Link to="/architecture">Architecture</Link></li>
              <li><Link to="/sport">Sport</Link></li>
              <li><Link to="/people">People</Link> </li>
              <li><Link to="/others">Others</Link></li>
            </ul>
          </li>
          <li>
          <Link to="/service">Service</Link>
            </li>
          <li>
          <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>

      <div class="header-social-links">
        <a href="" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href={this.state.facebook} class="facebook"><i class="bi bi-facebook"></i></a>
        <a href={this.state.instagram} class="instagram"><i class="bi bi-instagram"></i></a>
        <a href={this.state.linkedin} class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>

  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service" element={<Service />} /> 
            <Route path="/animal" element={<Animal />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/people" element={<People />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/Travel" element={<Travel />} />
            <Route path="/others" element={<Others />} />
            <Route path="/nature" element={<Nature />} />
         
            <Route path="/animaldetails" element={<AnimalDetails/>} />  
            
            <Route path="/naturedetails/:id" element={<NatureDetails  />} />
           
            
            
          
  </Routes>


      </div>
    )
  }
}

export default Header