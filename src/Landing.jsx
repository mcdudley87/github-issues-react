import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Landing = props => (
	<>
		<div class="landing">
			<h1 class="landingText">Welcome to Sh*tHub </h1>
			<h2>Because "DumpsterFire.io" was taken...</h2>
			<img src={'poo-emoji.png'} class="poo"/>
			<Link to="/IssuesIndex">
				<button type="button" className="btn btn">Go to Issues</button>
			</Link>
		</div>
	</>
)

export default Landing;