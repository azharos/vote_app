import { Link } from "@inertiajs/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
    ToastContainer,
    toast,
    Slide,
    Zoom,
    Flip,
    Bounce,
} from "react-toastify";

import "../../css/app.css";
import "../../css/global.css";

export const LayoutBE = ({ children, menuActive, logo }) => {
    const dataMenu = [
        {
            icon: "fa-home",
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            icon: "fa-bag-shopping",
            name: "Transaksi",
            href: "/dashboard/transaksi",
        },
        {
            icon: "fa-receipt",
            name: "Mutasi",
            href: "/dashboard/mutasi",
        },
        {
            icon: "fa-file-lines",
            name: "Laporan",
            href: "/dashboard/laporan",
        },
    ];

    return (
        <>
            <Navbar logo={logo} />
            <main className="relative pb-52">
                <div className="sm:container grid grid-cols-8 gap-5 pt-8 sm:pt-16">
                    <div className="col-span-1 hidden sm:block md:col-span-2">
                        <aside className="sticky top-28 flex flex-col gap-5">
                            <Link href="/dashboard/reload">
                                <div
                                    className={`w-full flex items-center px-3 py-2 gap-4 rounded-lg text-sm ${
                                        menuActive == "Coin"
                                            ? "bg-gradient-to-r from-primary"
                                            : "hover:bg-gradient-to-r from-muted-50 border border-muted-50"
                                    } cursor-pointer`}
                                >
                                    <i className="fa-solid fa-wallet"></i>
                                    <span className="font-secondary font-medium hidden md:block">
                                        Oura Coin
                                    </span>
                                </div>
                            </Link>
                            {dataMenu.map((menu, i) => (
                                <Link href={menu.href} key={i}>
                                    <div
                                        className={`w-full flex items-center px-3 py-2 gap-4 rounded-lg text-sm cursor-pointer ${
                                            menuActive == menu.name
                                                ? "bg-gradient-to-r from-primary"
                                                : "hover:bg-gradient-to-r from-muted-50"
                                        }`}
                                        key={i}
                                    >
                                        <i
                                            className={`fa-solid ${menu.icon}`}
                                        ></i>
                                        <span className="font-secondary font-medium hidden md:block">
                                            {menu.name}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                            <Link href="">
                                <div
                                    className={`w-full flex items-center px-3 py-2 gap-4 hover:bg-gradient-to-r from-muted-50 rounded-lg text-sm cursor-pointer text-red-500`}
                                >
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <span className="font-secondary font-medium hidden md:block">
                                        Keluar
                                    </span>
                                </div>
                            </Link>
                        </aside>
                    </div>
                    <div className="col-span-8 sm:col-start-2 md:col-span-7 md:col-start-3">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
            <ToastContainer
                closeButton={false}
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                draggable={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
                transition={Zoom}
                icon={({ type }) => {
                    switch (type) {
                        case "info":
                            return (
                                <i className="fa-solid fa-circle-info text-info text-2xl"></i>
                            );
                        case "error":
                            return (
                                <i className="fa-solid fa-circle-xmark text-danger text-2xl"></i>
                            );
                        case "success":
                            return (
                                <i className="fa-solid fa-circle-check text-success text-2xl"></i>
                            );
                        case "warning":
                            return (
                                <i className="fa-solid fa-triangle-exclamation text-warning text-2xl"></i>
                            );
                        default:
                            return null;
                    }
                }}
            />
        </>
    );
};

export const LayoutFE = ({ children, menuActive, logo }) => {
    return (
        <>
            <Navbar menuActive={menuActive} logo={logo} />
            <main className="relative pb-52">{children}</main>
            <Footer />
            <ToastContainer
                closeButton={false}
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                draggable={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
                transition={Zoom}
                icon={({ type }) => {
                    switch (type) {
                        case "info":
                            return (
                                <i className="fa-solid fa-circle-info text-info text-2xl"></i>
                            );
                        case "error":
                            return (
                                <i className="fa-solid fa-circle-xmark text-danger text-2xl"></i>
                            );
                        case "success":
                            return (
                                <i className="fa-solid fa-circle-check text-success text-2xl"></i>
                            );
                        case "warning":
                            return (
                                <i className="fa-solid fa-triangle-exclamation text-warning text-2xl"></i>
                            );
                        default:
                            return null;
                    }
                }}
            />
        </>
    );
};
