import React from "react";
import navyblue from '../img/navyblue.jpg'

function Cloth(){
    return(
        <div class="w-[90%] mx-auto">
        <h3 class="capitalize text-3xl font-bold">Clothing for men and women</h3>

        <div class="products grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]">
            <div class="product shadow-lg mt-[50px]">
                <img src={navyblue} alt="" class="rounded-lg" />
                <div class="pl-3 pb-4">
                    <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">Men navy blue solid sweatshirt</a></h3>
                    <p class="text-[17px] capitalize mb-[10px]">united colors of benetton</p>
                    <p class="font-bold text-[20px]">Tk 2500</p>
                </div>
            </div>
            <div class="product shadow-lg mt-[50px]">
                <img src={ require("../img/black.jpg") } alt="" class="rounded-lg" />
                <div class="pl-3 pb-4">
                    <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">Men Black MAMGP T7 Sweat Sporty Jacket</a></h3>
                    <p class="text-[17px] capitalize mb-[10px]">Puma</p>
                    <p class="font-bold text-[20px]">Tk 6000</p>
                </div>
            </div>
            <div class="product shadow-lg mt-[50px]">
                <img src={ require("../img/shoe.jpg") } alt="" class="rounded-lg" />
                <div class="pl-3 pb-4">
                    <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">men black action parkview lifestyle shoes</a></h3>
                    <p class="text-[17px] capitalize mb-[10px]">united colors of benetton</p>
                    <p class="font-bold text-[20px]">Tk 5500</p>
                </div>
            </div>
            <div class="product shadow-lg mt-[50px]">
                <img src={ require("../img/jacket.jpg") } alt="" class="rounded-lg" />
                <div class="pl-3 pb-4">
                    <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">women black solid lightweight leather jacket</a></h3>
                    <p class="text-[17px] capitalize mb-[10px]">bareskin</p>
                    <p class="font-bold text-[20px]">Tk 8000</p>
                </div>
            </div>
            <div class="product shadow-lg mt-[50px]">
                <img src={ require("../img/blue.jpg") } alt="" class="rounded-lg" />
                <div class="pl-3 pb-4">
                    <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">women blue solid shirt dress</a></h3>
                    <p class="text-[17px] capitalize mb-[10px]">sassafras</p>
                    <p class="font-bold text-[20px]">Tk 4500</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cloth;