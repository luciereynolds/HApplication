import React from "react";

const Login = () => {
    return (
        <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
            <div className="row">
                <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem" }}>
                    <div className="login-wrapper">
                        <h1>Please Log In</h1>
                        <form>
                            <label>
                                <p>Username</p>
                                <input type="text" />
                            </label>
                            <label>
                                <p>Password</p>
                                <input type="password" />
                            </label>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;