import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			districtcode: '',
			ititype: '',
		}
		
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://iti.nic.in/ITIWebservice/nic/webservice/ITIStatus ', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { districtcode, ititype } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
				<h3 className="h3 mb-3 font-weight-normal">Submit College Details</h3>	
						
						<div>
						<label htmlFor="districtcode">District Code</label>	
						<input
							type="text"
							name="districtcode"
							placeholder="districtcode"
							value={districtcode}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label> ITI Type</label>
						<input
							type="text"
							name="ititype"
							placeholder="ititype"
							value={ititype}
							onChange={this.changeHandler}
						/>
					</div>
				
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
