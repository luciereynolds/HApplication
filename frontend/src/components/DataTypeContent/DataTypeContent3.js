import React from "react";

// Data Type Content 3 discusses how text is stored using String. Demonstrates a variety of different types of string
// to emphasise that number characters can also be stored, particularly like an address or phone number.

const DataTypeContent3 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>Storing Text </h3>
                    <p>To store text, use the string data type. Think of a word or sentence as just a list (string) of characters.</p>
                    <p>Strings can store numbers as well as text. You would not use a string to store a number that you wanted to carry out calculations with. The following are examples of data that could be held in a string:</p>
                    <ul>
                        <li>Mark</li>
                        <li>I enjoy coding.</li>
                        <li>Cowcaddens Rd, Glasgow G4 0BA</li>
                        <li>01240 890388</li>
                    </ul>
                    <p>The last example is clearly a phone number. You might expect a phone number to be stored as an integer but this is not the case.</p>
                    <p>The main advantage of storing data as integers is so that you can use it in calculations. We do not normally do this with phone numbers.</p>
                    <p><b>Fun Fact!</b></p>
                    <p>The string data type can store words, numbers, or words and numbers together like an address.</p>
                </div>
            </div>
        </div>
    );
};

export default DataTypeContent3;