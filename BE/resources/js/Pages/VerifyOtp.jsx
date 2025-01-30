import React, { useState } from "react";
import { Button, InputOTP } from "../Components";
import { Link } from "@inertiajs/react";
import { isEmpty } from "../Utils";

export default function VerifyOtp({ Konfigurasi }) {
    const [OTP, setOTP] = useState([]);

    const onVerify = () => {
        const new_otp = OTP.join("");
        console.log(new_otp);
    };

    return (
        <div className="lg:grid lg:grid-cols-2">
            <div className="relative">
                <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-20 md:w-[550px] md:px-20">
                    <div className="mx-auto w-full max-w-md space-y-10 lg:mx-0">
                        <img
                            src={
                                isEmpty(Konfigurasi.logo)
                                    ? ""
                                    : Konfigurasi.logo
                            }
                            className="w-40 h-auto"
                        />
                        <div className="">
                            <h3 className="text-3xl font-bold">
                                Verifikasi 2 Langkah
                            </h3>
                            <p className="mt-2">
                                Masukkan kode OTP yang telah dikirim via
                                WhatsApp.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="grid grid-cols-6 gap-x-4">
                                <InputOTP
                                    fieldCount={6}
                                    setFinalValue={setOTP}
                                />
                            </div>
                            <Button
                                title="Verifikasi Akun"
                                disabled={OTP.join("").length !== 6}
                                onClick={onVerify}
                            />
                        </div>
                        <h6 className="text-sm font-secondary">
                            Belum menerima kode OTP?{" "}
                            <span className="cursor-pointer underline">
                                Kirim Ulang
                            </span>
                        </h6>
                    </div>
                </div>

                <div className="absolute top-4 left-4 z-50">
                    <Link href="/login">
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
