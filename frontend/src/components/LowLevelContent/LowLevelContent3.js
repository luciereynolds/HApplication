import React, { useState } from "react";

const LowLevelContent3 = () => {
    // State to track the binary values and the currently hovered index
    const [binaryValues, setBinaryValues] = useState([0, 0, 0, 0, 1, 1, 0, 1]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Function to toggle between 0 and 1 when a cell is clicked
    const toggleBinaryValue = (index) => {
        const newBinaryValues = [...binaryValues];
        newBinaryValues[index] = newBinaryValues[index] === 0 ? 1 : 0;
        setBinaryValues(newBinaryValues);
    };

    // Function to calculate the decimal number based on binary values
    const calculateDecimalNumber = () => {
        return binaryValues.reduce((acc, value, index) => acc + value * Math.pow(2, 7 - index), 0);
    };

    const tableHeaderStyle = {
        backgroundColor: "#2eba68", // Set the background color to green
        color: "white", // Set the text color to white for better contrast
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>Let's make some binary representations of decimal numbers!</h3>
                    <p>Add 1s and 0s to the columns to see what the decimal representation is!</p>
                    <p>
                        <i>Click the columns below to switch between 1s and 0s</i>
                    </p>
                    <table className="table table-bordered" style={{ tableLayout: "fixed" }}>
                        <colgroup>
                            {[128, 64, 32, 16, 8, 4, 2, 1].map((value, index) => (
                                <col key={index} style={{ width: "3%" }} />
                            ))}
                            <col style={{ width: "3%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                {[128, 64, 32, 16, 8, 4, 2, 1].map((value, index) => (
                                    <th
                                        key={index}
                                        onClick={() => toggleBinaryValue(index)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        style={{
                                            backgroundColor: hoveredIndex === index ? "#d3d3d3" : "",
                                            ...tableHeaderStyle,
                                        }}
                                    >
                                        {value}
                                    </th>
                                ))}
                                <th style={tableHeaderStyle}>=</th>
                                <th style={tableHeaderStyle}>Decimal Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {binaryValues.map((value, index) => (
                                    <td
                                        key={index}
                                        onClick={() => toggleBinaryValue(index)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        style={{ backgroundColor: hoveredIndex === index ? "#d3d3d3" : "" }}
                                    >
                                        {value}
                                    </td>
                                ))}
                                <td onClick={() => { /* Optional: Add a function for additional handling */ }}>=</td>
                                <td onClick={() => { /* Optional: Add a function for additional handling */ }}>
                                    {calculateDecimalNumber()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent3;
