import React from 'react';


 
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 0;
    const max = 8;
    const rand1 =Math.floor( min + Math.random() * (max - min));
    const rand2 = Math.floor(min + Math.random() * (max + min));
    const rand3 = Math.floor(min + Math.random() * (max ));
    const rand4 = Math.floor(min + Math.random() * (min + (max-min)));
    this.setState({ random1: this.state.random + rand1 });
    this.setState({ random2: this.state.random + rand2 });
    this.setState({ random3: this.state.random + rand3 });
    this.setState({ random4: this.state.random + rand4 });
  }

  render() {
    return (
      <>
        <div >
          
            <center className="">
               <td style={{color: "red",  backgroundColor:"#f0f0f0  " ,  }}>
                <div>
                  <span style={{color: "black", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"#f0f0f0" , border:"black", }}>{this.state.random1}</span>
                  <span style={{color: "red", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"#f0f0f0" , border:"black", }}>{this.state.random2} </span>
                  <span style={{color: "orange", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"#f0f0f0" , border:"black", }}>{this.state.random3} </span> 
                  <span style={{color: "indigo", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"#f0f0f0" , border:"black", }}>{this.state.random4} </span> 
                </div>
              </td>
            </center>
            
            <center className="p-3">
                 <td align="right"> <a href='/home'> <input id="mysubmit"  value="Login" tabindex="4" type="submit" /> </a></td>
                 <td align="left">  <input   onClick={this.handleClick.bind(this)} value="Refresh" type="button" tabindex="5" /></td>
             </center>
             
               
                                                              
                                                        
          </div>
          
      </>  
    );
  }
}

export default Login;
