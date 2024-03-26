import React from "react";

const TestingContent6 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>Meaningful Identifiers</h3>
                    <p>
                        Making sure you use variable names that describe what the variable contains is very
                        important. Poor variable names can make it difficult to work out what is going on in
                        your program.
                    </p>
                    <p>For example, the use of the word "data" is not meaningful:</p>
                    <pre className="code-block">
                        <code className="language-code">
                            <span className="line-number">1</span>
                            <span className="comment">DECLARE data AS STRING INITIALLY " "</span>
                        </code>
                    </pre>
                    <p>
                        'data' is an ambiguious term that can be used to describe lots of things! It is always
                        better to use names that relate to the value you are going to store. For example:
                    </p>
                    <pre className="code-block">
                        <code className="language-code">
                            <span className="line-number">1</span>
                            <span className="comment">DECLARE firstName AS STRING INITIALLY " "</span>
                        </code>
                    </pre>
                    <p>'firstName' is better as now we know exactly what is stored in that variable!</p>
                    <p>The same logic applies to subprograms and functions. Function names should describe what the function does.
                        'Function2' is not a good function name for a function used to calculate an average score. 'CalculateAverage' 
                        would be much better.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestingContent6;
