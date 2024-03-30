import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Initialize error state

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
  
    if (response.error) {
      setError('Incorrect username or password');
    } else if (response.token) { // Check if token property exists
      setToken(response.token);
      // Redirect to homepage after successful login
      window.location.href = '/'; 
    } else {
      setError('Incorrect username or password');
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Please Log In</h1>
              <form onSubmit={handleSubmit}>
                {error && <p className="text-danger">{error}</p>} {/* Display error if it exists */}
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
