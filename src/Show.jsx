import React from 'react'
import axios from 'axios'
import moment from 'moment'
import {Link} from 'react-router-dom'


class Show extends React.Component {
	state ={
		issue: {}
	}

componentDidMount() {
	axios.get(`https://api.github.com/repos/facebook/react/issues/${this.props.match.params.id}`)
					.then(result => {
							let issue = result.data;
							this.setState({
							issue
							});
					})
}
render() {
	var issue = Object.assign({}, this.state.issue)
	return(
			<>
					<h1>{issue.title}</h1>
					<h2>Details for Issue Number: {issue.number}</h2>

					
			</>
    );
  }
}






export default Show; 