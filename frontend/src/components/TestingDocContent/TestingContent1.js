import React from "react";

const TestingContent1 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>How do we test and document our programs?</h3> 
                    <p>When code is easy to read, programmers are less likely to make mistakes! Having legible code also allows programs to be easily checked for errors before they are released!</p>
                    <h6>Let's talk about testing!</h6>
                    <p>To test a program, it is important to test using normal, extreme and exceptional data. The data that falls into each of these categories depends on what the program is designed to do.</p>
                    <p>What is normal, extreme and exceptional?</p>
                    <ul>
                        <li><b>Normal</b> data is data that you would expect to work/data that would be accepted and lies within the expected range.</li>
                        <li><b>Extreme</b> data is data at the upper and lower limits of the range.</li>
                        <li><b>Exceptional</b> data is data that should <b>not</b> be accepted by the program.</li>
                    </ul>
                    <p>Next we'll look at an example of testing and the normal, extreme and exceptional data used.</p>
                </div>
            </div>
        </div>
    );
};

export default TestingContent1;