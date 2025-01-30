import React from "react";
import { CardTitle, LayoutCMS } from "../../Components";
import { Rupiah } from "../../Utils";

const CardStatistik = ({ total = 0, title = "", icon = "" }) => {
    return (
        <div className="flex gap-2.5 items-center">
            <div className="size-13 sm:size-15 rounded-full bg-meta-3 flex justify-center items-center">
                <i
                    className={`fa-solid ${icon} text-white text-xl sm:text-2xl`}
                ></i>
            </div>
            <div className="">
                <div className="text-3xl sm:text-3xl text-white font-medium mb-0">
                    {total}
                </div>
                <span className="text-sm">{title}</span>
            </div>
        </div>
    );
};

export default function Dashboard({ Konfigurasi }) {
    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <CardTitle title="Statistik">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
                    <CardStatistik total={0} title="Games" icon="fa-gamepad" />
                    <CardStatistik total={0} title="Produk" icon="fa-cubes" />
                    <CardStatistik
                        total={0}
                        title="Pembelian"
                        icon="fa-cart-shopping"
                    />
                    <CardStatistik total={0} title="Pengguna" icon="fa-users" />
                </div>
            </CardTitle>

            <div className="grid grid-cols-2 gap-5">
                <CardTitle title="Top 5 Saldo Terbanyak">
                    <div className="border border-bodydark divide-y divide-bodydark rounded text-bodydark1">
                        <div className="grid grid-cols-2 px-3 py-2 font-semibold">
                            <div className="">Username</div>
                            <div className="">Saldo</div>
                        </div>
                        <div className="grid grid-cols-2 px-3 py-2">
                            <div className="">Marwah</div>
                            <div className="">Rp {Rupiah("1000000")}</div>
                        </div>
                        <div className="grid grid-cols-2 px-3 py-2">
                            <div className="">Joko</div>
                            <div className="">Rp {Rupiah("200000")}</div>
                        </div>
                    </div>
                </CardTitle>

                <CardTitle title="Games Terpopuler">
                    <div className="border border-bodydark divide-y divide-bodydark rounded text-bodydark1">
                        <div className="grid grid-cols-2 px-3 py-2 font-semibold">
                            <div className="">Games</div>
                            <div className="">Saldo</div>
                        </div>
                        <div className="grid grid-cols-2 px-3 py-2">
                            <div className="text-meta-3">Marwah</div>
                            <div className="">Rp {Rupiah("1000000")}</div>
                        </div>
                        <div className="grid grid-cols-2 px-3 py-2">
                            <div className="text-meta-3">Joko</div>
                            <div className="">Rp {Rupiah("200000")}</div>
                        </div>
                    </div>
                </CardTitle>
            </div>
        </LayoutCMS>
    );
}
