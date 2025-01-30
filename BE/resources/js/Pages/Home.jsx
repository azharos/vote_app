import React from "react";
import { LayoutFE } from "../Components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Home({ Konfigurasi }) {
    return (
        <LayoutFE menuActive="Topup" logo={Konfigurasi.logo}>
            <section className="py-8 bg-secondary-50">
                <div className="container relative">
                    <Swiper
                        navigation={true}
                        modules={[Autoplay]}
                        className="w-full"
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        loop
                    >
                        <SwiperSlide>
                            <div className="w-full rounded-3xl overflow-hidden">
                                <img
                                    src="https://fastly.picsum.photos/id/718/1476/505.jpg?hmac=Oi_WXjKJldDLYLdleX_8eHvbsI3qe-r-7LpUMTklcLM"
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full rounded-3xl overflow-hidden">
                                <img
                                    src="https://fastly.picsum.photos/id/381/1476/505.jpg?hmac=rWx1xP4cltnB3sAiR4iyG1FkK7v_0VPKCzUhK4E58jM"
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="h-12 w-12 rounded-full justify-center items-center text-lg absolute left-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer hidden lg:flex bg-muted-50">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="h-12 w-12 rounded-full justify-center items-center text-lg absolute right-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer hidden lg:flex bg-muted-50">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </section>
            <section className="pt-8">
                <div className="container">
                    <h3 className="text-lg font-semibold uppercase leading-relaxed tracking-wider font-primary">
                        🔥 POPULER SEKARANG!
                    </h3>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 pt-5">
                        <div className="flex gap-4 items-center cursor-pointer duration-300 ease-in-out p-3 rounded-xl bg-card-popular hover:shadow-2xl hover:ring-2 hover:ring-primary bg-popular">
                            <img
                                src="/image/produk-popular/ml.webp"
                                alt=""
                                className="h-14 w-14 rounded-lg object-cover object-center md:h-20 md:w-20"
                            />
                            <div className="">
                                <h3 className="font-primary font-semibold text-xxs md:text-base truncate w-[80px] sm:w-[125px] md:w-[150px]">
                                    Mobile Legend
                                </h3>
                                <p className="font-secondary text-xxs md:text-sm">
                                    Moonton
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center cursor-pointer duration-300 ease-in-out p-3 rounded-xl bg-card-popular hover:shadow-2xl hover:ring-2 hover:ring-primary bg-popular">
                            <img
                                src="/image/produk-popular/pubg.webp"
                                alt=""
                                className="h-14 w-14 rounded-lg object-cover object-center md:h-20 md:w-20"
                            />
                            <div className="">
                                <h3 className="font-primary font-semibold text-xxs md:text-base truncate w-[80px] sm:w-[125px] md:w-[150px]">
                                    PUBG Mobile
                                </h3>
                                <p className="font-secondary text-xxs md:text-sm">
                                    Tencent Games
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center cursor-pointer duration-300 ease-in-out p-3 rounded-xl bg-card-popular hover:shadow-2xl hover:ring-2 hover:ring-primary bg-popular">
                            <img
                                src="/image/produk-popular/freefire.webp"
                                alt=""
                                className="h-14 w-14 rounded-lg object-cover object-center md:h-20 md:w-20"
                            />
                            <div className="">
                                <h3 className="font-primary font-semibold text-xs md:text-base truncate w-[80px] sm:w-[125px] md:w-[150px]">
                                    Free Fire
                                </h3>
                                <p className="font-secondary text-xs md:text-sm">
                                    Garent
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container">
                    <div className="flex gap-x-3 mb-3 w-full overflow-x-auto scroll-vertical pb-2">
                        <div className="px-4 py-2 text-sm text-white bg-primary hover:bg-primary-75 rounded-md font-primary whitespace-nowrap cursor-pointer duration-300 ease-in-out">
                            Top Up
                        </div>
                        <div className="px-4 py-2 text-sm text-white bg-muted rounded-md font-primary whitespace-nowrap cursor-pointer">
                            Joki MLBB
                        </div>
                        <div className="px-4 py-2 text-sm text-white bg-muted rounded-md font-primary whitespace-nowrap cursor-pointer">
                            Pulsa & Data
                        </div>
                        <div className="px-4 py-2 text-sm text-white bg-muted rounded-md font-primary whitespace-nowrap cursor-pointer">
                            Tagihan
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
                        <div className="group-product relative rounded-2xl duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-primary">
                            <img
                                src="/image/produk-popular/ml.webp"
                                alt=""
                                className="aspect-[4/6] object-cover object-center"
                            />
                            <div className="group-text absolute left-0 bottom-0 w-full h-full flex justify-end flex-col px-5 pb-5 z-50">
                                <h2 className="truncate font-primary font-semibold text-sm sm:text-base">
                                    Mobile Legends
                                </h2>
                                <p className="truncate text-xs">Moonton</p>
                            </div>
                            <div className="bg-shadow absolute left-0 top-0 w-full h-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutFE>
    );
}
