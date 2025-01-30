import React from "react";
import { ButtonCMS } from ".";
import { isEmpty } from "../../Utils";
import { router } from "@inertiajs/react";

export function Card({ children, className = "" }) {
    return (
        <div
            className={`shadow-default bg-boxdark-3 border border-boxdark-3 rounded-lg w-full ${className}`}
        >
            {children}
        </div>
    );
}

export const CardTitle = ({
    children,
    title = "",
    className = "",
    desc = "",
}) => {
    return (
        <Card className={className}>
            <div className="p-5 border-b border-strokedark">
                <h3 className="font-medium text-white">{title}</h3>
                {!isEmpty(desc) && <div className="text-sm">{desc}</div>}
            </div>
            <div className="p-5 space-y-5">{children}</div>
        </Card>
    );
};

export const CardFormFilter = ({
    children,
    colGrid,
    url = "",
    formSearch = {},
}) => {
    const onSearch = () => {
        router.get(url, { ...formSearch }, { preserveState: true });
    };

    return (
        <div
            className={`p-5 w-full rounded-lg grid ${colGrid} gap-5 border border-strokedark`}
        >
            {children}
            <div className="flex gap-3 items-end">
                <ButtonCMS
                    className="w-full"
                    title="Search"
                    onClick={onSearch}
                />
                <button
                    type="button"
                    className={`rounded-md ring-1 ring-meta-3 text-center font-medium text-white hover:bg-opacity-90 outline-none py-2 px-4 text-base w-full hover:bg-meta-3 duration-300 disabled:pointer-events-none disabled:opacity-50`}
                    onClick={() => router.get(url)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export const CardFormFilterAjax = ({
    children,
    colGrid = "",
    url = "",
    onSearch,
}) => {
    return (
        <div
            className={`p-5 w-full rounded-lg grid ${colGrid} gap-5 border border-strokedark`}
        >
            {children}
            <div className="flex gap-3 items-end">
                <ButtonCMS
                    className="w-full"
                    title="Search"
                    onClick={onSearch}
                />
                <button
                    type="button"
                    className={`rounded-md ring-1 ring-meta-3 text-center font-medium text-white hover:bg-opacity-90 outline-none py-2 px-4 text-base w-full hover:bg-meta-3 duration-300 disabled:pointer-events-none disabled:opacity-50`}
                    onClick={() => router.get(url)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
