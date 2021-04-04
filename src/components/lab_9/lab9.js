import React from 'react'
import img from './img.bmp'

const Lab9 = () => {

    // var bmp = require("bmp-js");
    // var bmpBuffer = fs.readFileSync('bit24.bmp');
    // var bmpData = bmp.decode(bmpBuffer);

    return(
        <div>
            <img src={img}/>
        </div>
    )
}

export default Lab9