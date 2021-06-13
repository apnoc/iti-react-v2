import React,  {Component} from 'react' ;
import data from '../../data.json';
import './stylesheet.css'

class PlacementsDashBoard extends Component {
    render() {
        return (
            <div>
                                {
                                    data.Dashboard.map((information) => {
                                        return(
                                            <section >
                                                <h3 className="text-center m-4">{information.heading}</h3>
                                                <ul>
                                                        <li>{information.header1}</li>                                  
                                                        <li>{information.header2}</li>  
                                                   </ul>
                                                <div className="row">
                                                <section className="col-lg-3 m-2  ">
                                                 
                                                    <div>
                                                    {
                                                    information.content1.map((details) => {
                                                                                return(
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => {
                                                                                                return(
                                                                                                    <tr>
                                                                                                       
                                                                                                        <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                        <th scope="col">{tables.h3}</th>                                                                               

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
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
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
                                                <section className="col-lg-3 m-0 ">
                                                   
                                                    <div>
                                                    {
                                                    information.content2.map((details) => {
                                                                                return(
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => {
                                                                                                return(
                                                                                                    <tr>
                                                                                                        
                                                                                                        <th scope="col">{tables.h2}</th> 
                                                                                                        <th scope="col">{tables.h3}</th>                                                                                 
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
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
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
                                                <section className="col-lg-3 m-0 ">
                                                 
                                                    <div>
                                                    {
                                                    information.content3.map((details) => {
                                                                                return(
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => {
                                                                                                return(
                                                                                                    <tr>
                                                                                                        
                                                                                                        <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                        <th scope="col">{tables.h3}</th>                                                                               

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
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
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
                                                <section className="col-lg-2 m-0 ">
                                                   
                                                    <div>
                                                    {
                                                    information.content4.map((details) => {
                                                                                return(
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => {
                                                                                                return(
                                                                                                    <tr>
                                                                                                       
                                                                                                        <th scope="col">{tables.h2}</th> 
                                                                                                        <th scope="col">{tables.h3}</th>                                                                                 
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
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
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
                                               
                                                </div>

                                            </section>
                                        );
                                    })
                                }

                
            </div>
        )
    }
}

export default PlacementsDashBoard;