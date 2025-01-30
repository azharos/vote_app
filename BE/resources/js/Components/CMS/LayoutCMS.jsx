import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import {
    ToastContainer,
    toast,
    Slide,
    Zoom,
    Flip,
    Bounce,
} from "react-toastify";

import { Tooltip } from "react-tooltip";

import "../../../css/cms.css";
import { isEmpty, useInitialAction } from "../../Utils";

export default function LayoutCMS({ children, logo, title = "" }) {
    useInitialAction();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="dark:bg-meta-4 dark:text-bodydark">
                <div className="flex h-screen overflow-hidden">
                    <Sidebar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        logo={logo}
                    />

                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        <Header
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                            logo={logo}
                        />

                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 space-y-5">
                                {!isEmpty(title) && (
                                    <h2 className="text-title-md font-semibold text-white">
                                        {title}
                                    </h2>
                                )}

                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
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
            <Tooltip
                anchorSelect="#btn-edit"
                content="Edit"
                style={{ backgroundColor: "white", color: "#222" }}
            />
            <Tooltip
                anchorSelect="#btn-delete"
                content="Hapus"
                style={{ backgroundColor: "white", color: "#222" }}
            />
            <Tooltip
                anchorSelect="#btn-show"
                content="Lihat"
                style={{ backgroundColor: "white", color: "#222" }}
            />
            <Tooltip
                anchorSelect="#btn-tambah-produk"
                content="Tambah Produk"
                style={{ backgroundColor: "white", color: "#222" }}
            />
        </>
    );
}
