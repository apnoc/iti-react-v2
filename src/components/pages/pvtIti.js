import React from 'react'
import data from '../../data.json';
import "./pvtIti.css";

function pvtIti() {
    return (
        <>
        {
          data.SeatsOpen.map((information) => {
            return(
                <>
                   <section className="m-5 p-5 ">
                    <h3 className="text-center p-2">{information.heading}</h3>
                        
                          <h6 className=" p-2">{information.header}</h6>
                       
                    <div>
                                               {
                                               information.content.map((details) => {
                                                                           return(
                                                                               <table className="table table-bordered">
                                                                                   <thead>
                                                                                       {
                                                                                       details.heading.map((tables) => {
                                                                                           return(
                                                                                               <tr>
                                                                                                  <th scope="col">{tables.h1}</th> 
                                                                                                   <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                   <th scope="col">{tables.h3}</th>                                                                               
                                                                                                   <th scope="col">{tables.h4}</th> 
                                                                                                   <th scope="col">{tables.h5}</th>
                                                                                                   <th scope="col">{tables.h6}</th> 
                                                                                                   <th scope="col">{tables.h7}</th>                                                                                  
                                                                                                   <th scope="col">{tables.h8}</th>                                                                               
                                                                                                   <th scope="col">{tables.h9}</th>                                                                                            
                                                                                               </tr>
                                                                                           );
                                                                                       }
                                                                                       )}                                                                      
                                                                                   
                                                                                   </thead>
                                                                                   <tbody>
                                                                                   {
                                                                                       details.Paragraph.map((description) => {
                                                                                           return(
                                                                                               <tr>
                                                                                                   <td>{description.p1}</td>
                                                                                                   <td>{description.p2}</td>
                                                                                                   <td>{description.p3}</td>
                                                                                                   <td>{description.p4}</td>
                                                                                                   <td>{description.p5}</td>
                                                                                                   <td>{description.p6}</td>
                                                                                                   <td>{description.p7}</td>
                                                                                                   <td>{description.p8}</td>
                                                                                                   <td>{description.p9}</td>
                                                                                               </tr>
                                                                                               );
                                                                                           }
                                                                                           )}                                                                   
                                                                           
                                                                               </tbody>
                                                                               </table>
                                                                           );
                                                                       })
                                               }
                      </div>
                      </section>
                </>
              );
              
          } )                                  
        
        }
      </>
    )
}

export default pvtIti
