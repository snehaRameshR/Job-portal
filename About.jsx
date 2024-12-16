import React from 'react'
import aboutimg from "../assets/aboutimg.jpg";
import "../Pages/About.css";
const About = () => {
  return (
    <div>
        <h3>About Us</h3>
        <img src={aboutimg} alt='about' className='ab-img'/>
        <h4>Welcome to  <b>Job Portal</b>, your trusted platform for connecting talented professionals with their dream opportunities. 
           Whether you’re a job seeker looking to advance your career or an employer searching for the perfect candidate, we’re here to simplify the process.
           Our mission is to bridge the gap between talent and opportunity by offering a seamless, user-friendly experience for both job hunters and recruiters.
            With a robust database of diverse job listings, advanced search tools, and personalized recommendations,
             we empower individuals to find roles that align with their skills and aspirations while helping organizations build exceptional teams. 
          At <b>Job Portal</b>, we believe in creating brighter futures—one successful match at a time.</h4>
          <h4> <h3>For Job Seekers</h3>
                 Access thousands of job listings across diverse industries and locations.
                 Use advanced search filters to find roles that match your skills, experience, and aspirations.
                 Create professional resumes effortlessly with our built-in resume builder.
                 Get personalized job recommendations based on your profile and career goals.
                 Stay ahead of the competition with expert career advice and interview tips.
                 Set up job alerts to never miss an opportunity that suits you.</h4>
                 <h4>
                 <h3>For Employers</h3>
Post job listings with ease and reach millions of potential candidates.
Utilize our AI-driven candidate matching to find the perfect fit quickly.
Access a vast talent pool of skilled professionals from various fields.
Streamline the hiring process with tools like application tracking and interview scheduling.
Enhance your brand visibility with customizable employer profiles.
Enjoy dedicated support from our recruitment experts to meet your hiring goals.
                 </h4>
        
        </div>
  )
}

export default About;