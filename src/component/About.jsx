import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';
import { Link } from 'react-router-dom';

export class About extends Component {


  constructor(){
    super();
    this.state={
      about_title:"...",
      about_description:"...",
      about_intro:"...",
      about_image:"...",
      birthday:"...",
      website:"...",
      phone:"...",
      city:"...",
      age:"...",
      degree:"...",
      email:"...",
      freelance:"...",
      about_longdescription:"...",
    }

  }
componentDidMount() {
  RestClient.GetRequest(AppUrl.About)
    .then((result) => {
      console.log(result); // Add this line to check the structure of the result
      this.setState({about_title: result[0]['about_title'], about_description: result[0]['about_description'], about_intro: result[0]['about_intro'], about_image: result[0]['about_image'], birthday: result[0]['birthday'], website: result[0]['website'], phone: result[0]['phone'], city: result[0]['city'], age: result[0]['age'], degree: result[0]['degree'], email: result[0]['email'], freelance: result[0]['freelance'], about_longdescription: result[0]['about_longdescription']});
    })
    .catch((error) => {
      this.setState({ about_title: "???", about_description: "???", about_intro: "???", about_image: "???", birthday: "???", website: "???", phone: "???", city: "???", age: "???", degree: "???", email: "???", freelance: "???", about_longdescription: "???"});
    });
}




  render() {

    var settings = {
      autoPlaySpeed:3000,
      autoPlay:true,
      dots: true,
      infinite: true,
      speed: 3000,
      arrows:false,
      vertical:true,
      verticalSwiping:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    
    return (
      <div>


<main id="main" data-aos="fade" data-aos-delay="1500">


<div class="page-header d-flex align-items-center">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
        <h2>About</h2>
        <p> {this.state.about_description} </p>

        <Link to={"/contact"} class="btn btn-success">Available for hire</Link>

      </div>
    </div>
  </div>
</div>


<section id="about" class="about">
  <div class="container">

    <div class="row gy-4 justify-content-center">
      <div class="col-lg-4">
        <img src={this.state.about_image} class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-5 content">
        <h2>Professional Photographer from Nigeria</h2>
        <p class="fst-italic py-3">
          {this.state.about_intro}
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{this.state.birthday}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{this.state.website}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{this.state.phone}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{this.state.city}</span></li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{this.state.age}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{this.state.degree}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>{this.state.email}</span></li>
              <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{this.state.freelance}</span></li>
            </ul>
          </div>
        </div>
        <p class="py-3">
        {this.state.about_longdescription}
        </p>
      </div>
    </div>

  </div>
</section>

</main>

      </div>
    )
  }
}

export default About