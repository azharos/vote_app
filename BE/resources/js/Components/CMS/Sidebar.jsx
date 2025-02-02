import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";
import { isEmpty } from "../../Utils";

const dataMenu = [
    {
        nama: "Menu Utama",
        dataSubMenu: [
            {
                icon: "fa-house",
                namaMenu: "Dashboard",
                href: "dashboard",
            },
            {
                icon: "fa-gear",
                namaMenu: "Konfigurasi",
                href: "konfigurasi",
            },
            {
                icon: "fa-users",
                namaMenu: "Data Member",
                href: "member",
            },
            {
                icon: "fa-money-bill",
                namaMenu: "Data Metode",
                href: "metode-pembayaran",
            },
            {
                icon: "fa-money-bill-transfer",
                namaMenu: "Data Topup",
                href: "topup",
            },
            {
                icon: "fa-percent",
                namaMenu: "Data Promo",
                href: "promo",
            },
        ],
    },
    {
        nama: "Menu Produk",
        dataSubMenu: [
            {
                icon: "fa-bars",
                namaMenu: "Data Kategori",
                href: "kategori",
            },
            {
                icon: "fa-gamepad",
                namaMenu: "Data Layanan",
                href: "layanan",
            },
            {
                icon: "fa-list",
                namaMenu: "Data Produk",
                href: "produk",
            },
            {
                icon: "fa-tags",
                namaMenu: "Daftar Harga",
                href: "daftar-harga",
            },
        ],
    },
    {
        nama: "Report",
        dataSubMenu: [
            {
                icon: "fa-file-lines",
                namaMenu: "Transaksi",
                href: "transaksi",
            },
        ],
    },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen, logo = "" }) {
    const { url } = usePage();

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };

        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document
                .querySelector("body")
                ?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-99 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 shadow-md ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <img
                src="/image/sidebar.jpg"
                alt=""
                className="object-cover object-center w-full h-screen opacity-80 absolute top-0 left-0 outline-none"
            />
            <div className="absolute top-0 left-0 w-full h-full dark:bg-boxdark-3 opacity-80" />

            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 relative">
                <Link href="/admin" className="outline-none">
                    <img
                        src={isEmpty(logo) ? "/image/no_image.jpg" : logo}
                        alt="Logo"
                    />
                </Link>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear relative">
                {/* <!-- Sidebar Menu --> */}
                <nav className="py-4 px-4 lg:px-6">
                    {dataMenu.map((menu, idx) => (
                        <div key={idx}>
                            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                                {menu.nama}
                            </h3>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                {menu.dataSubMenu.map((subMenu, i) => (
                                    <li key={i}>
                                        <Link
                                            href={`/superadmin/${subMenu.href}`}
                                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-gradient-to-r dark:hover:from-meta-4 select-none ${
                                                url.startsWith(
                                                    `/superadmin/${subMenu.href}`
                                                ) &&
                                                "bg-graydark dark:bg-gradient-to-r dark:from-meta-4"
                                            }`}
                                        >
                                            <div className="w-7">
                                                <i
                                                    className={`fa-solid ${subMenu.icon}`}
                                                ></i>
                                            </div>
                                            {subMenu.namaMenu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
