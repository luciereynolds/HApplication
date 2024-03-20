import React from "react";

const DataTypeContent2 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>How do we store numbers? </h3>
                    <p>An integer is a whole number, a number without a decimal place. Integers can be positive or negative. Examples of integers are: 24, -36, 4303, -89730, 3, 7903493, 0.</p>
                    <p>The reference language shown below will declare a variable named ‘age’ as an integer. This program will only accept a whole number. Anything else will cause it to return an error.</p>
                    <p><b>DECLARE age AS INTEGER</b></p>
                    <p><b>SEND “Please enter your age” TO DISPLAY</b></p>
                    <p><b>RECEIVE age FROM (INTEGER) KEYBOARD</b></p>
                    <p>When the number 45 is entered, the program works fine.</p>
                    <p>However, if the user entered the word <b>old</b> instead, an error would be shown as the program was expecting an integer (whole number).</p>
                </div>
            </div>
        </div>
    );
};

export default DataTypeContent2;