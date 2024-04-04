import React from "react";

// returns page directing users to log in if they try access a page that requires the user to 
// be logged in
const BlockedPage = () => {
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem" }}>
          <h2><b>Oops!</b></h2>
          <p>It appears you don't have access to this page, try logging in!</p>
          <a href="/login" className="homepage-button" style={{textDecoration: 'none' }}>
            Log in!
          </a>
        </div>
      </div>
    </div>
  )
};

export default BlockedPage;