import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { InputNavbar } from "./Input";
import { isEmpty } from "../Utils";

const SidebarMenu = ({
    setIsSubMenu,
    styleSidebar,
    setStyleSidebar,
    dataMenu,
}) => {
    const onHideSidebar = () => {
        setIsSubMenu(false);
        setStyleSidebar({
            bgSidebar: "opacity-0 -z-10",
            bgMenu: "translateX(-400px)",
            opacityMenu: "-z-10",
        });
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full min-h-screen duration-500 ease-in-out ${styleSidebar.bgSidebar} bg-black-80`}
            ></div>

            <div
                className={`fixed top-0 left-0 w-full duration-500 ease-in-out ${styleSidebar.opacityMenu}`}
                style={{ transform: styleSidebar.bgMenu }}
            >
                <div className="max-w-xs w-full relative min-h-screen bg-background">
                    <div className="flex flex-row items-center justify-between border-b border-dashed border-muted py-4 px-7">
                        <img
                            src="/image/logo.png"
                            alt=""
                            className="w-auto h-9 md:h-10"
                        />
                        <div className="cursor-pointer" onClick={onHideSidebar}>
                            <i className="fa-solid fa-xmark text-xl"></i>
                        </div>
                    </div>
                    <div className="space-y-2 p-4">
                        {dataMenu.map((menu, i) => (
                            <Link
                                className="outline-none"
                                href={menu.href}
                                key={i}
                            >
                                <div className="flex items-center justify-between font-medium px-4 py-2 cursor-pointer hover:bg-muted rounded-md">
                                    <span className="font-secondary">
                                        {menu.name}
                                    </span>
                                    <i className={`fa-solid ${menu.icon}`}></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="space-y-w p-4">
                        <Link className="outline-none" href="/login">
                            <div className="flex items-center justify-between font-medium px-4 py-2 cursor-pointer hover:bg-muted rounded-md">
                                <span className="font-secondary">Masuk</span>
                                <i className="fa-solid fa-right-to-bracket"></i>
                            </div>
                        </Link>
                        <Link className="outline-none" href="/register">
                            <div className="flex items-center justify-between font-medium px-4 py-2 cursor-pointer hover:bg-muted rounded-md">
                                <span className="font-secondary">Daftar</span>
                                <i className="fa-solid fa-user-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Navbar({ menuActive = "", logo = "" }) {
    const { auth } = usePage().props;

    const dataMenu = [
        {
            icon: "fa-wallet",
            name: "Topup",
            href: "/",
        },
        {
            icon: "fa-list-check",
            name: "Cek Transaksi",
            href: "/invoices",
        },
        {
            icon: "fa-ranking-star",
            name: "Leaderboard",
            href: "/leaderboard",
        },
    ];

    const [isSearchMobile, SetIsSearchMobile] = useState(false);
    const [isSubMenu, setIsSubMenu] = useState(false);
    const [styleSidebar, setStyleSidebar] = useState({
        bgSidebar: "opacity-0 -z-10",
        bgMenu: "translateX(-400px)",
        opacityMenu: "-z-10",
    });

    const onShowSidebar = () => {
        setIsSubMenu(true);
        setStyleSidebar({
            bgSidebar: "opacity-100 z-50",
            bgMenu: "translateX(0)",
            opacityMenu: "z-50",
        });
    };

    return (
        <>
            <nav className="w-full sticky top-0 mt-0 z-40 duration-500 ease-in-out print:hidden bg-secondary-80 backdrop-blur-sm">
                <div className="border-b border-border-20">
                    <div className="container flex items-center h-16 gap-4 justify-between">
                        <Link className="outline-none" href="/">
                            <div className="">
                                <img
                                    src={
                                        isEmpty(logo)
                                            ? "/image/no_image.jpg"
                                            : logo
                                    }
                                    alt=""
                                    className="w-auto h-9 md:h-10 "
                                />
                            </div>
                        </Link>
                        <div className="flex-1 gap-4 items-center hidden md:flex">
                            <div className="w-full relative">
                                <InputNavbar placeholder="Cari Game atau Voucher" />
                                <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <Link className="outline-none" href="/login">
                                    <div className="flex items-center text-sm gap-2 ">
                                        <i className="fa-solid fa-right-to-bracket "></i>
                                        <span>Masuk</span>
                                    </div>
                                </Link>
                                <Link className="outline-none" href="/register">
                                    <div className="flex items-center text-sm gap-2 ">
                                        <i className="fa-solid fa-user-plus "></i>
                                        <span>Daftar</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2 md:hidden">
                            <div
                                className="cursor-pointer flex items-center justify-center whitespace-nowrap transition-all rounded-lg shadow-sm text-sm font-medium w-9 h-9 border border-input bg-transparent hover:bg-muted"
                                onClick={() =>
                                    SetIsSearchMobile(!isSearchMobile)
                                }
                            >
                                <i
                                    className={`fa-solid ${
                                        isSearchMobile
                                            ? "fa-xmark"
                                            : "fa-magnifying-glass"
                                    }`}
                                ></i>
                            </div>
                            <div
                                className="cursor-pointer flex items-center justify-center whitespace-nowrap transition-all rounded-lg shadow-sm text-sm font-medium w-9 h-9 border border-input bg-transparent hover:bg-muted"
                                onClick={onShowSidebar}
                            >
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`container hidden md:flex pt-3 gap-5 border-b border-border-20 ${
                        menuActive == "" && "pb-1"
                    }`}
                >
                    {dataMenu.map((menu, i) => (
                        <Link className="outline-none" href={menu.href} key={i}>
                            <div
                                className={`flex items-center text-sm gap-2 ${
                                    menu.name == menuActive &&
                                    "border-b-2 border-primary pb-1"
                                }`}
                            >
                                <i
                                    className={`fa-solid ${menu.icon} ${
                                        menu.name == menuActive &&
                                        "text-primary"
                                    }`}
                                ></i>
                                <span
                                    className={`${
                                        menu.name == menuActive &&
                                        "text-primary"
                                    } font-secondary`}
                                >
                                    {menu.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div
                    className="container py-2 border-b border-border-20"
                    style={{ display: isSearchMobile ? "block" : "none" }}
                >
                    <div className="w-full relative">
                        <InputNavbar placeholder="Cari Game atau Voucher" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <SidebarMenu
                isSubMenu={isSubMenu}
                styleSidebar={styleSidebar}
                setIsSubMenu={setIsSubMenu}
                setStyleSidebar={setStyleSidebar}
                dataMenu={dataMenu}
            />
        </>
    );
}
