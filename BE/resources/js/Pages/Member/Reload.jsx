import React from "react";
import { Button, LayoutBE, Table } from "../../Components";
import { Link } from "@inertiajs/react";

export default function Reload({ Konfigurasi }) {
    const dataThead = [
        "Nomor Invoice",
        "Tanggal",
        "Harga",
        "Metode Pembayaran",
        "Status",
    ];

    return (
        <LayoutBE menuActive="Coin" logo={Konfigurasi.logo}>
            <div className="px-5 sm:px-0 space-y-5">
                <div className="rounded-lg border border-input bg-card/50 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <i className="fa-solid fa-wallet text-2xl"></i>
                            <span className="font-secondary font-medium hidden md:block">
                                Oura Coin
                            </span>
                        </div>
                        <div className="">
                            <Link href="/dashboard/reload/topup">
                                <Button
                                    title="Top Up"
                                    classBtn="font-semibold"
                                />
                            </Link>
                        </div>
                    </div>
                    <h3 className="font-primary text-[24px] font-bold lg:text-[26px] mt-4 space-x-2">
                        <span className="text-primary">0</span>
                        <span>BJC</span>
                        <sup className="text-sm font-medium">IDR</sup>
                    </h3>
                </div>
                <div className="font-secondary">
                    <h2 className="font-primary text-lg">Riwayat</h2>
                    <p className="text-sm">
                        Menampilkan data riwayat yang telah Kamu lakukan selama
                        periode yang dipilih.
                    </p>
                </div>
                <div className="rounded-lg border border-input p-6">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <h6 className="text-xs">Status</h6>
                            <select
                                name=""
                                id=""
                                className="relative block w-full appearance-none rounded-lg border border-input bg-input px-3 py-2 text-xs placeholder:text-stone-300 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                            >
                                <option value="">Semua</option>
                                <option value="1">Belum Dibayar</option>
                                <option value="2">Dibayar</option>
                                <option value="3">Kadaluwarsa</option>
                                <option value="4">Dikembalikan</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <h6 className="text-xs">Tanggal Mulai</h6>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="relative block w-full appearance-none rounded-lg border border-input bg-input px-3 py-2 text-xs placeholder:text-stone-300 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                            />
                        </div>
                        <div className="space-y-2">
                            <h6 className="text-xs">Tanggal Akhir</h6>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="relative block w-full appearance-none rounded-lg border border-input bg-input px-3 py-2 text-xs placeholder:text-stone-300 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                            />
                        </div>
                        <div className="md:col-span-3">
                            <Button title="Cari!" classBtn="block w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <Table dataThead={dataThead}></Table>
            </div>
        </LayoutBE>
    );
}
