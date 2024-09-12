import React from "react";

function Accessories(){
    return(
        <div class="w-[90%] mx-auto">
            <h3 class="capitalize text-3xl font-bold mt-[50px]">Accessories for men and women</h3>

            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]">
                <div class="product shadow-lg mt-[50px]">
                    <img src={ require("../img/unisex.jpg") } alt="" class="rounded-lg" />
                    <div class="pl-3 pb-4">
                        <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">unisex silver-Tonned series 3 smart watch</a></h3>
                        <p class="text-[17px] capitalize mb-[10px]">apple</p>
                        <p class="font-bold text-[20px]">Tk 39000</p>
                    </div>
                </div>
                <div class="product shadow-lg mt-[50px]">
                    <img src={ require("../img/black-green.jpg")} alt="" class="rounded-lg" />
                    <div class="pl-3 pb-4">
                        <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">unisex black & green reflex 2.0 smart band</a></h3>
                        <p class="text-[17px] capitalize mb-[10px]">fastrack</p>
                        <p class="font-bold text-[20px]">Tk 2500</p>
                    </div>
                </div>
                <div class="product shadow-lg mt-[50px]">
                    <img src={ require("../img/black-galaxy.jpg")} alt="" class="rounded-lg" />
                    <div class="pl-3 pb-4">
                        <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">unisex black galaxy fit fitness band</a></h3>
                        <p class="text-[17px] capitalize mb-[10px]">samsung</p>
                        <p class="font-bold text-[20px]">Tk 13000</p>
                    </div>
                </div>
                <div class="product shadow-lg mt-[50px]">
                    <img src={ require("../img/earbuds.jpg")} alt="" class="rounded-lg" />
                    <div class="pl-3 pb-4">
                        <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">gear iconX black cort-Free fitness earbuds</a></h3>
                        <p class="text-[17px] capitalize mb-[10px]">samsung</p>
                        <p class="font-bold text-[20px]">Tk 17000</p>
                    </div>
                </div>
                <div class="product shadow-lg mt-[50px]">
                    <img src={ require("../img/airpods.jpg")} alt="" class="rounded-lg" />
                    <div class="pl-3 pb-4">
                        <h3 class="mt-[20px] mb-[10px] text-[16px] font-bold capitalize"><a href="/details.html">white 2nd gen airpods with charging case</a></h3>
                        <p class="text-[17px] capitalize mb-[10px]">apple</p>
                        <p class="font-bold text-[20px]">Tk 17500</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessories;
