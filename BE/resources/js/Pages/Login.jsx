import React, { useState } from "react";
import { Button, ButtonLoading, FormInput, FormPassword } from "../Components";
import { Link, router } from "@inertiajs/react";

import { ToastContainer, Zoom } from "react-toastify";
import { useInitialAction, useValidationErrors } from "../Utils";

export default function Login({ errors }) {
    useInitialAction();
    useValidationErrors(errors);

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const onChange = (form, txt, type = "input") => {
        if (type == "input") {
            setForm((prevState) => ({ ...prevState, [form]: txt }));
        } else if (type == "file") {
            setForm((prevState) => ({ ...prevState, [form]: txt }));
        }
    };

    const onSubmit = () => {
        router.on("before", () => {
            setIsLoading(true);
        });

        router.post("/login", form);

        router.on("finish", () => {
            setIsLoading(false);
        });
    };

    return (
        <>
            <div className="lg:grid lg:grid-cols-2">
                <div className="relative">
                    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-20 md:w-[550px] md:px-20">
                        <div className="mx-auto w-full max-w-md space-y-8 lg:mx-0">
                            <div>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                    Masuk
                                </h2>
                                <p className="mt-2 text-sm">
                                    Masuk dengan akun yang telah Kamu daftarkan.
                                </p>
                            </div>

                            <div className="mt-8 space-y-6">
                                <div className="space-y-3 rounded-md shadow-sm">
                                    <div>
                                        <FormInput
                                            title="Username"
                                            placeholder="Username"
                                            value={form.username}
                                            onChange={(e) =>
                                                onChange(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <FormPassword
                                            title="Password"
                                            placeholder="Password"
                                            value={form.password}
                                            onChange={(e) =>
                                                onChange(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Link>
                                        <span className="text-sm text-primary hover:text-primary-75 font-medium">
                                            Lupa kata sandi mu?
                                        </span>
                                    </Link>
                                </div>
                                {isLoading ? (
                                    <ButtonLoading classBtn="w-full" />
                                ) : (
                                    <Button
                                        classBtn="w-full"
                                        title="Masuk"
                                        onClick={onSubmit}
                                    />
                                )}
                            </div>

                            <p className="text-center text-sm">
                                Belum memiliki akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-primary outline-none"
                                >
                                    Daftar
                                </Link>
                            </p>
                            <span className="flex w-auto font-secondary">
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="bg-muted h-[1px] w-full my-2 shrink"
                                ></div>
                                <span className="whitespace-nowrap px-4 text-sm">
                                    Atau lanjutkan dengan
                                </span>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="bg-muted h-[1px] w-full my-2 shrink"
                                ></div>
                            </span>
                            <button
                                type="button"
                                className="block w-full rounded-2xl border border-muted bg-transparent hover:bg-muted duration-300 ease-in-out py-2 text-sm font-secondary font-semibold relative"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="#fbc02d"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#e53935"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4caf50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1565c0"
                                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                    </svg>
                                </span>
                                Google
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-4 left-4 z-50">
                        <Link href="/">
                            <div className="flex justify-center items-center whitespace-nowrap rounded-lg shadow-sm text-sm bg-muted h-9 w-9 cursor-pointer">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block relative max-h-screen overflow-hidden">
                    <img
                        src="/image/bgimage.jpg"
                        alt=""
                        className="object-cover object-center w-full h-screen"
                    />
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-background "></div>
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
        </>
    );
}
