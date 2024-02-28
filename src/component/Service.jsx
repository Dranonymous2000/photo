import React, { Component } from 'react'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';
import { Link } from 'react-router-dom';

export class Service extends Component {

  constructor(){
    super();
    this.state={
      service_description:"...",
      service_type1:"...",
      service_type2:"...",
      service_type3:"...",
      service_type4:"...",
      service_type1_desc: "...",
      service_type2_desc: "...",
      service_type3_desc: "...",
      service_type4_desc: "...",
      myData : []

    }

  }
componentDidMount() {
  RestClient.GetRequest(AppUrl.Service)
    .then((result) => {
      console.log(result); // Add this line to check the structure of the result
      this.setState({ service_description: result[0]['service_description'], service_type1: result[0]['service_type1'], service_type2: result[0]['service_type2'], service_type3: result[0]['service_type3'], service_type4: result[0]['service_type4'],service_type1_desc: result[0]['service_type1_desc'], service_type2_desc: result[0]['service_type2_desc'], service_type3_desc: result[0]['service_type3_desc'], service_type4_desc: result[0]['service_type4_desc']});
    })
    .catch((error) => {
      this.setState({ service_description: "???", service_type1: "???", service_type2: "???", service_type3: "???", service_type4: "???",service_type1_desc: "???", service_type2_desc: "???", service_type3_desc: "???", service_type4_desc: "???"});
    });

    RestClient.GetRequest(AppUrl.Price).then(result=>{
      this.setState({myData:result,loading:false});
    })

    RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
      this.setState({myTest:result,loading:false});
    })



}


  render() {

    const Mylist = this.state.myData;
    const MyView = Mylist && Mylist.map(Mylist=>{
        return    <div class="col-lg-6">
        <div class="pricing-item d-flex justify-content-between">
          <h3>{Mylist.price_amount}</h3>
          <h4>{Mylist.price_description}</h4>
        </div>
      </div>
    })

    const MyTestlist = this.state.myTest;
    const MyTestView = MyTestlist && MyTestlist.map(MyTestlist=>{
        return     <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <p>
            {MyTestlist.client_description}
          </p>
          <div class="profile mt-auto">
            <img src={MyTestlist.client_image} class="testimonial-img" alt=""/>
            <h3>{MyTestlist.client_name}</h3>
            <h4>Designer</h4>
          </div>
        </div>
      </div>
          
    });


    return (
      <div>
        <main id="main" data-aos="fade" data-aos-delay="1500">


<div class="page-header d-flex align-items-center">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
        <h2>Services</h2>
        <p>{this.state.service_description}</p>

        <Link to={"/contact"} class="btn btn-success">Available for hire</Link>

      </div>
    </div>
  </div>
</div>


<section id="services" class="services">
  <div class="container">

    <div class="row gy-4">

      <div class="col-xl-3 col-md-6 d-flex">
        <div class="service-item position-relative">
          <i class="bi bi-activity"></i>
          <h4><a href="" class="stretched-link">{this.state.service_type1}</a></h4>
          <p>{this.state.service_type1_desc}</p>
          
        </div>
      </div>

      <div class="col-xl-3 col-md-6 d-flex">
        <div class="service-item position-relative">
          <i class="bi bi-bounding-box-circles"></i>
          <h4><a href="" class="stretched-link">{this.state.service_type2}</a></h4>
          <p> {this.state.service_type2_desc}</p>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 d-flex">
        <div class="service-item position-relative">
          <i class="bi bi-calendar4-week"></i>
          <h4><a href="" class="stretched-link">{this.state.service_type3}</a></h4>
          <p> {this.state.service_type3_desc}</p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 d-flex">
        <div class="service-item position-relative">
          <i class="bi bi-broadcast"></i>
          <h4><a href="" class="stretched-link">{this.state.service_type4}</a></h4>
          <p> {this.state.service_type4_desc}</p>
        </div>
      </div>

    </div>

  </div>
</section>


<section id="pricing" class="pricing">
  <div class="container">

    <div class="section-header">
      <h2>Prices</h2>
      <p>Check my adorable pricing</p>
    </div>

    <div class="row gy-4 gx-lg-5">

    {MyView}
      </div>
    </div>
</section>


<section id="testimonials" class="testimonials">
  <div class="container">

    <div class="section-header">
      <h2>Testimonials</h2>
      <p>What they are saying</p>
    </div>

    <div class="slides-3 swiper">
      <div class="swiper-wrapper">

      {MyTestView}

      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</section>

</main>
      </div>
    )
  }
}

export default Service