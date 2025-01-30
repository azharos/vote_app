import React from "react";
import { isEmpty } from "../../Utils";
import { router } from "@inertiajs/react";

export const TheadTr = ({ children }) => {
    return (
        <thead>
            <tr className="text-left bg-meta-4">{children}</tr>
        </thead>
    );
};

export const TheadTh = ({ title, width = "min-w-30" }) => {
    return (
        <th className={`p-4 whitespace-nowrap text-left ${width}`}>{title}</th>
    );
};

export const Tbody = ({
    children,
    data = [],
    colSpan = 1,
    isLoading = false,
}) => {
    return (
        <tbody className="divide-y divide-meta-4 text-white">
            {isLoading ? (
                <tr className="font-secondary">
                    <th colSpan={colSpan} className="p-4">
                        Loading...
                    </th>
                </tr>
            ) : (
                <>
                    {isEmpty(data) ? (
                        <tr className="h-52 font-secondary">
                            <th colSpan={colSpan}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="mx-auto h-12 w-12 text-foreground"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                    ></path>
                                </svg>
                                Tidak Ada Data !
                            </th>
                        </tr>
                    ) : (
                        <>{children}</>
                    )}
                </>
            )}
        </tbody>
    );
};

export const Table = ({ children }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">{children}</table>
        </div>
    );
};

export const TablePagination = ({
    children,
    pagination = [],
    formSearch = {},
}) => {
    return (
        <>
            <Pagination pagination={pagination} formSearch={formSearch} />
            <div className="overflow-x-auto">
                <table className="min-w-full">{children}</table>
            </div>
        </>
    );
};

export const Pagination = ({ pagination, formSearch = {} }) => {
    const onSearch = (link) => {
        router.get(link, { ...formSearch }, { preserveState: true });
    };

    return (
        <div className="my-3 flex justify-end gap-5 items-center">
            <div className="">
                {pagination.from || 0}-{pagination.to || 0} dari{" "}
                {pagination.total}
            </div>
            <div className="flex gap-2">
                <button
                    type="button"
                    disabled={pagination.current_page == 1}
                    className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => onSearch(pagination.first_page_url)}
                >
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button
                    type="button"
                    disabled={pagination.current_page == 1}
                    className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => onSearch(pagination.prev_page_url)}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                    type="button"
                    disabled={pagination.current_page == pagination.last_page}
                    className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => onSearch(pagination.next_page_url)}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
                <button
                    type="button"
                    disabled={pagination.current_page == pagination.last_page}
                    className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => onSearch(pagination.last_page_url)}
                >
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    );
};

export const TablePaginationAjax = ({ children, onFetchPagination, data }) => {
    const listPage = data.listPage || "0-0 dari 0";
    const page = data.page || 1;
    const total_pages = data.total_pages || 0;
    const search = data.search;

    return (
        <>
            <div className="my-3 flex justify-end gap-5 items-center">
                <div className="">{listPage}</div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        disabled={page == 1}
                        className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                        onClick={() => onFetchPagination(1, search)}
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button
                        type="button"
                        disabled={page == 1}
                        className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                        onClick={() => onFetchPagination(page - 1, search)}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        type="button"
                        disabled={page >= total_pages}
                        className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                        onClick={() => onFetchPagination(page + 1, search)}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                    <button
                        type="button"
                        disabled={page >= total_pages}
                        className="flex justify-center items-center text-meta-2 text-xl size-10 rounded-full hover:bg-meta-4 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                        onClick={() => onFetchPagination(total_pages, search)}
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">{children}</table>
            </div>
        </>
    );
};
