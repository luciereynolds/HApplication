import React from "react";

// Low level content 1 displays an introduction to how computers store information in binary
const LowLevelContent1 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <h3>So how do computers store information?</h3> 
                    <p>All data is stored in computers using 1s and 0s!</p>
                    <h6>Storing Numbers</h6>
                    <p>Everything in a computer is stored as 1s and 0s. This is known as binary. And we mean <b>everything</b>!
                    Every photograph taken using your phone, every song you listen to and every video you watch online is stored as binary.
                    </p>
                    <p>
                        This includes numbers too! But how is this possible?! How can we store a number like 13 only using 1s and 0s?!
                        Usually we  write the numbers in decimal which is how you write the number 13 now. But <b>binary</b> is based around the number
                        two and uses the number symbols <b>0</b> and <b>1</b>. Instead of units, tens and hundreds... binary uses units, twos, fours and so on.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent1;