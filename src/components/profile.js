// import React from "react";
// import data from '../data.json';
// import "./profile.css";

// export default function App() {
//   return (
//         <>
//           {
//             data.SeatsOpen.map((information) => {
//               return(
//                   <>
//                      <section className="m-5 p-5 ">
//                       <h3 className="text-center p-2">{information.heading}</h3>
                          
//                             <h6 className=" p-2">{information.header}</h6>
                         
//                       <div>
//                                                  {
//                                                  information.content.map((details) => {
//                                                                              return(
//                                                                                  <table className="table table-bordered">
//                                                                                      <thead>
//                                                                                          {
//                                                                                          details.heading.map((tables) => {
//                                                                                              return(
//                                                                                                  <tr>
//                                                                                                     <th scope="col">{tables.h1}</th> 
//                                                                                                      <th scope="col">{tables.h2}</th>                                                                                  
//                                                                                                      <th scope="col">{tables.h3}</th>                                                                               
//                                                                                                      <th scope="col">{tables.h4}</th> 
//                                                                                                      <th scope="col">{tables.h5}</th>
//                                                                                                      <th scope="col">{tables.h6}</th> 
//                                                                                                      <th scope="col">{tables.h7}</th>                                                                                  
//                                                                                                      <th scope="col">{tables.h8}</th>                                                                               
//                                                                                                      <th scope="col">{tables.h9}</th>                                                                                            
//                                                                                                  </tr>
//                                                                                              );
//                                                                                          }
//                                                                                          )}                                                                      
                                                                                     
//                                                                                      </thead>
//                                                                                      <tbody>
//                                                                                      {
//                                                                                          details.Paragraph.map((description) => {
//                                                                                              return(
//                                                                                                  <tr>
//                                                                                                      <td>{description.p1}</td>
//                                                                                                      <td>{description.p2}</td>
//                                                                                                      <td>{description.p3}</td>
//                                                                                                      <td>{description.p4}</td>
//                                                                                                      <td>{description.p5}</td>
//                                                                                                      <td>{description.p6}</td>
//                                                                                                      <td>{description.p7}</td>
//                                                                                                      <td>{description.p8}</td>
//                                                                                                      <td>{description.p9}</td>
//                                                                                                  </tr>
//                                                                                                  );
//                                                                                              }
//                                                                                              )}                                                                   
                                                                             
//                                                                                  </tbody>
//                                                                                  </table>
//                                                                              );
//                                                                          })
//                                                  }
//                         </div>
//                         </section>
//                   </>
//                 );
                
//             } )                                  
          
//           }
//         </>
 
//     );

// }



import React, { PureComponent } from 'react'
import axios from 'axios';
 import "./profile.css";
import ReactPaginate from 'react-paginate';
    
export class Profile extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 20,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }

    render() {
        return (
            <div className="container">
                  <h4 className="text-center m-4" >LIST OF ITI'S WITH TRADES & STRENGTHS INTERFACE</h4>

                  <table className="container" border="1">
                     <thead>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Email</th>

                     </thead>
                     <tbody>
                        {
                          this.state.tableData.map((tdata, i) => (
                                <tr>
                                    <td>{tdata.id}</td>
                                    <td>{tdata.name}</td>
                                    <td>{tdata.email}</td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  

               <div className="align-center p-5">
               <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>


               </div>

            </div>
        )
    }
}

export default Profile;
