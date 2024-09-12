import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu(){
    return(
        <div class="h-[80px] shadow-lg flex items-center">
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-[90%] mx-auto">
            <div class="text-[20px] col-span-3 sm:col-span-1 md:text-[24px] lg:text-[28px] xl:text-[32px] flex items-center justify-center">
                <p class=""><b>SHOP</b>LANE</p>
            </div>
            <div class="menu col-span-2 flex items-center gap-4 md:gap-10 justify-end xl:justify-center md:mr-5">
                <a href="" class="">CLOTHING</a>
                <a href="" class="">ACCESSORIES</a>
            </div>
            <div class="hidden lg:block col-span-3 flex items-center justify-end">
                <form action="" class="lg:w-[350px] xl:w-[400px] relative mr-[40px]">
                    <input type="text" class="bg-[#F1F1F1] w-[400px] pl-[40px] py-[8px]" placeholder="search for Clothing and Accessories" />
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> 
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>
            </div>
            <div class="flex items-center justify-end gap-[30px] text-2xl">
                <a href="" class=""><i class="fa-solid fa-cart-shopping"></i></a>
                <a href="" class=""><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </div>
    )
}

export default Menu;
