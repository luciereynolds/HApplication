import React from "react";

const LowLevelContent2 = () => {
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
                            <th>128</th>
                            <th>64</th>
                            <th>32</th>
                            <th>16</th>
                            <th>8</th>
                            <th>4</th>
                            <th>2</th>
                            <th>1</th>
                            <th> </th>
                            <th>Decimal Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>=</td>
                            <td>13</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>So as you can see from the binary table above, the binary representation
                        for 13 is <b>00001011</b>. If you ignore the 0s and look at where we have 1s, you can see
                        we have 1s in the <b>8</b>, <b>2</b> and <b>1</b> column. To work out what decimal number we 
                        are storing we just add these numbers together.
                    </p>
                    <p>
                    So...
                    </p>
                    <h5 style={{textAlign: "center"}}>
                        00001011 = 8 + 2 + 1 = 13
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent2;