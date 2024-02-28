import React, { Component } from 'react'
import AppUrl from '../RestAPI/AppUrl';
import RestClient from '../RestAPI/RestClient';
import { Link } from 'react-router-dom';

export class Home extends Component {

  constructor(){
    super();
    this.state={
      Home_title:"...",
      Home_desc:"...",
      nature_image: "...",
       
    }

  }

  
componentDidMount() {
  RestClient.GetRequest(AppUrl.HomeTopTitle)
    .then((result) => {
      console.log(result); // Add this line to check the structure of the result
      this.setState({ Home_title: result[0]['Home_title'], Home_desc: result[0]['Home_desc'] });
    })
    .catch((error) => {
      this.setState({ Home_title: "???", Home_desc: "???" });
    });


    RestClient.GetRequest(AppUrl.Naturehome)
      .then((result) => {
        this.setState({ nature_images: result });
      })
      .catch((error) => {
        this.setState({ nature_images: [] });
      });

    RestClient.GetRequest(AppUrl.Animalhome)
      .then((result) => {
        this.setState({ animal_images: result });
      })
      .catch((error) => {
        this.setState({ animal_images: [] });
      });

    RestClient.GetRequest(AppUrl.Architecturehome)
      .then((result) => {
        this.setState({ architecture_images: result });
      })
      .catch((error) => {
        this.setState({ architecture_images: [] });
      });

    RestClient.GetRequest(AppUrl.Peoplehome)
      .then((result) => {
        this.setState({ people_images: result });
      })
      .catch((error) => {
        this.setState({ people_images: [] });
      });

    RestClient.GetRequest(AppUrl.Sporthome)
      .then((result) => {
        console.log(result);
        this.setState({ sports_images: result });
      })
      .catch((error) => {
        this.setState({ sports_images: [] });
      });

    RestClient.GetRequest(AppUrl.Travelhome)
      .then((result) => {
        this.setState({ travel_images: result });
      })
      .catch((error) => {
        this.setState({ travel_images: [] });
      });

    RestClient.GetRequest(AppUrl.Othershome)
      .then((result) => {
        this.setState({ others_images: result });
      })
      .catch((error) => {
        this.setState({ others_images: [] });
      });



   
}






  render() {

  

    return (
      <div>


        <section id="hero" class="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                  <h2>{this.state.Home_title}</h2>
                  <p>{this.state.Home_desc}</p>
                  <Link to={"/contact"} class="btn btn-success">Available for hire</Link>
                </div>
              </div>
            </div>
          </section>
        
        
         
          <main id="main" data-aos="fade" data-aos-delay="1500">
        
        
          <section id="gallery" className="gallery">


          <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.sports_images && this.state.sports_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">  
                <div className="gallery-item h-100 mt-4">
                <Link to={'/sport'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`Nature Image ${index + 1}`} />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>






        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.nature_images && this.state.nature_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                 
                <div className="gallery-item h-100 mt-4">
                {/* <a href={image}  class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                <a href={"/nature"}  class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                <Link to={'/nature'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`Nature Image ${index + 1}`} />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.animal_images && this.state.animal_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100 mt-4">
                  <Link to={'/animal'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`Animal Image ${index + 1}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

    

         <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.travel_images && this.state.travel_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100 mt-4">
                  <Link to={'/travel'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`Travel Image ${index + 1}`} />
                  
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

    

        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.people_images && this.state.people_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100 mt-3">
                    <Link to={'/people'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`People Image ${index + 1}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {this.state.architecture_images && this.state.architecture_images.map((image, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100 mt-4">
                  <Link to={'/architecture'} className="details-link">
                  <img src={image} className="img-fluid" style={{ width: '486px', height: '364px' }} alt={`Architecture Image ${index + 1}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

       

      
       

      
              
          
      </section>

        
          </main>
        
              </div>
    )
  }
}

export default Home