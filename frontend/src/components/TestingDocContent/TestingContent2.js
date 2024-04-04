import React from "react";

// returns testing content 2 which discusses an example of normal, extreme and exceptional data in context
// of students test scores
const TestingContent2 = () => {

    // styles the table header
    const tableHeaderStyle = {
        backgroundColor: "#e978eb", // Set the background color to pink
        color: "white", // Set the text color to white for better contrast
    };
    
    // styles the alt table header
    const altTableHeaderStyle = {
        backgroundColor: "#a253a3", // Sets background to darker pink for contrast between columns
        color: "white",
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <p>This example is test data used to test a program that processes students' test scores out of 50.</p> 
                    <table className="table table-bordered" style={{fontSize: "12pt"}}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Test Case</th>
                                <th style={altTableHeaderStyle}>Explanation</th>
                                <th style={tableHeaderStyle}>Example where a score should be between 0 and 50</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Normal</td>
                                <td>Data that you would expect to work or be accepted and that lies within the range.</td>
                                <td>2, 45</td>
                            </tr>
                            <tr>
                                <td>Extreme</td>
                                <td>Data at the lower and upper limits of the range.</td>
                                <td>0, 50</td>
                            </tr>
                            <tr>
                                <td>Exceptional</td>
                                <td>Data that should not be accepted by the program.</td>
                                <td>-7, cadets</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>When testing programs, it is good practice to set up a test plan where you test at <b>least</b> two cases of data from each category.</p>
                    <p>It is also important to know that extreme test data is <b>NOT</b> boundary testing. Sometimes extreme data is referred to as ‘boundary testing’ but this is a little inaccurate. In the above example, boundary testing would test the extreme data of 0 and 50 but would also include -1 and 51.</p>
                </div>
            </div>
        </div>
    );
};

export default TestingContent2;