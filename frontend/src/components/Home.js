import React from "react";
import Image from "../images/GamingHome.png";

// returns the homepage with information about the site and a direct link to the lessons page
const Home = () => {
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem" }}>
          <br />
          <h3><b>Welcome to the exciting world of National 4 Computer Science!</b></h3>
          <br></br>
          <p>
            We understand that National 4 Computer Science can seem like a labyrinth
            of new concepts and terminology. But fear not! Our mission is to
            transform learning into an adventure, where you'll discover the magic
            behind computers, explore the language of coding, and unleash your
            creativity in the digital landscape.
          </p>
          <p>
            Feel free to explore our lessons and then, see where you rank on our
            leaderboard! How many trophies can you earn?
          </p>
          <p>
            So, are you ready to level up your computer science skills? Let the
            adventure begin!
          </p>
          <br/>
          <a href="/lessons" className="homepage-button" style={{textDecoration: 'none' }}>
            Get Learning!
          </a>
        </div>
        <div className="col-md p-3 mx-2 text-dark order-md-last">
          <img
            src={Image}
            alt="Child using computer on beanbag"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
