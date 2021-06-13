import React, {Component} from 'react' ;
import './home.css';
import data from '../data.json';
import Cards from "../cards/cards";
import {Carousel} from 'react-bootstrap';



class Home extends Component {
    render() {
        return (
              <>
              <div>
                <section className="testimonials"> 
                    <Carousel >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image1.jpg"
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image2.jpg"
                              alt="Second slide"
                            />
                          </Carousel.Item>
                    </Carousel>
                </section> 
                <section>
                <section className="header__section" >
                <section className="container" >  
                {
                  data.homePage.map((home) => {
                  return(      
                        <>
                         <h3 className="text-center m-4">{home.title}</h3>
                         <div className="row">
                            <section className="col-lg-8 p-4">
                                <p className="text-justify">{home.paragraph}</p>
                                <a href={home.button_link} className="btn btn-success">{home.button}</a>
                                </section>
                                <section  className="images col-lg-4 p-4">
                                    <img className="img-thumbnail float-left" src={home.imgsrc}/>
                            </section>
                          </div>
                        </>
                        )
                      }) 
                   }  
                  </section> 
                </section>
                </section>
                <section class="articles">
                     <section className=" py-5">
                         <h3 className="text-center"> Schemes of ITI</h3>
                           <Cards />
                       </section>
                </section>
             
              </div>
             </>                         
            
        );
    }
}

export default Home;