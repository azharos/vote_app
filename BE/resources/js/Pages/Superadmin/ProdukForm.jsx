import React, { useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CustomToast,
    FormHorizontalCMS,
    FormInputCMS,
    FormInputGroupCMS,
    FormSelectCMS,
    FormSwitchCMS,
    FormTextareaHorizontalCMS,
    InputGroupCMS,
    LayoutCMS,
} from "../../Components";
import {
    ClearTitikRupiah,
    isEmpty,
    Rupiah,
    ServicePost,
    useValidationErrors,
} from "../../Utils";
import { router, useForm } from "@inertiajs/react";

export default function ProdukForm({
    Konfigurasi,
    title,
    dataKategori,
    dataProdukGroup,
    dataIcons,
    errors,
}) {
    useValidationErrors(errors);

    const [isLoading, setIsLoading] = useState(false);
    const [selectLayanan, setSelectLayanan] = useState({
        isShow: true,
        data: [],
    });
    const [showCard, setShowCard] = useState({
        showIcons: false,
        isSinkron: false,
    });

    const { data, setData, post } = useForm({
        kategori_id: "",
        layanan_id: "",
        produk_group_id: "",
        icon_id: "/image/no_image.jpg",
        status: true,
        skuCode: "",
        nama: "",
        keterangan: "",
        harga_asli: 0,
        margin_harga_tamu: 0,
        harga_tamu: 0,
        margin_harga_member: 0,
        harga_member: 0,
    });

    const onChange = async (dt, select) => {
        if (isEmpty(dt.value)) {
            setSelectLayanan({
                isShow: true,
                data: [],
            });
            return;
        }

        if (select == "kategori") {
            const result = await getLayanan(dt.value);
            if (result.status) {
                setData("kategori_id", dt.value);
                setSelectLayanan({
                    isShow: false,
                    data: result.data,
                });
            } else {
                setSelectLayanan({
                    isShow: true,
                    data: [],
                });
            }
        } else if (select == "layanan") {
            setData("layanan_id", dt.value);
        } else if (select == "produk_group") {
            setData("produk_group_id", dt.value);
        }
    };

    const getLayanan = async (value) => {
        const result = await ServicePost("/superadmin/produk/ajax", {
            kategori_id: value,
            tipe: "kategori",
        });

        return result;
    };

    const onIconProduk = (tipe, dt = "") => {
        if (tipe == "hapus") {
            setData("icon_id", "/image/no_image.jpg");
        } else if (tipe == "show") {
            setShowCard((prevState) => ({
                ...prevState,
                ["showIcons"]: !prevState.showIcons,
            }));
        } else if (tipe == "selected") {
            setData("icon_id", dt.gambar);
            setShowCard((prevState) => ({
                ...prevState,
                ["showIcons"]: false,
            }));
        }
    };

    const onChangeRupiah = (val, form, formHarga) => {
        const new_val = Rupiah(val);
        const harga_asli = data.harga_asli;
        const harga_ =
            parseInt(ClearTitikRupiah(new_val.toString())) +
            parseInt(ClearTitikRupiah(harga_asli.toString()));

        setData(form, new_val);
        setData(formHarga, Rupiah(harga_.toString()));
    };

    const onSubmit = () => {
        post("/superadmin/produk", {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    const onSkuCode = async () => {
        setShowCard((prevState) => ({ ...prevState, ["isSinkron"]: true }));

        const result = await ServicePost("/superadmin/produk/ajax", {
            skuCode: data.skuCode,
            tipe: "sku_code",
        });

        setShowCard((prevState) => ({ ...prevState, ["isSinkron"]: false }));

        const response = result.data;
        if (!response.status) {
            setData("skuCode", "");
            CustomToast("info", response.message);
            return;
        }

        setData("nama", response.message.nama);
        setData("keterangan", response.message.desc);
        setData("harga_asli", Rupiah(`${response.message.hargaProduk}`));
        setData("harga_tamu", Rupiah(`${response.message.hargaProduk}`));
        setData("harga_member", Rupiah(`${response.message.hargaProduk}`));

        CustomToast("success", "SKU Code Berhasil Terhubung");
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo} title={title}>
            <div className="grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 space-y-5">
                    <CardTitle
                        title="Hubungkan Produk"
                        desc="Cek di Menu Daftar Harga"
                    >
                        <FormHorizontalCMS
                            title="SKU Code"
                            value={data.skuCode}
                            onChange={(e) => setData("skuCode", e.target.value)}
                        />
                        <ButtonCMS
                            title="Sinkron"
                            bgColor="bg-meta-8 hover:opacity-90"
                            className="w-full"
                            onClick={onSkuCode}
                            disabled={showCard.isSinkron}
                        />
                    </CardTitle>
                    <CardTitle title="Informasi Utama">
                        <FormHorizontalCMS
                            title="Nama"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <div className="">
                            <FormTextareaHorizontalCMS
                                title="Keterangan"
                                value={data.keterangan}
                                onChange={(e) =>
                                    setData("keterangan", e.target.value)
                                }
                            />
                            <div className="grid grid-cols-2 mt-1">
                                <div className=""></div>
                                <div className="text-sm">
                                    * Kosongkan jika tidak ada keterangan
                                </div>
                            </div>
                        </div>
                    </CardTitle>
                    <CardTitle title="Harga">
                        <FormInputGroupCMS
                            title="Harga Produk (Asli)"
                            label="Rp"
                            value={Rupiah(`${data.harga_asli}`)}
                            disabled
                        />
                        <div
                            className="bg-form-strokedark"
                            style={{ height: 1 }}
                        />
                        <div className="grid grid-cols-2 gap-5">
                            <FormInputGroupCMS
                                title="Margin Harga Tamu"
                                label="Rp"
                                value={data.margin_harga_tamu}
                                onChange={(e) =>
                                    onChangeRupiah(
                                        e.target.value,
                                        "margin_harga_tamu",
                                        "harga_tamu"
                                    )
                                }
                            />
                            <FormInputGroupCMS
                                title="Harga Tamu"
                                label="Rp"
                                disabled
                                value={data.harga_tamu}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <FormInputGroupCMS
                                title="Margin Harga Member"
                                label="Rp"
                                value={data.margin_harga_member}
                                onChange={(e) =>
                                    onChangeRupiah(
                                        e.target.value,
                                        "margin_harga_member",
                                        "harga_member"
                                    )
                                }
                            />
                            <FormInputGroupCMS
                                title="Harga Member"
                                label="Rp"
                                disabled
                                value={data.harga_member}
                            />
                        </div>
                    </CardTitle>
                </div>
                <div className="md:col-span-2 space-y-5">
                    <CardTitle title="Icon">
                        <div className="flex gap-2 items-end">
                            <img
                                src={data.icon_id}
                                alt=""
                                className="max-w-20 w-full h-auto"
                            />
                            <div className="">
                                <ButtonCMS
                                    title="Hapus"
                                    bgColor="bg-danger hover:opacity-90"
                                    disabled={
                                        data.icon_id == "/image/no_image.jpg"
                                            ? true
                                            : false
                                    }
                                    onClick={() => onIconProduk("hapus")}
                                    size="sm"
                                />
                            </div>
                            <div className="">
                                <ButtonCMS
                                    title="Pilih Gambar"
                                    size="sm"
                                    onClick={() => onIconProduk("show")}
                                />
                            </div>
                        </div>
                        {showCard.showIcons && (
                            <>
                                <div className=""></div>
                                <div className="grid md:grid-cols-5 lg:grid-cols-4 gap-4">
                                    {dataIcons.map((dt, idx) => (
                                        <div
                                            className="rounded-lg p-2 bg-boxdark flex flex-col justify-between gap-3"
                                            key={idx}
                                        >
                                            <img
                                                src={dt.gambar}
                                                alt=""
                                                className="w-full h-15 object-contain object-center "
                                            />
                                            <ButtonCMS
                                                size="sm"
                                                title="Pilih"
                                                className="w-full"
                                                onClick={() =>
                                                    onIconProduk("selected", dt)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </CardTitle>
                    <CardTitle title="Status">
                        <FormSwitchCMS
                            title="Status Produk"
                            value={data.status}
                            onChange={() => setData("status", !data.status)}
                        />
                    </CardTitle>
                    <CardTitle title="Relasi">
                        <FormSelectCMS
                            title="Kategori"
                            data={dataKategori}
                            onChange={(val) => onChange(val, "kategori")}
                        />
                        <FormSelectCMS
                            title="Layanan"
                            disabled={selectLayanan.isShow}
                            data={selectLayanan.data}
                            onChange={(val) => onChange(val, "layanan")}
                        />
                        <div>
                            <FormSelectCMS
                                type="auto_create"
                                title="Kelompok Produk"
                                data={dataProdukGroup}
                                onChange={(val) =>
                                    onChange(val, "produk_group")
                                }
                            />
                            <div className="mt-1 text-sm">
                                * Bisa ditambahkan langsung dalam input select
                            </div>
                        </div>
                    </CardTitle>
                </div>
            </div>
            <Card className="p-5 space-y-5">
                <div className="flex justify-between items-center">
                    <h3
                        className="cursor-pointer font-medium"
                        onClick={() => router.get("/superadmin/produk")}
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
