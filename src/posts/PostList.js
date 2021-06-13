import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('  https://iti.nic.in/ITIWebservice/nic/webservice/ITIStatus ')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
		console.log(error)
		alert(JSON.stringify(error))
        this.setState({errorMsg: 'Error retrieving data'})
			})

	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of Colleges
				{posts.length
					? posts.map(post => <div >{post.iti_name}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default PostList
