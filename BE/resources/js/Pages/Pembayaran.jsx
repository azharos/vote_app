import React, { useState } from "react";
import {
    ButtonTable,
    JumbotronPembayaran,
    ProgressPembayaran,
    LayoutFE,
} from "../Components";

export default function Pembayaran({ Konfigurasi }) {
    const [isShowRincian, setIsShowRincian] = useState(true);
    const [isShowPembayaran, setIsShowPembayaran] = useState(true);

    return (
        <LayoutFE menuActive="Cek Transaksi" logo={Konfigurasi.logo}>
            <JumbotronPembayaran bgColor="danger" />
            <div className="container mt-8 space-y-4 lg:mt-20 lg:space-y-10">
                <div className="font-secondary space-y-5">
                    <h3 className="font-semibold">Progress Transaksi</h3>
                    <ProgressPembayaran step="failed" />
                </div>
                <div className="">
                    <div className="flex justify-start mb-5">
                        <div className="text-sm font-bold text-white md:text-base">
                            07 Jan 2025 15:31:11
                        </div>
                        {/* <div className="flex items-center gap-2 rounded-lg border px-4 py-1.5 border-danger bg-danger-50 duration-200 ease-in-out">
                                <div className="flex gap-1 text-sm font-semibold text-white md:text-base">
                                    <span>0</span>
                                    <span>Jam</span>
                                </div>
                                <div className="flex gap-1 text-sm font-semibold text-white md:text-base">
                                    <span>0</span>
                                    <span>Menit</span>
                                </div>
                                <div className="flex gap-1 text-sm font-semibold text-white md:text-base">
                                    <span>0</span>
                                    <span>Detik</span>
                                </div>
                            </div> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8">
                        <div className="space-y-5">
                            <div className="grid grid-cols-5 gap-4 rounded-2xl border border-input bg-muted p-4 md:grid-cols-4">
                                <div className="col-span-2 md:col-span-1 hover:ring-2 hover:ring-primary rounded-2xl duration-200 ease-in-out">
                                    <img
                                        src="https://www.ourastore.com/_next/image?url=https%3A%2F%2Fcdn.ourastore.com%2Fcc355cc5-83f1-4691-aec1-b879f9c5c2a4.jpg&w=1920&q=75"
                                        alt=""
                                        className="object-cover object-center h-36 w-full rounded-t-2xl"
                                    />
                                    <div className="rounded-b-2xl bg-card-50 px-3 pb-2.5 pt-1.5 text-center">
                                        <h3 className="truncate text-xs font-semibold text-foreground">
                                            Mobile Legends
                                        </h3>
                                        <p className="truncate text-[8px]">
                                            5 (5+0) Diamonds
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-3 text-sm font-medium">
                                    <div className="pb-2 font-semibold">
                                        Informasi Akun
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pb-2">
                                        <div className="truncate text-foreground">
                                            Nickname
                                        </div>
                                        <div className="col-span-3">
                                            <p className="break-words">
                                                : Goddard.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pb-2">
                                        <div className="truncate text-foreground">
                                            ID
                                        </div>
                                        <div className="col-span-3">
                                            <p className="break-words">
                                                : 1420800074
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pb-2">
                                        <div className="truncate text-foreground">
                                            Server
                                        </div>
                                        <div className="col-span-3">
                                            <p className="break-words">
                                                : 15910
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="px-3 py-2 border border-input rounded-lg bg-muted text-sm font-medium flex justify-between items-center cursor-pointer"
                                onClick={() => setIsShowRincian(!isShowRincian)}
                            >
                                <div className="">Rincian Pembayaran</div>
                                <i
                                    className={`fa-solid ${
                                        isShowRincian
                                            ? "fa-chevron-down"
                                            : "fa-chevron-up"
                                    }`}
                                ></i>
                            </div>
                            <div
                                className={`px-3 py-2 border border-input rounded-lg bg-muted text-sm font-medium ${
                                    !isShowRincian && "hidden"
                                }`}
                            >
                                <div className="space-y-5">
                                    <div className="flex justify-between">
                                        <span>Harga</span>
                                        <span>Rp 1.539</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Jumlah</span>
                                        <span>1x</span>
                                    </div>
                                </div>
                                <div className="space-y-5 mt-5 pt-5 border-t border-input">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>Rp 1.539</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Kode Unik</span>
                                        <span>Rp 1.539</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-2 border border-input rounded-lg bg-muted font-medium flex justify-between items-center cursor-pointer">
                                <div className="">Total Pembayaran</div>
                                <div className="">
                                    <span>Rp 1.539</span>&nbsp;&nbsp;&nbsp;
                                    <span className="cursor-pointer">
                                        <i className="fa-regular fa-copy"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="font-secondary">
                            <div>Metode Pembayaran</div>
                            <div className="font-semibold">BCA Transfer</div>
                            <div className="flex flex-col gap-3 pt-3">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Nama Rekening
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        OURA STORE INDONESIA PT
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Nomor Rekening
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        8210776371&nbsp;&nbsp;&nbsp;
                                        <span className="cursor-pointer">
                                            <i className="fa-regular fa-copy"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Nomor Invoice
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        OSO21987E6A509BD261375227&nbsp;&nbsp;&nbsp;
                                        <span className="cursor-pointer">
                                            <i className="fa-regular fa-copy"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Status Pembayaran
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        <ButtonTable
                                            btnColor="danger"
                                            title="Expired"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Status Transaksi
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        <ButtonTable
                                            btnColor="danger"
                                            title="Cancelled"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-4">
                                        Pesan
                                    </div>
                                    <div className="col-span-12 lg:col-span-8 font-semibold">
                                        Transaksi tidak dapat dilanjutkan.
                                        Pembayaran hangus pada 07-01-2025
                                        16:32:02
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-secondary mt-8 space-y-4">
                        <h2 className="font-semibold">Instruksi Pembayaran</h2>
                        <div
                            className="px-3 py-2 border border-input rounded-lg bg-muted text-sm font-medium flex justify-between items-center cursor-pointer"
                            onClick={() =>
                                setIsShowPembayaran(!isShowPembayaran)
                            }
                        >
                            <div className="">Cara Melakukan Pembayaran</div>
                            <i
                                className={`fa-solid ${
                                    isShowPembayaran
                                        ? "fa-chevron-down"
                                        : "fa-chevron-up"
                                }`}
                            ></i>
                        </div>
                        <div
                            className={`px-3 py-2 border border-input rounded-lg bg-muted text-sm ${
                                !isShowPembayaran && "hidden"
                            }`}
                        >
                            <p>
                                Transfer sesuai totalan/total pembayaran ke
                                nomor rekening yang telah diberikan di halaman
                                ini.
                            </p>
                            <p className="font-bold">
                                TF TIDAK SESUAI/DIBULATIN = Top up tidak masuk
                                otomatis ke akun dan harus chat ke admin
                                <br />
                                <br />
                            </p>
                            <p className="font-bold">
                                TF AN AKAN DICEK 3-10 MENIT OLEH SISTEM PUSAT{" "}
                                <br />
                                JADI AKAN DELAY SEKITAR 3-10 MENIT SETELAH TF
                                <br />
                                <br />
                            </p>
                            <p>
                                TF Wajib Sesuai Totalan <br />
                                Jangan digenapin <br />
                                Jangan dibulatin <br />
                                Jangan ditambah/dikurangin <br />
                                Pas Pas aja pokoknya
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutFE>
    );
}
