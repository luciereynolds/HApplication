import React from "react";

// displays testing content 3 with information on making code readable with internal commentary
// and meaningful identifiers
const TestingContent3 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>How do you make your code readable?</h3> 
                    <p>Often, programmers will work on each other's code. This means code must be written so it is easy to understand by others. It's also important that it's written in a way that is easy to understand if you come back to it months or even years later!</p>
                    <p>There are a few techniques that can help with this:</p>
                    <ul>
                        <li>Internal Commentary</li>
                        <li>Meaningful Identifiers (Variable Names)</li>
                    </ul>
                    <p>Let's look more at these techniques!</p>
                </div>
            </div>
        </div>
    );
};

export default TestingContent3;