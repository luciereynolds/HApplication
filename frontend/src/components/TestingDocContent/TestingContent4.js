/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const TestingContent4 = () => {
    
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
                    <h3>Internal Commentary</h3> 
                    <p>Internal commentary lets a programmer add comments to their code that will not be translated to machine code when the program runs.
                        This is useful as they can be used to add descriptions, notes or explanations that can be read by anyone who has access to the code.
                        When working as part of a team, internal commentary lets other programmers get an idea of what your code is doing and why you made certain decisions.
                    </p>
                    <p>Different languages use different symbols to start a line of internal commentary. Languages used for web development also make use of internal commentary.
                        Some examples are:
                    </p>
                    <table className="table table-bordered" style={{fontSize: "12pt"}}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Language</th>
                                <th style={altTableHeaderStyle}>Symbol used to indicate commentary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Python</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>&lt;!-- --&gt;</td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>//</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>/*  /*</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TestingContent4;
