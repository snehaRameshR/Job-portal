import React from "react";
import "../section/Card.css"; 
// import"../section/Joblist";
const Card = ({ title, company, location, salary, description }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{title}</h3>
      <p className="company-name">{company}</p>
      <p className="job-location">{location}</p>
      <p className="job-salary">{salary}</p>
      <p className="job-description">{description}</p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default Card;
