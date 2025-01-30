import React, { useState } from "react";
import { ButtonWithIconTitle, LayoutBE } from "../../Components";
import { Rupiah } from "../../Utils";
import { Link } from "@inertiajs/react";

export default function Reload({ Konfigurasi }) {
    const dataJumlah = [10000, 50000, 100000, 200000, 500000, 1000000];

    const [form, setForm] = useState({
        jumlah: "",
        metode: "",
    });

    const onChange = (input, txt) => {
        setForm((prevState) => ({ ...prevState, [input]: txt }));
    };

    return (
        <LayoutBE menuActive="Coin" logo={Konfigurasi.logo}>
            <div className="px-5 sm:px-0 xl:grid xl:grid-cols-3 xl:gap-10">
                <div className="xl:col-span-2 space-y-5">
                    <Link href="/dashboard/reload">
                        <button
                            type="button"
                            className="rounded-lg border border-input px-3 py-2 cursor-pointer hover:bg-input text-sm"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            &nbsp;&nbsp;&nbsp;
                            <span className="font-semibold font-secondary">
                                Riwayat
                            </span>
                        </button>
                    </Link>
                    <div className="rounded-lg border border-input">
                        <div className="h-10 border-b border-input flex items-center px-6">
                            <p className="text-sm font-semibold font-secondary">
                                Top-up
                            </p>
                        </div>
                        <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-5">
                            {dataJumlah.map((e, i) => (
                                <div
                                    className={`bg-card-50 h-14 rounded-lg text-white px-3 flex flex-col justify-center text-xs font-primary cursor-pointer select-none ${
                                        form.jumlah == e &&
                                        "ring-2 ring-primary"
                                    }`}
                                    key={i}
                                    onClick={() => onChange("jumlah", e)}
                                >
                                    <h6>Saldo {Rupiah(e)}</h6>
                                    <h6>Rp 0</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg border border-input">
                        <div className="h-10 border-b border-input flex items-center px-6">
                            <p className="text-sm font-semibold font-secondary">
                                Metode Pembayaran
                            </p>
                        </div>
                        <div className="p-6 grid grid-cols-3 gap-5">
                            <div
                                className={`flex w-full flex-col justify-between bg-card-50 p-3 rounded-lg cursor-pointer select-none ${
                                    form.metode == "BCA" &&
                                    "ring-2 ring-primary"
                                }`}
                                onClick={() => onChange("metode", "BCA")}
                            >
                                <div className="">
                                    <img
                                        src="https://cdn.bangjeff.com/gallery/bca-payment1.webp"
                                        alt="Logo Bank BCA"
                                        className="max-h-5"
                                    />
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="mt-2 w-full">
                                        <div className="mt-1.5 flex items-center gap-2">
                                            <div className="relative z-30 text-xs font-semibold leading-4">
                                                Rp&nbsp;5.000.000
                                            </div>
                                        </div>
                                        <div className="mt-0.5 h-px w-full bg-secondary-20"></div>
                                        <div>
                                            <span
                                                className="block text-xxs italic text-muted-foreground"
                                                id="headlessui-label-:r3g:"
                                            >
                                                Dicek 1-10 Menit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`flex w-full flex-col justify-between bg-card-50 p-3 rounded-lg cursor-pointer select-none ${
                                    form.metode == "MANDIRI" &&
                                    "ring-2 ring-primary"
                                }`}
                                onClick={() => onChange("metode", "MANDIRI")}
                            >
                                <div className="">
                                    <img
                                        src="https://cdn.bangjeff.com/gallery/mandiri-payment.webp"
                                        alt="Logo Bank MANDIRI"
                                        className="max-h-5"
                                    />
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="mt-2 w-full">
                                        <div className="mt-1.5 flex items-center gap-2">
                                            <div className="relative z-30 text-xs font-semibold leading-4">
                                                Rp&nbsp;5.000.000
                                            </div>
                                        </div>
                                        <div className="mt-0.5 h-px w-full bg-secondary-20"></div>
                                        <div>
                                            <span
                                                className="block text-xxs italic text-muted-foreground"
                                                id="headlessui-label-:r3g:"
                                            >
                                                Dicek 1-10 Menit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`flex w-full flex-col justify-between bg-card-50 p-3 rounded-lg cursor-pointer select-none ${
                                    form.metode == "BNI" &&
                                    "ring-2 ring-primary"
                                }`}
                                onClick={() => onChange("metode", "BNI")}
                            >
                                <div className="">
                                    <img
                                        src="https://cdn.bangjeff.com/4158f48b-40b9-4e98-a583-1d4eec301efd.webp"
                                        alt="Logo Bank BNI"
                                        className="max-h-5"
                                    />
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="mt-2 w-full">
                                        <div className="mt-1.5 flex items-center gap-2">
                                            <div className="relative z-30 text-xs font-semibold leading-4">
                                                Rp&nbsp;5.000.000
                                            </div>
                                        </div>
                                        <div className="mt-0.5 h-px w-full bg-secondary-20"></div>
                                        <div>
                                            <span
                                                className="block text-xxs italic text-muted-foreground"
                                                id="headlessui-label-:r3g:"
                                            >
                                                Dicek 1-10 Menit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 border-t border-input">
                        <ButtonWithIconTitle
                            icon="fa-money-bill-1"
                            title="Topup Sekarang!"
                            classBtn="block w-full"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="rounded-lg border border-input bg-card-50 p-6 sticky top-24">
                        <div className="flex gap-2 items-center">
                            <i className="fa-solid fa-wallet text-2xl"></i>
                            <span className="font-secondary font-medium hidden md:block">
                                Oura Coin
                            </span>
                        </div>
                        <h3 className="font-primary text-[24px] font-bold lg:text-[26px] mt-4 space-x-2">
                            <span className="text-primary">0</span>
                            <span>BJC</span>
                            <sup className="text-sm font-medium">IDR</sup>
                        </h3>
                    </div>
                </div>
            </div>
        </LayoutBE>
    );
}
