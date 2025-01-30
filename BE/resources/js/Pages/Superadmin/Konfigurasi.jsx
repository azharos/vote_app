import React, { useEffect, useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    InputCMS,
    InputFileCMS,
    InputGroupCMS,
    LayoutCMS,
    TextAreaCMS,
} from "../../Components";
import { isEmpty, useValidationErrors } from "../../Utils";
import { useForm } from "@inertiajs/react";

const InputKonfigurasi = ({
    title = "",
    value = "",
    onChange,
    placeholder = "",
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <InputCMS
                value={value}
                onChange={onChange}
                placeholder={new_placeholder}
            />
        </div>
    );
};

const InputFileKonfigurasi = ({
    title = "",
    onChange,
    desc = "",
    src = "",
}) => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <div className="">
                <img src={src} alt="" className="max-w-28 w-full h-auto mb-2" />
                <div className="space-y-1">
                    <InputFileCMS onChange={onChange} />
                    <span className="text-xs">{desc}</span>
                </div>
            </div>
        </div>
    );
};

const TextAreaKonfigurasi = ({
    title = "",
    value = "",
    onChange,
    placeholder = "",
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <TextAreaCMS
                value={value}
                onChange={onChange}
                placeholder={new_placeholder}
            />
        </div>
    );
};

const InputGroupKonfigurasi = ({
    label = "",
    title = "",
    value = "",
    onChange,
    placeholder = "",
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <InputGroupCMS
                placeholder={new_placeholder}
                label={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default function Konfigurasi({ errors, form }) {
    useValidationErrors(errors);

    const [isLoading, setIsLoading] = useState(false);

    const [previewImage, setPreviewImage] = useState({
        logo: form.logo || "/image/no_image.jpg",
        icon: form.icon || "/image/no_image.jpg",
    });

    const { data, setData, post } = useForm({
        judul: form.judul || "",
        deskripsi: form.deskripsi || "",
        prefixOrder: form.prefix_order || "",
        logo: "",
        icon: "",
        no_wa: form.no_wa || "",
        url_ig: form.url_ig || "",
        url_tiktok: form.url_tiktok || "",
        url_youtube: form.url_youtube || "",
        url_facebook: form.url_facebook || "",
    });

    const onSubmit = () => {
        post("/superadmin/konfigurasi", {
            onBefore: (visit) => {
                setIsLoading(true);
            },
            onFinish: (visit) => {
                setIsLoading(false);
            },
            onSuccess: (page) => {
                const result = page.props.form;

                setData({
                    judul: result.judul || "",
                    deskripsi: result.deskripsi || "",
                    prefixOrder: result.prefix_order || "",
                    logo: "",
                    icon: "",
                    no_wa: result.no_wa || "",
                    url_ig: result.url_ig || "",
                    url_tiktok: result.url_tiktok || "",
                    url_youtube: result.url_youtube || "",
                    url_facebook: result.url_facebook || "",
                });

                setPreviewImage({
                    logo: form.logo,
                    icon: form.icon,
                });
            },
        });
    };

    const onChangeFile = (form, txt) => {
        if (typeof txt != "undefined") {
            setPreviewImage((prevState) => ({
                ...prevState,
                [form]: URL.createObjectURL(txt),
            }));
            setData((prevState) => ({ ...prevState, [form]: txt }));
        }
    };

    return (
        <LayoutCMS logo={form.logo} title="Konfigurasi Umum">
            <Card className="p-5 space-y-5">
                <InputKonfigurasi
                    title="Judul Website"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                />
                <TextAreaKonfigurasi
                    title="Deskripsi Website"
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                />
                <InputKonfigurasi
                    title="Prefix Order ID"
                    value={data.prefixOrder}
                    onChange={(e) => setData("prefixOrder", e.target.value)}
                />
                <div className="bg-form-strokedark" style={{ height: 1 }} />
                <InputFileKonfigurasi
                    title="Logo"
                    onChange={(e) => onChangeFile("logo", e.target.files[0])}
                    src={previewImage.logo}
                />
                <InputFileKonfigurasi
                    title="Icon"
                    desc="Gunakan Ukuran 24x24 px"
                    onChange={(e) => onChangeFile("icon", e.target.files[0])}
                    src={previewImage.icon}
                />
                <div className="bg-form-strokedark" style={{ height: 1 }} />
                <InputGroupKonfigurasi
                    title="Nomor WhatsApp"
                    value={data.no_wa}
                    onChange={(e) => setData("no_wa", e.target.value)}
                    label="+62"
                />
                <InputKonfigurasi
                    title="URL Instagram"
                    value={data.url_ig}
                    onChange={(e) => setData("url_ig", e.target.value)}
                />
                <InputKonfigurasi
                    title="URL Tiktok"
                    value={data.url_tiktok}
                    onChange={(e) => setData("url_tiktok", e.target.value)}
                />
                <InputKonfigurasi
                    title="URL Youtube"
                    value={data.url_youtube}
                    onChange={(e) => setData("url_youtube", e.target.value)}
                />
                <InputKonfigurasi
                    title="URL Facebook"
                    value={data.url_facebook}
                    onChange={(e) => setData("url_facebook", e.target.value)}
                />
                {isLoading ? (
                    <ButtonLoadingCMS className="w-full" />
                ) : (
                    <ButtonCMS
                        title="Submit"
                        className="w-full"
                        onClick={onSubmit}
                    />
                )}
            </Card>
        </LayoutCMS>
    );
}
