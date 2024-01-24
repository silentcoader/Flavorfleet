// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//     const imageStyle = {
//         maxWidth: '200px',
//         borderRadius: '50%',
//       };
//   return (
//     <div className="about-us">
//       <h1>About Us</h1>
//       <div className="team-member">
//         <img src="d.png" alt="Team Member 1" />
//         <h2>Saurabh Gurung</h2>
//         <p>Front-end Developer</p>
//         <p>
//           Saurabh is an experienced front-end developer with a passion for creating
//           beautiful and user-friendly web interfaces. He loves working with modern
//           web technologies like React and Vue.js.
//         </p>
//       </div>
//       <div className="team-member">
//         <img src="g.png" alt="Team Member 2" />
//         <h2>Sachin Gupta</h2>
//         <p>Back-end Developer</p>
//         <p>
//           Sachin is a skilled back-end developer who specializes in building robust
//           server-side applications. She has expertise in working with Node.js and
//           databases like MongoDB and PostgreSQL.
//         </p>
//       </div>
//       <div className="team-member">
//         <img src="f.png" alt="Team Member 3" style={imageStyle} />
//         <h2>Nishant Kumar Singh</h2>
//         <p>UX/UI Designer</p>
//         <p>
//           Nishant is a talented UX/UI designer who creates visually appealing and
//           intuitive user interfaces. She has a keen eye for design and user experience.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  // const imageStyle = {
  //   maxWidth: '200px',
  //   borderRadius: '50%',
  // };

  return (
    <div id="about-page">
      <div id="about-section">
        <h1>About us page</h1>
        <p>
          We am a front-end web developer. I made this web app for my college
          project.I am tring to make my web page more responsive.In our project
          we add more feature as soon as possible.
        </p>
      </div>
      <h2 classname="our-team">Our Team</h2>
      <div id="row">
        <div id="column1">
          <div id="card1">
            <img id="sachin-image" src="images/Sachin.jpg.jpeg" alt="Sachin" />
            <div id="about-cointainer1">
              <h2>Sachin Gupta</h2>
              <p id="about-title1">Frontend & Backend Developer</p>
              <p>
                Hello friends, I am a Backend Designer of this website. I hope you like
                my website.
              </p>
              <p>
                <button id="about-button1">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div id="column2">
          <div id="card2">
            <img
              id="nishant-image"
              src="images/Nishant.jpg.jpeg"
              alt="Nishant"
            />
            <div id="about-cointainer2">
              <h2>Nishant Kumar Singh</h2>
              <p id="about-title2">UI/UX Designer</p>
              <p>
                Hello friends, I am the UI/Ux designer of this website. I hope you
                like my website.
              </p>
              <p>
                <button id="about-button2">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div id="column3">
          <div id="card3">
            <img
              id="saurabh-image"
              src="images/Saurabh.jpg.png"
              alt="Saurabh"
            />
            <div id="about-cointainer3">
              <h2>Saurabh Gurung</h2>
              <p id="about-title3">Frontend & Backend Developer</p>
              <p>
                Hello friends, I am the Designer of this website. I hope you
                like my website.
              </p>
              <p>
                <button id="about-button3">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div id="column4">
          <div id="card4">
            <img
              id="Nishu-image"
              src="images/Nishu.jpg.jpeg"
              alt="Nishu Singh"
            />
            <div id="about-cointainer4">
              <h2>Nishu Singh</h2>
              <p id="about-title4">UI/UX Designer</p>
              <p>
                Hello friends, I am the UI/UX Designer of this website. I hope you
                like my website.
              </p>
              <p>
                <button id="about-button4">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
    // <div className="about-us">
    //   <h1>About Us</h1>
    //   <div className="team-member">
    //     <div className="team-member-card">
    //       <img src="d.png" alt="Team Member 1" style={imageStyle} />
    //       <h2>Saurabh Gurung</h2>
    //       <p>Front-end Developer</p>
    //       <p>
    //         Saurabh is an experienced front-end developer with a passion for creating
    //         beautiful and user-friendly web interfaces. He loves working with modern
    //         web technologies like React and Vue.js.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="team-member">
    //     <div className="team-member-card">
    //       <img src="g.png" alt="Team Member 2" style={imageStyle} />
    //       <h2>Sachin Gupta</h2>
    //       <p>Back-end Developer</p>
    //       <p>
    //         Sachin is a skilled back-end developer who specializes in building robust
    //         server-side applications. She has expertise in working with Node.js and
    //         databases like MongoDB and PostgreSQL.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="team-member">
    //     <div className="team-member-card">
    //       <img src="f.png" alt="Team Member 3" style={imageStyle} />
    //       <h2>Nishant Kumar Singh</h2>
    //       <p>UX/UI Designer</p>
    //       <p>
    //         Nishant is a talented UX/UI designer who creates visually appealing and
    //         intuitive user interfaces. She has a keen eye for design and user experience.
    //       </p>
    //     </div>
    //   </div> */}
    </div>
  );
};

export default AboutUs;
