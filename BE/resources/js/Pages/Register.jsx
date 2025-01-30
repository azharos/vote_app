import { Link } from "@inertiajs/react";
import React from "react";
import { Button, FormInput, FormPassword } from "../Components";

export default function Register() {
    return (
        <div className="lg:grid lg:grid-cols-2">
            <div className="relative">
                <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-20 md:w-[550px] md:px-20">
                    <div className="mx-auto w-full max-w-md space-y-8 lg:mx-0">
                        <div>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                Daftar
                            </h2>
                            <p className="mt-2 text-sm">
                                Masukkan informasi pendaftaran yang valid.
                            </p>
                        </div>
                        <form
                            action=""
                            method="post"
                            className="mt-8 space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <FormInput
                                            title="Nama Lengkap"
                                            placeholder="Nama Lengkap"
                                        />
                                    </div>
                                    <div>
                                        <FormInput
                                            title="Username"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormInput
                                        title="Email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        title="Nomor Whatsapp"
                                        placeholder="Nomor Whatsapp"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <FormPassword
                                            title="Kata Sandi"
                                            placeholder="Kata Sandi"
                                        />
                                    </div>
                                    <div>
                                        <FormPassword
                                            title="Konfirmasi kata sandi"
                                            placeholder="Konfirmasi kata sandi"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                classBtn="block w-full"
                                title="Daftar"
                            />
                        </form>
                        <p className="text-center text-sm">
                            Sudah memiliki akun?{" "}
                            <Link
                                href="/login"
                                className="text-primary outline-none"
                            >
                                Masuk
                            </Link>
                        </p>
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
    );
}
