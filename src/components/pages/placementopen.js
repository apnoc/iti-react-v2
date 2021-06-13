import React,  {Component} from 'react' ;
import './stylesheet.css'

class Placements extends Component {
    render() {
        return (
            <div className="container">
               <h1 className="heading">
                   Placement Form
               </h1>
               <form className="details">
                    <div>
                   
                    <label>Admission Number :</label>
                    <span className="spaan ">
                    <input
                    type="text"
                    id="name"
                    className="name" 
                    /> 
                   </span>
                    </div>
                     <label>DOB(As per your ITI Certificate) :</label>
                     <span className="spaan">
                    <input
                    type="text"
                    id="name"
                    className="name"
                    />
                    </span>
                     <center>
                        <input className="submit" type="submit" value="Submit" />
                     </center>
                </form>
            </div>
        )
    }
}

export default Placements;