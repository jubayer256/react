import React from "react";
import img1 from "../img/img1.png"


function Slider(){
    return(
        <div class="w-[90%] mx-auto my-[50px]">
            <div class="slider">
                <img src={img1} alt="" />
            </div>
        </div>
    )
}

export default Slider;
