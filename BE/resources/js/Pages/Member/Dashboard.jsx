import React, { useState } from "react";
import { Button, LayoutBE, Table, TbodyTd, TbodyTr } from "../../Components";

export default function Dashboard({ Konfigurasi }) {
    const dataThead = [
        "Nomor Invoice",
        "ID Trx",
        "Item",
        "User Input",
        "Harga",
        "Tanggal",
        "Status",
    ];

    return (
        <LayoutBE menuActive="Dashboard" logo={Konfigurasi.logo}>
            <div className="px-5 sm:px-0 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="">
                    <div className="rounded-lg border border-input bg-card-50 p-6 ">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-start space-x-3.5 text-left">
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocI3VFP2F62QLhItFR4jcCAwCuxMXZwxHtHtkPepKhhRZbdd4G9t=s96-c"
                                    alt=""
                                    className="h-14 w-14 rounded-full"
                                />
                                <div>
                                    <div className="flex items-center gap-x-2 pb-1 font-semibold text-foreground">
                                        <span>Azhar Ozhi Saputra</span>
                                    </div>
                                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium capitalize ring-1 ring-inset bg-sky-900 text-blue-300">
                                        member
                                    </span>
                                </div>
                            </div>
                            <div className="text-base cursor-pointer">
                                <i className="fa-solid fa-gear"></i>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center space-x-2 border-t border-border pt-6 gap-2">
                            <i className="fa-solid fa-phone text-lg"></i>
                            <span>---</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="rounded-lg border border-input bg-card-50 p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <i className="fa-solid fa-wallet text-2xl"></i>
                                <span className="font-secondary font-medium hidden md:block">
                                    Oura Coin
                                </span>
                            </div>
                            <div className="">
                                <Button
                                    title="Top Up"
                                    classBtn="font-semibold"
                                />
                            </div>
                        </div>
                        <h3 className="font-primary text-[24px] font-bold lg:text-[26px] mt-4 space-x-2">
                            <span className="text-primary">0</span>
                            <span>BJC</span>
                            <sup className="text-sm font-medium">IDR</sup>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2 space-y-4">
                    <h2 className="font-bold font-primary text-lg">
                        Transaksi Hari Ini
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
                        <div className="">
                            <div className="rounded-lg border border-input bg-card/50 p-6 text-center">
                                <h2 className="text-4xl font-semibold mb-2">
                                    0
                                </h2>
                                <h2 className="text-sm font-medium font-secondary">
                                    Total Transaksi
                                </h2>
                            </div>
                        </div>
                        <div className="">
                            <div className="rounded-lg border border-input bg-card/50 p-6 text-center">
                                <h2 className="text-4xl font-semibold mb-2">
                                    0
                                </h2>
                                <h2 className="text-sm font-medium font-secondary">
                                    Total Penjualan
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        <div className="text-center rounded-lg border p-6 border-warning bg-warning-50 duration-200 ease-in-out hover:bg-warning-75 cursor-pointer">
                            <h2 className="text-4xl font-semibold mb-2">0</h2>
                            <h2 className="text-sm font-medium font-secondary">
                                Menunggu
                            </h2>
                        </div>
                        <div className="text-center rounded-lg border p-6 border-info bg-info-50 duration-200 ease-in-out hover:bg-info-75 cursor-pointer">
                            <h2 className="text-4xl font-semibold mb-2">0</h2>
                            <h2 className="text-sm font-medium font-secondary">
                                Dalam Proses
                            </h2>
                        </div>
                        <div className="text-center rounded-lg border p-6 border-success bg-success-50 duration-200 ease-in-out hover:bg-success-75 cursor-pointer">
                            <h2 className="text-4xl font-semibold mb-2">0</h2>
                            <h2 className="text-sm font-medium font-secondary">
                                Sukses
                            </h2>
                        </div>
                        <div className="text-center rounded-lg border p-6 border-danger bg-danger-50 duration-200 ease-in-out hover:bg-danger-75 cursor-pointer">
                            <h2 className="text-4xl font-semibold mb-2">0</h2>
                            <h2 className="text-sm font-medium font-secondary">
                                Gagal
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3 mt-8">
                <h2 className="px-5 sm:px-0 font-bold font-primary text-lg mb-4">
                    Riwayat Transaksi Terbaru Hari Ini
                </h2>
                <Table dataThead={dataThead}></Table>
            </div>
        </LayoutBE>
    );
}
