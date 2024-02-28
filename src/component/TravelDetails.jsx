import React, { Component } from 'react'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';
import { Link } from 'react-router-dom';

 class TravelDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          image_name: "...",
          travel_image: "...",
          short_desc: "...",
          long_title: "...",
          long_desc: "...",
          travel_image2: "...",
          date: "...",
          client: "...",
          url: "...",
        };
      }
    
      componentDidMount() {
        
          const pathParts = window.location.pathname.split('/');
          const travelId = pathParts[pathParts.length - 1];
    
          console.log("we are here " + AppUrl.TravelDetails + travelId);
     
    
        RestClient.GetRequest(AppUrl.TravelDetails + travelId).then((result) => {   

            this.setState({
            image_name: result[0]['image_name'],
            travel_image: result[0]['travel_image'],
            short_desc: result[0]['short_desc'],
            long_title: result[0]['long_title'],
            long_desc: result[0]['long_desc'],
            travel_image2: result[0]['travel_image2'],
            date: result[0]['date'],
            client: result[0]['client'],
            url: result[0]['url'],
            });
        });
      }

  render() {
    return (
      
        <div>
        <main id="main" data-aos="fade" data-aos-delay="1500">
  
  
  <div class="page-header d-flex align-items-center">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
        <h2>{this.state.image_name}</h2>
    <p> {this.state.long_title} </p>
  
    <Link to={"/contact"} class="btn btn-success">Available for hire</Link>
  
      </div>
    </div>
  </div>
  </div>
  
  
  <section id="gallery-single" class="gallery-single">
  <div class="container">
  
    <div class="position-relative h-100">
      <div class="slides-1 portfolio-details-slider swiper">
        <div class="swiper-wrapper align-items-center">
  
          <div class="swiper-slide">
            <img src={this.state.travel_image} alt=""/>
          </div>
          <div class="swiper-slide">
            <img src={this.state.travel_image2}  alt=""/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  
    </div>
  
    <div class="row justify-content-between gy-4 mt-4">
  
      <div class="col-lg-8">
        <div class="portfolio-description">
          <h2>{this.state.short_desc} </h2>
         <p>
         {this.state.long_desc} 
         </p>
        </div>
      </div>
  
      <div class="col-lg-3">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong> <span>Travels Photography</span></li>
            <li><strong>Client</strong> <span> {this.state.client} </span></li>
            <li><strong>Project date</strong> <span>{this.state.date} </span></li>
            
            <li><a href={this.state.url}  class="btn-visit align-self-start">Visit Website</a></li>
          </ul>
        </div>
      </div>
  
    </div>
  
  </div>
  </section>
  
  </main>
      </div>

    )
  }
}

export default TravelDetails