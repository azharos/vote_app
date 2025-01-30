import React, { useRef, useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    FormCkeditorCMS,
    FormCkeditorHorizontalCMS,
    FormFileCMS,
    FormFileHorizontalCMS,
    FormHorizontalCMS,
    FormSelectHorizontalCMS,
    FormTextareaCMS,
    FormTextareaHorizontalCMS,
    LayoutCMS,
} from "../../Components";
import { router, useForm } from "@inertiajs/react";
import { useValidationErrors } from "../../Utils";

export default function LayananForm({
    title,
    dataKategori,
    dataLayanan,
    routeForm,
    errors,
    Konfigurasi,
}) {
    useValidationErrors(errors);

    const [isLoading, setIsLoading] = useState(false);

    const [previewImage, setPreviewImage] = useState({
        gambar: dataLayanan.gambar || "",
        banner: dataLayanan.banner || "",
    });

    const { data, setData, post } = useForm({
        gambar: dataLayanan.gambar || "",
        banner: dataLayanan.banner || "",
        kategori: dataLayanan.kategori_id || "",
        nama: dataLayanan.nama || "",
        subnama: dataLayanan.sub_nama || "",
        slug: dataLayanan.slug || "",
        status: dataLayanan.status || "",
        deskripsi_game: dataLayanan.deskripsi_game || "",
        deskripsi_akun: dataLayanan.deskripsi_akun || "",
    });

    const onSubmit = () => {
        post(routeForm, {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
            onSuccess: () => {},
        });
    };

    const onChangeNama = (val) => {
        setData("nama", val);
        setData("slug", val.replaceAll(" ", "-").toLowerCase());
    };

    const onDrop = (file, form) => {
        setPreviewImage((prevState) => ({
            ...prevState,
            [form]: URL.createObjectURL(file[0]),
        }));
        setData((prevState) => ({ ...prevState, [form]: file[0] }));
    };

    const onCloseImage = (form) => {
        setPreviewImage((prevState) => ({
            ...prevState,
            [form]: "",
        }));
        setData((prevState) => ({ ...prevState, [form]: "" }));
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo} title={title}>
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-3 space-y-5">
                    <CardTitle title="Informasi Utama">
                        <FormSelectHorizontalCMS
                            title="Kategori"
                            data={dataKategori}
                            onChange={(dt) => setData("kategori", dt.value)}
                            selected={data.kategori}
                        />

                        <FormHorizontalCMS
                            title="Nama"
                            placeholder="Mobile Legend, Free Fire dll"
                            value={data.nama}
                            onChange={(e) => onChangeNama(e.target.value)}
                        />
                        <FormHorizontalCMS
                            title="Sub Nama"
                            placeholder="Moonton, Garena dll"
                            value={data.subnama}
                            onChange={(e) => setData("subnama", e.target.value)}
                        />

                        <FormHorizontalCMS
                            title="Slug"
                            placeholder="mobile-legend, free-fire"
                            value={data.slug}
                            onChange={(e) => setData("slug", e.target.value)}
                        />
                    </CardTitle>
                    <CardTitle title="Deskripsi">
                        <FormTextareaCMS
                            title="Deskripsi Akun"
                            value={data.deskripsi_akun}
                            onChange={(e) =>
                                setData("deskripsi_akun", e.target.value)
                            }
                        />

                        <FormCkeditorCMS
                            title="Deskripsi Game"
                            value={data.deskripsi_game}
                            onChange={(data) => setData("deskripsi_game", data)}
                        />
                    </CardTitle>
                </div>

                <div className="col-span-2">
                    <CardTitle title="Informasi Gambar">
                        <FormFileCMS
                            title="Gambar"
                            previewImage={previewImage.gambar}
                            onDropFile={(file) => onDrop(file, "gambar")}
                            onCloseImage={() => onCloseImage("gambar")}
                        />
                        <FormFileCMS
                            title="Banner"
                            previewImage={previewImage.banner}
                            onDropFile={(file) => onDrop(file, "banner")}
                            onCloseImage={() => onCloseImage("banner")}
                        />
                    </CardTitle>
                </div>
            </div>

            <Card className="p-5 space-y-5">
                <div className="flex justify-between items-center">
                    <h3
                        className="cursor-pointer font-medium"
                        onClick={() => router.get("/superadmin/layanan")}
                    >
                        Batal
                    </h3>
                    {isLoading ? (
                        <ButtonLoadingCMS />
                    ) : (
                        <ButtonCMS title="Submit" onClick={onSubmit} />
                    )}
                </div>
            </Card>
        </LayoutCMS>
    );
}
