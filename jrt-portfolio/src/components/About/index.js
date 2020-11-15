import React from "react";
import './styles.css';
import Tromso from "./Tromso-fjord.jpg";

function About() {
  return (
    //  Main Section
    <main id="main" style={{ backgroundImage:`url(${Tromso})` }}>
      {/* Bootstrap Rows & Columns  */}
      <article className="container">
        <div classNameName="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>Joel Terrell</h1>
            <hr />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-items-center">
            <img
              className="bioImage"
              src="./images/JoelT.jpg"
              title="Joel Terrell"
              alt="Joel Terrell"
            />
          </div>
          <div
            id="bioContent"
            className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 align-items-center"
          >
            <p>
              Creative, Innovative, Self-Directed Team Player with 14+ yrs
              design experience with an eye for the unique, the awe-inspired and
              the exciting in creative visual communications. Front-end web
              developer leveraging graphic and web design background to build a
              more intuitive user experience on the web. Long term small
              business owner with a new certificate in full stack development
              from the University of Denver. Combining newly developed skills in
              JavaScript and jQuery with responsive web design, WordPress and a
              decade of graphic design experience. Known as a collaborative,
              dedicated and innovative problem solver with a focus on great UX
              and UI. I'm eager to work in a collaborative, exciting team to
              create great looking and superbly functional sites or apps.
              <br />
              <br />
              <strong>Skills & Specialties:</strong>
              <ul className="noStyle">
                <li>
                  ♦ Senior Graphic Designer with 9+ years of experience in the
                  management of the complete design process, from
                  conceptualization to delivery for print and web
                </li>
                <li>
                  ♦ Adobe Creative Suite: Photoshop, Illustrator, InDesign,
                  DreamWeaver
                </li>
                <li>♦ WordPress, Responsive themes</li>
                <li>
                  ♦ HTML5, CSS3, JavaScript, jQuery, MySQL, Node, MongoDB,
                  Mongoose, React.js
                </li>
                <li>
                  ♦ Branding - ability to create new or integrate old branding
                  styles and concepts
                </li>{" "}
                <li>
                  ♦ Eye catching Logos, Newsletters, Posters, Flyers, Business
                  Cards, Brochures and more
                </li>
                <li>
                  ♦ Photography - Family & Portrait photography, digital photo
                  editing, etc.
                </li>
                <li>
                  ♦ Communication, coordination and collaboration on multiple
                  projects with multiple clients
                </li>
              </ul>
            </p>
            <br />
            <p>
              Joel and his wife Terri love being in the outdoors: camping,
              kayaking, walking, hiking, gardening and exploring Colorado and
              playing with their Queensland Red Heeler named Patience
              (nick-name, Irony). They love Colorado sports in general; from the
              Broncos and the Colorado Buffaloes, to the Avalanche, the Rockies
              and even the Nuggets. Joel is part of the start-up community in
              Longmont, CO, and enjoys the benefits of being in the first
              Giga-bit city in the country! He's a musician that has played
              guitar for 25+ years, percussion and vocals. He enjoys the local
              open-mic music scene. Joel is also a photographer who loves nature
              photography and candid photos. Joel and his wife are proud
              graduates of the University of Colorado Boulder. Joel is currently
              a student at the University of Denver's Coding Bootcamp.
              <br />
              <a href="https://www.facebook.com/joel.terrell">
                <img
                  src="images/facebook-icon-basic-round-social-iconset-s-icons-7-300x300.png"
                  width="25px"
                  title="Find Me on Facebook"
                  alt="Find Me on Facebook"
                />
              </a>
              <a href="https://www.linkedin.com/in/joelterrell/">
                <img
                  src="images/linkedin.png"
                  width="25px"
                  title="Find Me on LinkedIn"
                  alt="Find Me on LinkedIn"
                />
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default About;
