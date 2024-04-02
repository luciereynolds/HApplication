import React from "react";

// low level content 2 discusses how binary representations of numbers are formed with an example of the number 13
const LowLevelContent2 = () => {
    
    // styles the header of the table featured in the lesson content
    const tableHeaderStyle = {
        backgroundColor: "#2eba68", // Sets the background color to green
        color: "white", // Sets the text color to white for better contrast
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <p>
                        Looking at the following table, the top column represents decimal numbers that represent the value of each binary column.
                        If there is a <b>1</b> in the column, that means your decimal number is made up of the number at the top of that column! If there is a <b>0</b> then that means
                        you don't include that number in your decimal number.
                    </p>
                    <p>
                        So let's make the number 13!
                    </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>128</th>
                                <th style={tableHeaderStyle}>64</th>
                                <th style={tableHeaderStyle}>32</th>
                                <th style={tableHeaderStyle}>16</th>
                                <th style={tableHeaderStyle}>8</th>
                                <th style={tableHeaderStyle}>4</th>
                                <th style={tableHeaderStyle}>2</th>
                                <th style={tableHeaderStyle}>1</th>
                                <th style={tableHeaderStyle}> </th>
                                <th style={tableHeaderStyle}>Decimal Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>=</td>
                                <td>13</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>So as you can see from the binary table above, the binary representation
                        for 13 is <b>00001101</b>. If you ignore the 0s and look at where we have 1s, you can see
                        we have 1s in the <b>8</b>, <b>2</b>, and <b>1</b> column. To work out what decimal number we 
                        are storing we just add these numbers together.
                    </p>
                    <p>
                    So...
                    </p>
                    <h5 style={{textAlign: "center"}}>
                        00001101 = 8 + 2 + 1 = 13
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent2;
