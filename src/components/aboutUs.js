import React,  {Component} from 'react' ;
import data from '../data.json';


class About extends Component {
    render() {
        return (
            <> 
            {
                data.aboutiti.map((information) => {
                  return(
            <div>
               <section className="container">
                   <h3>{information.heading}</h3>  
                   {
                      information.paragraph.map((details)=> {
                          return(
                              <>
                                <p>{details.p}</p>
                              </>
                          )
                      }) 
                   }                         
               </section>
            </div>
             );
             
         } )                                  
       
       }
     </>
        )
    }
}

export default About;