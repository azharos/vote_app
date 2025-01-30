import React from "react";
import { Button, LayoutBE, Table } from "../../Components";

export default function Laporan({ Konfigurasi }) {
    const dataThead = ["Tanggal", "Total Transaksi", "Total Jumlah"];

    return (
        <LayoutBE menuActive="Laporan" logo={Konfigurasi.logo}>
            <div className="px-5 sm:px-0 space-y-5">
                <div className="font-secondary">
                    <h2 className="font-primary text-lg">Laporan</h2>
                    <p className="text-sm">
                        Menampilkan laporan total penjualan per hari.
                    </p>
                </div>
                <div className="p-6 border border-input grid gap-4 md:grid-cols-4 rounded-lg">
                    <div className="space-y-2 md:col-span-2">
                        <h6 className="text-xs">Produk</h6>
                        <select
                            name=""
                            id=""
                            className="relative block w-full appearance-none rounded-lg border border-input bg-input px-3 py-2 text-xs placeholder:text-stone-300 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                        >
                            <option value="">-- Pilih Produk ---</option>
                            <option value="1">Menunggu</option>
                            <option value="1">Sedang diProses</option>
                            <option value="2">Selesai</option>
                            <option value="3">Dibatalkan</option>
                            <option value="4">Gagal</option>
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
                    <div className="md:col-span-4">
                        <Button title="Cari!" classBtn="block w-full" />
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="rounded-lg border border-input px-3 py-2 cursor-pointer hover:bg-input text-xs"
                    >
                        <span className="font-semibold font-secondary">
                            Download CSV
                        </span>
                    </button>
                    <button
                        type="button"
                        className="rounded-lg border border-input px-3 py-2 cursor-pointer hover:bg-input text-xs"
                    >
                        <span className="font-semibold font-secondary">
                            Download XLSX
                        </span>
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <Table dataThead={dataThead}></Table>
            </div>
        </LayoutBE>
    );
}
