import React from 'react'
import axios from 'axios'
import moment from 'moment'
import {Link} from 'react-router-dom'
import './App.css';

class IssuesIndex extends React.Component {
	state = {
			issues: []
	}

	componentDidMount() {
			axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=15')
					.then(result => {
							let issues = result.data;
							this.setState({
							issues
							})
			})
	}
	
	render() {
			return(
					<>
							{this.state.issues.map((issue, i) => 
								<div class="issue-box">
									<div class="issue">
										<div key={i}>
												<h2>{issue.title}</h2>
												<h3>Issue Number: {issue.number}</h3>
												<p>Submitted by {issue.user.login}</p>
												<p> submitted {moment(issue.created_at).startOf().fromNow()}</p>
												<Link to={`/show/${issue.number}`}>
													<button type="button" className="btn btn">Go to Issue Details</button>
												</Link>
												<hr></hr>
											</div>
										</div>
									</div>
								)}
					</>
			);
	}
} 

export default IssuesIndex;


