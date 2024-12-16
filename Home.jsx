import React, { useState } from 'react';
import myImage from '../assets/silde.jpg';
import Card from '../section/Card'; // Import the Card component
import './home.css'
const Home = () => {
  const jobOffers = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Chennai",
      salary: "$100,000/year",
      description: "Develop web applications using React.js and modern frontend technologies."
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      location: "Bangalore",
      salary: "$120,000/year",
      description: "Build and maintain APIs using Node.js and MongoDB."
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Mumbai",
      salary: "$95,000/year",
      description: "Design intuitive and beautiful user interfaces for web and mobile applications."
    },
    {
      title: "Support",
      company: "Google",
      location: "Chennai",
      salary: "$100,00/year",
      description: "Provide support for web applications."
    },
  ];

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobOffers);

  const handleSearch = () => {
    const filtered = jobOffers.filter(job =>
      (searchTitle === "" || job.title.toLowerCase().includes(searchTitle.toLowerCase())) &&
      (searchLocation === "" || job.location.toLowerCase() === searchLocation.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className='homepg'>
      <h1>Find the perfect <span className='heading'>job for you</span></h1>
      <h4>Search your career opportunity through 12,800 jobs</h4>
      
      <div className="search-bar">
        <input 
          type='text' 
          placeholder='Job Title or Keyword' 
          className='input1' 
          value={searchTitle} 
          onChange={(e) => setSearchTitle(e.target.value)} 
        />
        <select 
          className='input2' 
          value={searchLocation} 
          onChange={(e) => setSearchLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="chennai">Chennai</option>
          <option value="bangalore">Bangalore</option>
          <option value="madurai">Madurai</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="kerala">Kerala</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <img src={myImage} className='img' alt="Description of the image" />

      <h1>Featured Job Offers</h1>
      <h4>Search your career opportunity through 12,800 jobs</h4>
      
      {/* Job Cards */}
      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Card
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              description={job.description}
            />
          ))
        ) : (
          <p>No jobs found for your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
