import React, { Component } from 'react';
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';

class NatureDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nature_image: "...",
      short_desc: "...",
      long_title: "...",
      long_desc: "...",
      nature_image2: "...",
      date: "...",
      client: "...",
      url: "...",
    };
  }

  componentDidMount() {
    // Use this.props.match.params.id instead of this.state.NatureId
      // Extract the ID from the URL using window.location.pathname
      const pathParts = window.location.pathname.split('/');
      const natureId = pathParts[pathParts.length - 1];
    //   console.log('hello checking ' + natureId);
    //   console.log("we are here " + AppUrl.NatureDetails + natureId);

    RestClient.GetRequest(AppUrl.NatureDetails + natureId).then((result) => {
        // console.log("hi i am here ");
        // console.log(result.nature_image);

        this.setState({
            nature_image: result.nature_image,
            short_desc: result.short_desc,
            long_title: result.long_title,
            long_desc: result.long_desc,
            nature_image2: result.nature_image2,
            date: result.date,
            client: result.client,
            url: result.url,
        });
    });
  }

  render() {
    console.log("Hello"); 
    return (
      <div>
        <main id="main" data-aos="fade" data-aos-delay="1500">


<div class="page-header d-flex align-items-center">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
        <h2>Gallery Single</h2>
    <p> {this.state.long_title} </p>

        <a class="cta-btn" href="contact.html">Available for hire</a>

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
            <img src={this.state.nature_image} alt=""/>
          </div>
          <div class="swiper-slide">
            <img src={this.state.nature_image2}  alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="assets/img/gallery/gallery-10.jpg" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="assets/img/gallery/gallery-11.jpg" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="assets/img/gallery/gallery-12.jpg" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="assets/img/gallery/gallery-13.jpg" alt=""/>
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
            <li><strong>Category</strong> <span>Nature Photography</span></li>
            <li><strong>Client</strong> <span> {this.state.client} </span></li>
            <li><strong>Project date</strong> <span>{this.state.date} </span></li>
            
            <li><a href={this.state.nature_image}  class="btn-visit align-self-start">Visit Website</a></li>
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

export default NatureDetails