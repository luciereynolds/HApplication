import React from "react";
import SortableContainer from "./SortableContainer";


const DataTypesStructures = () => {
    const initialItems = {
        root: ['true', '2', 'Hello World!', '01414960999', 'false', '362'],
        container1: [],
        container2: [],
        container3: [],
    };

    return (
        <div className="container-fluid">
            <h3 className="text-center">Sort the data into the correct data type! 🤖</h3>
            <p className="text-center">Click and drag the data into the correct section.</p>
            <div className="row">
            <div className="col text-center"></div>
            <div className="col text-center"><h5>String</h5></div>
            <div className="col text-center"><h5>Integer</h5></div>
            <div className="col text-center"><h5>Boolean</h5></div>
            </div>
            <div className="row">
                <SortableContainer initialItems={initialItems} />
            </div>
        </div>
    );
};

export default DataTypesStructures;