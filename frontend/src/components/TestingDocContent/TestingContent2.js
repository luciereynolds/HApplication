import React from "react";

const TestingContent2 = () => {

    const tableHeaderStyle = {
        backgroundColor: "#e978eb", // Set the background color to pink
        color: "white", // Set the text color to white for better contrast
    };
    
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
                </div>
            </div>
        </div>
    );
};

export default TestingContent2;