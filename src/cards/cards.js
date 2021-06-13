import React,{ Component } from "react";
import Card from "../cards/cardUI"



class Cards extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Card imgsrc="/images/img-1.jpg" title="Craftsmen Training" description="Andhra Pradesh functions with the major objectives of providing Skills and Apprenticeship Training to the youths in Andhra Pradesh State. "  />
                   </div>
                   <div className="col-md-4">
                       <Card imgsrc="/images/img-2.jpg" title="Apprenticeship Training" description="Andhra Pradesh functions with the major objectives of providing Skills and Apprenticeship Training to the youths in Andhra Pradesh State. "   />
                   </div>
                   <div className="col-md-4">
                       <Card imgsrc="/images/img-4.jpg" title="Skill Development Initiatives" description="Andhra Pradesh functions with the major objectives of providing Skills and Apprenticeship Training to the youths in Andhra Pradesh State. "  />
                   </div>
                </div> 
            </div>
        )
    }
}

export default Cards;