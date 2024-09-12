import React from 'react';
import Username from './Username.jsx';
import pictureMe from './images/IMG_4104-modified.png';
import Navbar from './NavBar.jsx';

function App() {


  return (
    <div className="body">
      <nav id="desktop-nav">
        <Navbar />
      </nav>
      <section id="profile">
        <div className="section_pic-container">
          <img src={pictureMe} alt="" className="pictureMe" />
        </div>
        <div className="section_text">
          <Username />
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
          </div>
          <div id="socials-container">
            <img
              src="/images/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://linkedin.com/'}
            />
            <img
              src="/images/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/'}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about_intro">
          <p className="section_text_p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
        </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree Data Science<br />B.Sc. Math-Cs</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
