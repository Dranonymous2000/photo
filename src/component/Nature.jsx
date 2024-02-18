import React, { Component } from 'react'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';
import { Link } from 'react-router-dom';



 class Nature extends Component {
  

  constructor(){
    super();
    this.state={
       myData : [],
       loading:true,
       Error:false,
    }

  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Nature).then(result=>{

      if(result == null){
        this.state({Error:true})
      }else{
      this.setState({myData:result,loading:false});
    }    
  }).catch(error=>{
    this.setState({Error:true})
    })
   
  }

  render() {



    const Mylist = this.state.myData;
    const MyView = Mylist && Mylist.map(Mylist=>{
        return  <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src={Mylist.nature_image} className="img-fluid" alt=""/>
          <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href={Mylist.nature_image}  className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            
            <Link to={'/naturedetails/'+ Mylist.id} className="details-link"><i className="bi bi-link-45deg"></i></Link>
          </div>
        </div>
      </div>
      
      

      
    })

    return (
      <div>
        <main id="main" data-aos="fade" data-aos-delay="1500">


<div className="page-header d-flex align-items-center">
  <div className="container position-relative">
    <div className="row d-flex justify-content-center">
    <div className="col-lg-6 text-center">
        <h2>Nature </h2>
        

        <a className="cta-btn" href="contact.html">Available for hire</a>

      </div>  
    </div>
  </div>
</div>


<section id="gallery" className="gallery">
  <div className="container-fluid">

    <div className="row gy-4 justify-content-center">
      {MyView}
    </div>

  </div>
</section>

</main>
      </div>
    )
  }
}

export default Nature