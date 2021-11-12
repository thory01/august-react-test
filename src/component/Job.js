import React from "react";
// How do we pass our props in
export default function Job({
	jobDescription,
	logo,
	roleName,
	type,
	company,
	req,
}) {
	const applyNow = () => {
		// How can you open a new window with the link to job applicayion?
	};

	return (
		<div className="job-tile">
			<div className="top">
				{/* Replace the image and spans with the corresponding job values! */}
				<img src={logo} alt="Company Logo" />
				<span id="company" className="material-icons more_horiz">
					{company}
				</span>
			</div>
			<div className="rolename">
				<span>{roleName}</span>
			</div>
			<div className="description">
				<span> {req} </span>
			</div>
			<div className="buttons">
				<div className="button apply-now" onClick={applyNow}>
					Apply Now
				</div>
				<div className="button">Message</div>
			</div>
		</div>
	);
}
