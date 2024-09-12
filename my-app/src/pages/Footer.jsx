import React from "react";

function Footer(){
    return(
        <div class="bg-[#1D1D1D] py-[100px] mt-[50px]">
        <div class="text-white w-[90%] md:w-[70%] lg:w-[60%] mx-auto uppercase grid grid-cols-4">
            <div class="">
                <h3 class="text-[18px]">Online store</h3>
                <a href="" class="text-[13px]">Men Clothing</a>
                <a href="" class="text-[13px] block">women Clothing</a>
                <a href="" class="text-[13px] block">men Accessories</a>
                <a href="" class="text-[13px] block">women Accessories</a>
            </div>
            <div class="">
                <h3 class="text-[18px]">Helpful link</h3>
                <a href="" class="text-[13px] block">Home</a>
                <a href="" class="text-[13px] block">About</a>
                <a href="" class="text-[13px] block">Contact</a>
            </div>
            <div class="">
                <h3 class="text-[18px]">Partners</h3>
                <a href="" class="text-[13px] block">zara</a>
                <a href="" class="text-[13px] block">levis</a>
                <a href="" class="text-[13px] block">puma</a>
                <a href="" class="text-[13px] block">+ many more</a>
            </div>
            <div class="">
                <h3 class="text-[18px]">address</h3>
                <a href="" class="text-[13px] block">house 21</a>
                <a href="" class="text-[13px] block">avenue 2</a>
                <a href="" class="text-[13px] block">Mirpur dohs</a>
                <a href="" class="text-[13px] block">dhaka, bangladesh</a>
            </div>
        </div>
    </div>
    )
}

export default Footer;