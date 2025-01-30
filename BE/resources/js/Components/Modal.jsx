import React from "react";

export const Modal = ({ isShow = false, size = "sm", children }) => {
    let sizing;

    switch (size) {
        case "sm":
            sizing = "max-w-sm";
            break;
        case "md":
            sizing = "max-w-md";
            break;
        case "lg":
            sizing = "max-w-lg";
            break;
        case "xl":
            sizing = "max-w-xl";
            break;
        default:
            break;
    }

    return (
        <div
            className={`${
                isShow ? "fixed" : "hidden"
            } top-0 left-0 w-full min-h-screen duration-500 ease-in-out opacity-100 z-50 bg-black-80`}
        >
            <div className="flex justify-center w-full min-h-screen px-4 sm:px-0">
                <div className={`${sizing} w-full relative min-h-screen py-8`}>
                    <div className="border border-input bg-background rounded-2xl space-y-5 px-5 py-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
