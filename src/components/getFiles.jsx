/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Getfile(file) {
    const req = file.data
    const reqLength = file.data.length - 5
    const getType = req.substring(reqLength);
    const splitType = getType.split(".")[1]


    return (
        <>
            <div>
                ABC
            </div>
        </>
    );
}

export default Getfile;
