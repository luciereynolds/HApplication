import React from "react";

// Data Type Content 1, shows in DataTypesLesson. Discusses how data is stored in different data types
// such as integer, string and boolean

const DataTypeContent1 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>What are Data Types? </h3>
                    <p>Computers store data as different data types. Numbers are stored in integers or real numbers whilst text is stored in strings.</p>
                    <p>For most programming languages, the computer must be told the type of data that will be held in a variable. (A variable is a container that holds a specific piece of information)</p>
                    <p>Integer and String are two common types of data.</p>
                    <ul>
                        <li><b>Integer (whole numbers)</b> such as 12, -3839 and 100,000.</li>
                        <li><b>String (characters)</b> such as names or postcodes. (Can also include phone numbers as Integers cannot start with <b>0</b>.</li>
                    </ul>
                    <p>In reference language you can declare a variable and its data type as follows:</p>
                    {/* Shows how lines of code would look in a real world scenario using reference language  */}
                    <pre className="code-block">
                        <code className="language-code">
                            <span className="line-number">1</span>
                            <span className="comment">DECLARE score AS INTEGER</span>
                        </code>
                    </pre>
                    <p>This would create a variable called score. The computer would now know that whole numbers (integers) can be stored within the score variable.</p>
                    <p>If you asked for someone's test mark (integer) and they typed in their name (string) the programming language would find an error. This is because it is only possible to store whole numbers using the INTEGER data type.</p>
                </div>
            </div>
        </div>
    );
};

export default DataTypeContent1;