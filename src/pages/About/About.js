import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={require('../../assets/images/IMG_20240717_234759.jpg')}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! I'm Sanjana Mittapally from Warangal, Telangana, currently pursuing a Bachelor of
                Technology final year in Mechanical Engineering with a minor in Computer Science and Engineering at
                IIT Dharwad.
                I have hands-on experience with full-stack development using the MERN stack, showcased
                through projects like a Blood Bank Management System, ecommerce app and a comprehensive grievance
                redressal application at IIT Dharwad. My technical skills include proficiency in C/C++,
                HTML, CSS, JavaScript, NodeJS, Express.js, React.js, MongoDB, MySQL.
                Apart from academics, I have been actively involved in various roles, such as Sub-Head of Institute Student mentorship Program, where I led mentor selection and provided guidance to junior
                students and also participate in many co-curricular activites at the campus inclusing sports and dance competitions. My achievements include securing 1st place in the "Avadhan 2023" Case Study
                Competition and advancing to the second round of the Devhack at IIT Dharwad.
                I am passionate about leveraging technology to solve real-world problems and am eager
                to contribute to innovative projects and teams.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
