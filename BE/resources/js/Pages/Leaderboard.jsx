import React from "react";
import { LayoutFE } from "../Components";

export default function Leaderboard({ Konfigurasi }) {
    return (
        <LayoutFE menuActive="Leaderboard" logo={Konfigurasi.logo}>
            <section className="pt-24 pb-10">
                <div className="container text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">
                        Leaderboard
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Top 10 Pembelian Terbanyak di BANGJEFF
                    </p>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
                        Berikut ini adalah daftar 10 pembelian terbanyak yang
                        dilakukan oleh pelanggan kami. Data ini diambil dari
                        sistem kami dan selalu diperbaharui.
                    </p>
                </div>
            </section>
            <section className="text-white font-secodary mb-20">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="">
                        <h2 className="ml-3 inline-flex rounded-t-md border border-b-0 border-border bg-muted px-4 py-1 text-xs leading-6">
                            Top 10 - Hari Ini
                        </h2>
                        <div className="relative rounded-lg bg-muted-50 p-6 ring-1 ring-muted">
                            <ul className="space-y-3 text-sm leading-6">
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>1. Edi Bee 🥇</div>
                                    <div>Rp&nbsp;8.234.766</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>2. sabran alfatif 🥈</div>
                                    <div>Rp&nbsp;3.222.727</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>3. tommy 🥉</div>
                                    <div>Rp&nbsp;1.703.637</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>4. yamada arya </div>
                                    <div>Rp&nbsp;1.288.422</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>5. Alifryan Junotiuz </div>
                                    <div>Rp&nbsp;1.288.422</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>6. ALIF NURHIDAYAT </div>
                                    <div>Rp&nbsp;1.258.445</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>7. Satriyo Wisnu </div>
                                    <div>Rp&nbsp;1.256.486</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>8. Sandy Ilham </div>
                                    <div>Rp&nbsp;1.199.786</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>9. Rozen </div>
                                    <div>Rp&nbsp;1.191.327</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>10. Barry Pintz </div>
                                    <div>Rp&nbsp;1.026.692</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="ml-3 inline-flex rounded-t-md border border-b-0 border-border bg-muted px-4 py-1 text-xs leading-6">
                            Top 10 - Minggu Ini
                        </h2>
                        <div className="relative rounded-lg bg-muted-50 p-6 ring-1 ring-muted">
                            <ul className="space-y-3 text-sm leading-6">
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>1. Edi Bee 🥇</div>
                                    <div>Rp&nbsp;8.234.766</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>2. sabran alfatif 🥈</div>
                                    <div>Rp&nbsp;3.222.727</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="ml-3 inline-flex rounded-t-md border border-b-0 border-border bg-muted px-4 py-1 text-xs leading-6">
                            Top 10 - Bulan Ini
                        </h2>
                        <div className="relative rounded-lg bg-muted-50 p-6 ring-1 ring-muted">
                            <ul className="space-y-3 text-sm leading-6">
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>1. Edi Bee 🥇</div>
                                    <div>Rp&nbsp;8.234.766</div>
                                </li>
                                <li className="flex items-center justify-between gap-x-3">
                                    <div>2. sabran alfatif 🥈</div>
                                    <div>Rp&nbsp;3.222.727</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutFE>
    );
}
