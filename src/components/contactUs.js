import React from 'react'
import { Formik, Field, Form } from "formik"


function Contact() {
  
    return (	
      <div	
        style={{	
          width: "100%",	
          display: "flex",	
          alignContent: "center",	
          justifyContent: "center",	
          padding: 10,	
        }}	
      >	
        <Formik	
          initialValues={{	
            title: "",	
            description: "",	
            day: "",	
            level: "",	
          }}	
          onSubmit={ async (values) => {
           ;
          }}		
        >	
          {() => (	
            <Form style={{ width: "100%", maxWidth: 500 }}>	
              <h3 className="h3 mb-3 font-weight-normal">Contact Form</h3>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputTitle">Full Name</label>	
                <Field	
                  id="inputTitle"	
                  className="form-control"	
                  required	
                  autoFocus	
                  name="title"	
                />	
              </div>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputDescription">Email</label>	
                <Field	
                  type="textarea"	
                  id="inputDescription"	
                  className="form-control"	
                  required	
                  name="description"	
                />	
              </div>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputDay">Phone Number</label>	
                <Field	
                  name="day"	
                  id="inputDay"	
                  className="form-control"	
                  required	
                />	
              </div>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputLevel">Address</label>	
                <Field	
                  name="level"	
                  id="inputLevel"	
                  className="form-control"	
                  required	
                />	
              </div>	
              <div style={{ justifyContent: "center", alignContent: "center" }}>
                <button className="btn btn-outline-success">Submit</button>	
              </div>
            </Form>	
          )}	
        </Formik>	
      </div>	
    );	
  }

function contactUs() {
    return (
        <div>
           <Contact />	
        </div>
    )
}

export default contactUs
