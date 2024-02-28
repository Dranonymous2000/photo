import React, { Component } from 'react'
import RestClient from '../RestAPI/RestClient'; 
import AppUrl from '../RestAPI/AppUrl';
import { Button } from 'react-bootstrap';


 class Contact extends Component {

  constructor(){
    super();
    this.state={
        city:"...",
        email:"...",
        phone:"...",
        about_intro:"...",
       
      
        
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.aboutcontact).then(result=>{
        this.setState({
          city:result[0]["city"],
          email:result[0]["email"],
          phone:result[0]["phone"],
          about_intro:result[0]["about_intro"],
         
         
        
        });
      })
  }


  sendContact(){


    let contact_name= document.getElementById("contact_name").value;
    let contact_email= document.getElementById("contact_email").value;
    let contact_subject= document.getElementById("contact_subject").value;
    let contact_message= document.getElementById("contact_message").value;
   

    let jsonObject = {contact_name:contact_name,contact_email:contact_email,contact_subject:contact_subject,contact_message:contact_message}
      
    RestClient.PostRequest(AppUrl.Contact,JSON.stringify(jsonObject)

    ).then(result=>{
     alert(result);
    }).catch(error=>{
     alert("Error");
    })
 }

  render() {
    return (
      <div>
          <main id="main" data-aos="fade" data-aos-delay="1500">


<div class="page-header d-flex align-items-center">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
        <h2>Contact</h2>
        <p>{this.state.about_intro}</p>

      </div>
    </div>
  </div>
</div>


<section id="contact" class="contact">
  <div class="container">

    <div class="row gy-4 justify-content-center">

      <div class="col-lg-3">
        <div class="info-item d-flex">
          <i class="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h4>Location:</h4>
            <p>{this.state.city}</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="info-item d-flex">
          <i class="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h4>Email:</h4>
            <p>{this.state.email}</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="info-item d-flex">
          <i class="bi bi-phone flex-shrink-0"></i>
          <div>
            <h4>Call:</h4>
            <p>{this.state.phone}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="row justify-content-center mt-4">

      <div class="col-lg-9">
        <form>
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="contact_name" placeholder="Your Name" required/>
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="contact_email" placeholder="Your Email" required/>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="contact_subject" placeholder="Subject" required/>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" id='contact_message' placeholder="Message" required></textarea>
          </div>
          <div class="text-center">
            <Button onClick={this.sendContact} variant="primary">Send Message</Button>
           
          </div>
        </form>
      </div>

    </div>

  </div>
</section>

</main>
      </div>
    )
  }
}

export default Contact