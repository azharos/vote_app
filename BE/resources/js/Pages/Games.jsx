import React, { useState } from "react";
import {
    Button,
    ButtonTable,
    ButtonWithIcon,
    ButtonWithIconTitle,
    CustomToast,
    FormInput,
    Input,
    InputCheckbox,
    LayoutFE,
    Modal,
} from "../Components";
import { Link } from "@inertiajs/react";

const CardNominal = () => {
    return (
        <div className="relative flex min-h-[85px] cursor-pointer rounded-xl border border-transparent p-2.5 md:p-4 shadow-sm outline-none bg-card">
            <div className="flex flex-1">
                <span className="flex flex-col justify-start">
                    <span className="block text-xs font-semibold font-secondary">
                        16080 (13664+2416) Diamonds
                    </span>
                    <div>
                        <span className="mt-1 flex items-center text-[11px] font-semibold text-muted-60 font-secondary">
                            Rp&nbsp;3.993.344
                        </span>
                    </div>
                </span>
            </div>
            <div className="flex aspect-square w-8 items-center">
                <img
                    src="/image/diamond.webp"
                    className="object-contain object-right"
                    alt=""
                />
            </div>
        </div>
    );
};

const BoxTransaksi = ({ no = "", title, children }) => {
    return (
        <div className="w-full relative shadow-2xl bg-card-50 rounded-xl overflow-hidden">
            <div className="flex items-center bg-card">
                <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
                    {no}
                </div>
                <h2 className="px-4 py-2 text-sm/6 font-semibold">{title}</h2>
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};

export default function Games({ Konfigurasi }) {
    const [isShowModal, setIsShowModal] = useState(false);

    const [form, setForm] = useState({
        customer_no: "",
        product: "",
        pembayaran: "",
        kontak: "",
        kode_promo: "",
    });

    const [menuMobileActive, setMenuMobileActive] = useState("transaksi");

    const [isShowDetailTrx, setIsShowDetailTrx] = useState(false);

    const onMenuActive = (txt) => {
        setMenuMobileActive(txt);
    };

    return (
        <LayoutFE logo={Konfigurasi.logo}>
            <section className="relative">
                <img
                    src="/image/gambarml.webp"
                    alt=""
                    className="min-h-56 w-full bg-muted object-cover object-center lg:object-contain"
                />
            </section>
            <section className="min-h-32 w-full items-center border-b border-muted lg:min-h-[160px] bg-popular bg-transparent">
                <div className="container flex items-center gap-2">
                    <div className="product-thumbnail-container relative -top-28">
                        <img
                            src="./image/produk-popular/ml.webp"
                            alt=""
                            className="z-20 -mb-20 aspect-square w-32 rounded-2xl object-cover shadow-2xl md:-mb-20 md:w-60"
                        />
                    </div>
                    <div className="py-4 sm:py-0">
                        <h3 className="font-primary text-sm font-bold uppercase leading-7 tracking-wider sm:text-2xl">
                            Mobile Legends
                        </h3>
                        <p className="font-secondary font-medium text-sm sm:text-base">
                            Moonton
                        </p>
                        <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-8 sm:text-base">
                            <div className="flex-row gap-2 font-medium whitespace-nowrap">
                                ⚡ Proses Cepat
                            </div>
                            <div className="flex-row gap-2 font-medium whitespace-nowrap">
                                💬 Layanan Chat 24/7
                            </div>
                            <div className="flex-row gap-2 font-medium whitespace-nowrap">
                                💳 Pembayaran Aman
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:hidden mt-4">
                <div className="container">
                    <div className="w-full grid grid-cols-2 rounded-lg h-10 bg-muted gap-5 p-1 font-primary font-secondary text-sm">
                        <div
                            className={`w-full flex justify-center items-center cursor-pointer rounded-lg select-none ${
                                menuMobileActive == "transaksi" && "bg-primary"
                            }`}
                            onClick={() => onMenuActive("transaksi")}
                        >
                            Transaksi
                        </div>
                        <div
                            className={`w-full rounded-lg flex justify-center select-none items-center cursor-pointer ${
                                menuMobileActive == "keterangan" && "bg-primary"
                            }`}
                            onClick={() => onMenuActive("keterangan")}
                        >
                            Keterangan
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div
                        className={`lg:flex mb-5 gap-5 ${
                            menuMobileActive == "transaksi" ? "block" : "hidden"
                        }`}
                    >
                        <div className="w-full lg:w-8/12 gap-5 flex flex-col">
                            <BoxTransaksi no="1" title="Masukkan Data Akun">
                                <div className="grid grid-cols-2 gap-5 mb-4">
                                    <div>
                                        <FormInput
                                            type="number"
                                            title="ID"
                                            placeholder="Ketikan ID"
                                        />
                                    </div>
                                    <div>
                                        <FormInput
                                            type="number"
                                            title="Server"
                                            placeholder="Ketikan Server"
                                        />
                                    </div>
                                </div>
                                <div className="p-4 flex items-center w-full gap-3 rounded-2xl bg-card">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <div className="flex-1 text-sm font-secondary font-light italic">
                                        Untuk menemukan ID & Server akun Anda,
                                        klik avatar Anda di pojok kiri atas
                                        layar dan buka tab Info Umum. Contoh:
                                        12345678 (9864), maka ID adalah 12345678
                                        dan Server adalah 9864
                                    </div>
                                </div>
                            </BoxTransaksi>
                            <BoxTransaksi no="2" title="Pilih Nominal">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                    <CardNominal />
                                    <CardNominal />
                                    <CardNominal />
                                    <CardNominal />
                                </div>
                            </BoxTransaksi>
                            <BoxTransaksi
                                no="3"
                                title="Masukkan Jumlah Pembelian"
                            >
                                <div className="flex">
                                    <div className="flex-1 relative">
                                        <Input type="number" value="1" />
                                    </div>
                                    <div className="px-2 h-9 flex items-center gap-3">
                                        <ButtonWithIcon icon="fa-plus" />
                                        <ButtonWithIcon
                                            icon="fa-minus"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </BoxTransaksi>
                            <BoxTransaksi
                                no="4"
                                title="Pilih Pembayaran"
                            ></BoxTransaksi>
                            <BoxTransaksi no={5} title="Detail Kontak">
                                <Input
                                    type="number"
                                    placeholder="Masukkan No. WhatsApp"
                                />
                                <div className="italic text-xxs mb-2">
                                    **Nomor ini akan dihubungi jika terjadi
                                    masalah
                                </div>
                                <div className="p-4 flex items-center w-full gap-3 rounded-2xl bg-card">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <div className="flex-1 text-sm font-secondary font-light italic">
                                        Jika ada kendala, kami akan menghubungi
                                        nomor WA kamu diatas
                                    </div>
                                </div>
                            </BoxTransaksi>
                            <BoxTransaksi no={6} title="Kode Promo">
                                <div className="flex gap-5 mb-4">
                                    <div className="flex-1">
                                        <Input
                                            type="number"
                                            placeholder="Ketikan Kode Promo Kamu"
                                        />
                                    </div>
                                    <Button title="Gunakan" />
                                </div>
                                <ButtonWithIconTitle
                                    icon="fa-percent"
                                    title="Pakai Promo Yang Tersedia"
                                />
                            </BoxTransaksi>
                        </div>
                        <div className="w-4/12 hidden lg:block">
                            <div className="sticky top-[118px] flex-col flex gap-5">
                                <div className="w-full relative shadow-2xl bg-card-50 rounded-xl overflow-hidden p-4">
                                    <h4 className="font-primary text-sm mb-2">
                                        Ulasan dan Rating
                                    </h4>
                                    <div className="flex items-baseline gap-4">
                                        <div className="text-[40px] font-bold leading-none xl:text-[50px] text-white">
                                            4.99
                                        </div>
                                        <div>
                                            <div className="flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-10 xl:size-11 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-10 xl:size-11 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-10 xl:size-11 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-10 xl:size-11 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-10 xl:size-11 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="ml-1.5 mt-1 flex items-center text-sm font-semibold">
                                                Berdasarkan total 4.11jt rating
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full relative shadow-2xl bg-card-50 rounded-xl overflow-hidden p-4 flex items-center gap-5 select-none">
                                    <i className="fa-solid fa-headset text-2xl"></i>
                                    <div className="">
                                        <h3 className="font-bold font-regular text-sm">
                                            Butuh Bantuan ?
                                        </h3>
                                        <p className="font-secondary text-sm">
                                            Kamu bisa hubungi kami disini.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden space-y-4 lg:block">
                                    <div className="rounded-lg border border-dashed border-input bg-secondary text-sm">
                                        {/* <div className="flex h-[98px] items-center justify-center text-center">
                                                Belum ada item produk yang
                                                dipilih.
                                            </div> */}
                                        <div className="p-4 flex flex-col gap-3">
                                            <div className="flex gap-4 items-center">
                                                <img
                                                    src="/image/produk-popular/ml.webp"
                                                    alt=""
                                                    className="h-14 w-14 rounded-lg object-cover object-center md:h-20 md:w-20"
                                                />
                                                <div className="">
                                                    <h3 className="font-secondary font-semibold text-xxs md:text-base mb-1">
                                                        Mobile Legend
                                                    </h3>
                                                    <p className="font-secondary text-sm">
                                                        5 (5+0) Diamonds
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className={`font-secondary  flex-col gap-2 flex`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <h5>Metode Pembayaran</h5>
                                                    <h5>OVO</h5>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <h5>Harga</h5>
                                                    <h5>Rp 13.446</h5>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <h5>Jumlah Pembelian</h5>
                                                    <h5>1</h5>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <h5>Biaya</h5>
                                                    <h5>Rp 0</h5>
                                                </div>
                                                <div className="flex justify-between items-center border-t border-input pt-1">
                                                    <h5 className="font-bold text-base md:text-lg">
                                                        Total Pembayaran
                                                    </h5>
                                                    <h5 className="font-bold text-base md:text-lg text-primary">
                                                        Rp 13.446
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ButtonWithIconTitle
                                        icon="fa-cart-shopping"
                                        title="Pesan Sekarang!"
                                        classBtn="duration-300 ease-in-out text-sm font-secondary w-full block"
                                        onClick={() =>
                                            CustomToast(
                                                "info",
                                                "Silahkan isi data akun terlebih dahulu"
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${
                            menuMobileActive == "keterangan"
                                ? "flex flex-col gap-5"
                                : "hidden"
                        } lg:block`}
                    >
                        <BoxTransaksi title="Deskripsi Mobile Legends">
                            {/* <div
                                dangerouslySetInnerHTML={{
                                    __html: deskripsi_game,
                                }}
                                className="text-sm"
                            /> */}
                        </BoxTransaksi>
                        <div className="block lg:hidden">
                            <BoxTransaksi title="Ulasan">
                                <div className="flex flex-col items-center gap-2 mb-5">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-10 w-10 flex-shrink-0 text-warning"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <div>
                                            <span className="text-5xl font-semibold font-secondary">
                                                4.99
                                            </span>
                                            <sub className="text-lg font-semibold font-secondary">
                                                / 5.0
                                            </sub>
                                        </div>
                                    </div>
                                    <p className="pt-2 text-center text-sm font-secondary">
                                        Pelanggan merasa puas dengan produk
                                        ini.&nbsp;
                                        <br /> Dari&nbsp;
                                        <span className="font-semibold">
                                            4.11jt
                                        </span>
                                        &nbsp;ulasan.
                                    </p>
                                </div>
                                <div className="space-y-3 mb-5">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium font-secondary">
                                                5
                                            </div>
                                            <div className="text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-6 xl:size-7 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-100 h-3 bg-yellow-400 rounded"></div>
                                        </div>
                                        <div className="w-20 flex justify-end items-center font-secondary">
                                            1.59rb
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium font-secondary">
                                                4
                                            </div>
                                            <div className="text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-6 xl:size-7 text-gray-300"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-100 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="w-20 flex justify-end items-center font-secondary">
                                            0
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium font-secondary">
                                                3
                                            </div>
                                            <div className="text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-6 xl:size-7 text-gray-300"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-100 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="w-20 flex justify-end items-center font-secondary">
                                            0
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium font-secondary">
                                                2
                                            </div>
                                            <div className="text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-6 xl:size-7 text-gray-300"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-100 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="w-20 flex justify-end items-center font-secondary">
                                            0
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium font-secondary">
                                                1
                                            </div>
                                            <div className="text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-6 xl:size-7 text-gray-300"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-100 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="w-20 flex justify-end items-center font-secondary">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm">
                                    Apakah kamu menyukai produk ini? Beri tahu
                                    kami dan calon pembeli lainnya tentang
                                    pengalamanmu.
                                </p>
                                <div className="flex flex-col divide-y divide-zinc-600 gap-4 border-t border-zinc-600 mt-4">
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="mt-0.5 text-xs font-bold font-secondary">
                                                628******403
                                            </h4>
                                            <div className="flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4 className="mt-0.5 text-xxs font-secondary">
                                                305 (276+29) Diamonds
                                            </h4>
                                            <div className="text-xxs font-secondary">
                                                01-01-2025 19:04:29
                                            </div>
                                        </div>
                                        <h4 className="mt-0.5 text-xs font-secondary italic">
                                            “Proses cepat banget”
                                        </h4>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="mt-0.5 text-xs font-bold font-secondary">
                                                628******403
                                            </h4>
                                            <div className="flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="size-4 text-warning"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4 className="mt-0.5 text-xxs font-secondary">
                                                305 (276+29) Diamonds
                                            </h4>
                                            <div className="text-xxs font-secondary">
                                                01-01-2025 19:04:29
                                            </div>
                                        </div>
                                        <h4 className="mt-0.5 text-xs font-secondary italic">
                                            “Proses cepat banget”
                                        </h4>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Link>
                                        <div className="px-3 py-2 bg-card-50 border border-zinc-800 text-xs font-secondary rounded-full cursor-pointer hover:bg-zinc-800 ease-in-out duration-300 flex items-center">
                                            Lihat semua ulasan&nbsp;&nbsp;&nbsp;
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </BoxTransaksi>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed bottom-0 left-0 w-full rounded-t-lg lg:hidden bg-secondary p-4 z-40 border-t border-input">
                {/* <div className="flex h-[98px] items-center justify-center text-center border border-dashed border-input rounded-lg text-sm">
                    Belum ada item produk yang dipilih.
                </div> */}

                <div
                    className={`px-3 py-2 w-full border border-dashed border-input rounded-lg relative overflow-hidden flex flex-col gap-2 transition-all ease-in-out duration-300 ${
                        isShowDetailTrx ? "h-48" : "h-20"
                    }`}
                >
                    <div
                        className={`flex justify-between items-center select-none cursor-pointer w-full ${
                            !isShowDetailTrx && "mt-1"
                        }`}
                        onClick={() => setIsShowDetailTrx(!isShowDetailTrx)}
                    >
                        <div className="flex gap-4 items-center">
                            <img
                                src="/image/produk-popular/ml.webp"
                                alt=""
                                className="h-14 w-14 rounded-lg object-cover object-center"
                            />
                            <div className="">
                                <h3 className="font-secondary font-semibold text-xs mb-1">
                                    Mobile Legend
                                </h3>
                                <p className="font-secondary text-xs">
                                    5 (5+0) Diamonds
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <i
                                className={`fa-solid ${
                                    isShowDetailTrx
                                        ? "fa-chevron-down"
                                        : "fa-chevron-up"
                                } text-sm`}
                            ></i>
                        </div>
                    </div>
                    <div
                        className={`flex flex-col gap-1 transition-all ease-in-out duration-300 ${
                            isShowDetailTrx
                                ? "visible opacity-1"
                                : "invisible opacity-0"
                        }`}
                    >
                        <div className="flex justify-between items-center text-xs">
                            <h5>Metode Pembayaran</h5>
                            <h5>OVO</h5>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <h5>Harga</h5>
                            <h5>Rp 13.446</h5>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <h5>Jumlah Pembelian</h5>
                            <h5>1</h5>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <h5>Biaya</h5>
                            <h5>Rp 0</h5>
                        </div>
                        <div className="flex justify-between items-center text-xs border-t border-input pt-1 mt-1">
                            <h5 className="font-bold text-sm">
                                Total Pembayaran
                            </h5>
                            <h5 className="font-bold text-sm text-primary">
                                Rp 13.446
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="mt-4 h-8 rounded-lg font-secondary bg-primary w-100 flex items-center justify-center font-secondary cursor-pointer hover:bg-primary-75 duration-300 ease-in-out text-sm font-secondary">
                    <i className="fa-solid fa-cart-shopping"></i>
                    &nbsp;&nbsp;Pesan Sekarang!
                </div>
            </div>
            <Modal size="lg" isShow={isShowModal}>
                <div className="w-full flex justify-center">
                    <div className="bg-success size-20 flex justify-center items-center rounded-full text-4xl text-white">
                        <i className="fa-solid fa-check"></i>
                    </div>
                </div>
                <div className="font-secondary text-center">
                    <h3 className="font-bold text-lg">Buat Pesanan</h3>
                    <p className="text-sm">
                        Pastikan data akun Kamu dan produk yang Kamu pilih valid
                        dan sesuai.
                    </p>
                </div>
                <div className="bg-secondary text-left text-sm font-secondary rounded-md p-4 space-y-3 font-medium">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">Username</div>
                        <div className="col-span-2">Goddard.</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-2">1420800074</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">Server</div>
                        <div className="col-span-2">15910</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">Item</div>
                        <div className="col-span-2">
                            55 (50+5) Diamonds - First Top Up
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">Product</div>
                        <div className="col-span-2">Mobile Legends</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">Payment</div>
                        <div className="col-span-2">BNI VA</div>
                    </div>
                </div>
                <InputCheckbox title="Dengan mengklik Pesan Sekarang, kamu sudah menyetujui Syarat & Ketentuan yang berlaku" />
                <div className="w-full grid grid-cols-2 gap-3">
                    <ButtonTable
                        btnColor="primary"
                        title="Pesan Sekarang!"
                        size="md"
                        rounded="2xl"
                        disabled
                    />
                    <ButtonTable
                        btnColor="secondary"
                        title="Batalkan"
                        size="md"
                        rounded="2xl"
                        onClick={() => setIsShowModal(false)}
                    />
                </div>
            </Modal>
        </LayoutFE>
    );
}
