import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="rgba(35, 35, 36, 1)"
                    d="M0,64L34.3,90.7C68.6,117,137,171,206,192C274.3,213,343,203,411,197.3C480,192,549,192,617,165.3C685.7,139,754,85,823,90.7C891.4,96,960,160,1029,154.7C1097.1,149,1166,75,1234,48C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
            <footer className="pt-5 pb-10 bg-secondary">
                <div className="container">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10">
                        <div className="space-y-5">
                            <img
                                src="/image/logo.png"
                                alt=""
                                className="h-16 w-auto"
                            />
                            <p className="text-sm leading-6 text-secondary-foreground">
                                OURA STORE adalah tempat top up games yang aman,
                                murah dan terpercaya. Proses cepat 1-3 Detik.
                                Open 24 jam. Payment terlengkap. Jika ada
                                kendala silahkan klik logo CS pada kanan bawah
                                di website ini.
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
                            <div className="">
                                <h3 className="text-sm font-semibold leading-6 text-primary">
                                    Kemitraan
                                </h3>
                                <div className="mt-5 flex gap-5 flex-col">
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Reseller
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-sm font-semibold leading-6 text-primary">
                                    Peta Situs
                                </h3>
                                <div className="mt-5 flex gap-5 flex-col">
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Beranda
                                        </span>
                                    </Link>
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Cek Transaksi
                                        </span>
                                    </Link>
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Hubungi Kami
                                        </span>
                                    </Link>
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Ulasan
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-sm font-semibold leading-6 text-primary">
                                    Dukungan
                                </h3>
                                <div className="mt-5 flex gap-5 flex-col">
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Whatsapp
                                        </span>
                                    </Link>
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Instagram
                                        </span>
                                    </Link>
                                    <Link className="outline-none">
                                        <span className="text-sm leading-6 hover:text-primary">
                                            Email
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="text-xs">
                        © 2024 OURASTORE. All rights reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}
