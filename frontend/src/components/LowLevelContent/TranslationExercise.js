import React, { useState } from "react";

const TranslationExercise = () => {
    const [inputValue, setInputValue] = useState("");
    const [, setIsCorrect] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const checkAnswer = () => {
        const correctAnswer = "great job cadet";
        if (inputValue === correctAnswer) {
            setIsCorrect(true);
            alert("Congratulations!");
        } else {
            setIsCorrect(false);
            alert("Oops, that's not quite right. Remember to use the table for help!");
        }
    };

    const tableHeaderStyle = {
        backgroundColor: "#2eba68",
        color: "white",
    };

    const altTableHeaderStyle = {
        backgroundColor: "#258a4f",
        color: "white",
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>Let's try solve this riddle...</h3>
                    <p>The following information is a secret message written using ASCII. Can you translate it? Use the table at the side for help.</p>
                    <h6>Secret Message!</h6>
                    <p><b>103&nbsp;&nbsp;114&nbsp;&nbsp;101&nbsp;&nbsp;97&nbsp;&nbsp;116&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;106&nbsp;&nbsp;111&nbsp;&nbsp;98&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99&nbsp;&nbsp;97&nbsp;&nbsp;100&nbsp;&nbsp;101&nbsp;&nbsp;116</b></p>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <br/>
                    <button onClick={checkAnswer}>Check Answer</button>
                </div>
                <div className="col p-3 mx-2">
                    <table className="table table-bordered" style={{ fontSize: "10pt" }}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>ASCII Code</th>
                                <th style={altTableHeaderStyle}>Letter</th>
                                <th style={tableHeaderStyle}>ASCII Code</th>
                                <th style={altTableHeaderStyle}>Letter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>97</td>
                                <td>a</td>
                                <td>110</td>
                                <td>n</td>
                            </tr>
                            <tr>
                                <td>98</td>
                                <td>b</td>
                                <td>111</td>
                                <td>o</td>
                            </tr>
                            <tr>
                                <td>99</td>
                                <td>c</td>
                                <td>112</td>
                                <td>p</td>
                            </tr>
                            <tr>
                                <td>100</td>
                                <td>d</td>
                                <td>113</td>
                                <td>q</td>
                            </tr>
                            <tr>
                                <td>101</td>
                                <td>e</td>
                                <td>114</td>
                                <td>r</td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>f</td>
                                <td>115</td>
                                <td>s</td>
                            </tr>
                            <tr>
                                <td>103</td>
                                <td>g</td>
                                <td>116</td>
                                <td>t</td>
                            </tr>
                            <tr>
                                <td>104</td>
                                <td>h</td>
                                <td>117</td>
                                <td>u</td>
                            </tr>
                            <tr>
                                <td>105</td>
                                <td>i</td>
                                <td>118</td>
                                <td>v</td>
                            </tr>
                            <tr>
                                <td>106</td>
                                <td>j</td>
                                <td>119</td>
                                <td>w</td>
                            </tr>
                            <tr>
                                <td>107</td>
                                <td>k</td>
                                <td>120</td>
                                <td>x</td>
                            </tr>
                            <tr>
                                <td>108</td>
                                <td>l</td>
                                <td>121</td>
                                <td>y</td>
                            </tr>
                            <tr>
                                <td>109</td>
                                <td>m</td>
                                <td>122</td>
                                <td>z</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TranslationExercise;