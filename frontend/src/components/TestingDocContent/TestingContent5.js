import React from "react";

// testing content 5 discusses internal commentary with an example in reference language
const TestingContent5 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>Example of internal commentary</h3> 
                    <p>
                        In the reference language example below, internal commentary lines start with the <b>#</b> character 
                        and are shown on lines 1, 2, and 3.
                    </p>
                    <pre className="code-block">
                        <code className="language-code">
                            <span className="line-number">1</span>
                            <span className="comment"># This is an input validation algorithm</span>
                            <br />
                            <span className="line-number">2</span>
                            <span className="comment"># Created by James Bond on 15/04/16</span>
                            <br />
                            <span className="line-number">3</span>
                            <span className="comment"># 0 is an accepted value for babies under 1-year-old</span>
                            <br />
                            <span className="line-number">4</span>
                            <span>DECLARE age AS INTEGER INITIALLY 0</span>
                            <br />
                            <span className="line-number">5</span>
                            <span>RECEIVE age FROM KEYBOARD</span>
                            <br />
                            <span className="line-number">6</span>
                            <span>WHILE age &lt; 0 OR age &gt; 130 DO</span>
                            <br />
                            <span className="line-number">7</span>
                            <span>SEND “Please enter a valid age” TO DISPLAY</span>
                            <br />
                            <span className="line-number">8</span>
                            <span>RECEIVE age FROM KEYBOARD</span>
                            <br />
                            <span className="line-number">9</span>
                            <span>END WHILE</span>
                        </code>
                    </pre>
                    <p>
                        Having internal commentary makes it easier to see what's going on in your program. If you're looking 
                        at someone else's code, it can save you time having to work out what each line of code is doing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestingContent5;
