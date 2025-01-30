import React from "react";
import { isEmpty } from "../Utils";

const TheadTh = ({ title = "" }) => {
    return (
        <th className="p-4 whitespace-nowrap text-left text-xs font-secondary font-medium">
            {title}
        </th>
    );
};

export const TbodyTr = ({ children }) => {
    return <tr className="even:bg-muted">{children}</tr>;
};

export const TbodyTd = ({ children }) => {
    return (
        <td className="p-4 whitespace-nowrap text-left text-xs font-secondary font-medium">
            {children}
        </td>
    );
};

export const Table = ({ children, dataThead = [], dataTbody = [] }) => {
    return (
        <div className="overflow-x-auto ring-muted ring-1 sm:rounded-xl">
            <table className="border-collapse min-w-full">
                <thead>
                    <tr className="text-left border-b border-muted">
                        {dataThead.map((itm, idx) => (
                            <TheadTh key={idx} title={itm} />
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-muted">
                    {isEmpty(dataTbody) ? (
                        <tr className="h-52 font-secondary">
                            <th colSpan={dataThead.length}>
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
                </tbody>
            </table>
        </div>
    );
};
