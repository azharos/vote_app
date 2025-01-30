import React from "react";
import {
    Button,
    ButtonTable,
    Table,
    TbodyTr,
    TbodyTd,
    LayoutFE,
} from "../Components/index";

export default function Invoices({ Konfigurasi }) {
    const dataThead = [
        "Tanggal",
        "Nomor Invoice",
        "No. Handphone",
        "Harga",
        "Status",
    ];
    const dataTbody = [1, 2, 3];

    return (
        <LayoutFE menuActive="Cek Transaksi" logo={Konfigurasi.logo}>
            <section className="p-4">
                <div className="px-5 pb-4 pt-12 md:px-0 md:py-32 bg-primary-10 rounded-2xl">
                    <h4 className="text-2xl lg:text-3xl font-primary font-bold text-center mb-3">
                        Cek Invoice Kamu dengan Mudah dan Cepat.
                    </h4>
                    <p className="font-secondary text-center text-sm lg:text-base">
                        Lihat detail pembelian kamu menggunakan nomor Invoice.
                    </p>
                    <div className="w-full flex justify-center">
                        <div className="mt-8 w-full max-w-xl rounded-3xl bg-background p-6 text-left shadow-md gap-4 flex flex-col">
                            <p className="font-secondary font-semibold text-sm">
                                Cari detail pembelian kamu disini
                            </p>
                            <input
                                type="text"
                                className="w-full focus:outline-none px-3 py-1 rounded-lg h-9 focus:ring-2 focus:ring-primary text-xs placeholder:text-stone-300 font-secondary bg-input-80 border border-input "
                                placeholder="Masukkan nomor invoice kamu (Contoh: XXXXXXXXXX)"
                            />
                            <Button title="Cari Invoice" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 space-y-7">
                <div className="container">
                    <div className="text-left md:text-center">
                        <p className="font-bold text-lg">Transaksi Real-time</p>
                        <p className="text-sm font-secondary">
                            Berikut ini Real-time data pesanan masuk terbaru
                            BANGJEFF.
                        </p>
                    </div>
                </div>
                <div className="sm:px-5">
                    <Table dataThead={dataThead} dataTbody={dataTbody}>
                        {dataTbody.map((e, i) => (
                            <TbodyTr key={i}>
                                <TbodyTd>0000000000</TbodyTd>
                                <TbodyTd>OS*********784</TbodyTd>
                                <TbodyTd>628******076</TbodyTd>
                                <TbodyTd>Rp 316.999</TbodyTd>
                                <TbodyTd>
                                    <ButtonTable
                                        title="SUCCESS"
                                        btnColor="success"
                                    />
                                </TbodyTd>
                            </TbodyTr>
                        ))}
                    </Table>
                </div>
            </section>
        </LayoutFE>
    );
}
