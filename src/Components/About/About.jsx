import React from "react";
import "./About.css";



const About = () => {
  return (
    <div id="about">
    <div className="about-sec">
      <div className="main-about">

          <div className="about-1">
              <img className="about-img" src={"https://avatars.githubusercontent.com/u/110034812?v=4"} alt="abhi" />
          </div >

          <div className="about-2">
            <h2 className="me">About Me</h2>
              <p>
                I am a Full-stack web developer from India.A self-motivated, Hardworking, adaptable driven to deliver the best in any situation. A passionate Web Developer with proficiency in HTML, CSS, JavaScript, react, Redux, Node.js, Express.js Data Structure, and
Algorithms. Looking forward to utilizing experience of working on projects for achieving organizational goals. My field of interests are building new web technologies, products and also in areas related to deep learning. I love to create beautiful and efficient websites for users.
              </p>
          </div>

        </div>
    </div>

    </div>
   
  );
}

export default About;