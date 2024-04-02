import React from "react";

// Low Level Content 4 discusses how text is stored using ASCII with the letter A as an example
const LowLevelContent4 = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>How is text stored in a computer?</h3>
                    <p>To store text in a computer we give each character its own special number. This number is called its code. We can then store this code in the computer using binary ones and zeros.</p>
                    <p>There are several different ways of giving characters codes, but the most popular one is called ASCII.</p>
                    <p>Pronounced 'ask-ee', ASCII stands for American Standard Code for Information Interchange. With ASCII, each letter, number or symbol is given a number code from 0 to 127.</p>
                    <p>For example, the ASCII code for uppercase A is 65 and for lowercase a is 97. Most computers use ASCII codes to represent text, which makes it possible to transfer data from one computer to another.</p>
                    <p>In binary this is represented as:</p>
                    <p><b>A = 0100 0001</b></p>
                    <p>Each ASCII character is made up of eight bits in total but only uses seven of these bits to represent a character. One bit is used for error checking during transmission, this is known as a parity bit.</p>
                    <p>This means that ASCII code only allows for the representation of 128 characters. In order to represent more character sets, it is possible to use Unicode instead of ASCII. Unicode allows for the representation of up to 65, 536 characters.</p>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent4;
