import React, { useRef, useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CustomToast,
    FormHorizontalCMS,
    FormSelectHorizontalCMS,
    LayoutCMS,
    TableCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router, useForm } from "@inertiajs/react";
import { isEmpty, Rupiah, useValidationErrors } from "../../Utils";

export default function Metode({
    dataPayment,
    dataKategori,
    dataGambarMetode,
    errors,
    Konfigurasi,
}) {
    useValidationErrors(errors);

    const selectRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showCard, setShowCard] = useState({
        show: false,
        title: "",
        selectKategori: "",
        showDataGambar: false,
        dataGambar: [],
    });

    const { reset, data, setData, post } = useForm({
        id: "",
        metode: "",
        kategori: "",
        gambar: "/image/no_image.jpg",
        biaya: "Rp 0 + 0 %",
    });

    const onShow = (tipe, dt = "") => {
        if (tipe == "tambah") {
            setShowCard({
                show: true,
                title: "Tambah Metode",
                showDataGambar: false,
                dataGambar: [],
            });

            selectRef.current.selectOption({
                value: "",
                label: "Pilih Kategori",
            });

            setData({
                id: "",
                metode: "",
                kategori: "",
                gambar: "/image/no_image.jpg",
                biaya: "Rp 0 + 0 %",
            });
        } else if (tipe == "edit") {
            setData({
                id: dt.id,
                metode: dt.metode,
                kategori: dt.payment_metode.kategori,
                gambar: dt.payment_metode.foto,
                biaya: `Rp ${`${dt.payment_metode.fee_flat}`} + ${
                    dt.payment_metode.fee_percent
                } %`,
            });

            const new_method = dataGambarMetode.filter(
                (mtd) => mtd.kategori == dt.payment_metode.kategori
            );

            setShowCard({
                show: true,
                title: "Edit Metode",
                showDataGambar: false,
                dataGambar: new_method,
            });

            selectRef.current.selectOption({
                value: dt.payment_metode.kategori,
                label: dt.payment_metode.kategori,
            });
        } else if (tipe == "close") {
            setShowCard({
                show: false,
                title: "",
                showDataGambar: false,
                dataGambar: [],
            });
            reset();
            reset("gambar", "/image/no_image.jpg");

            selectRef.current.selectOption({
                value: "",
                label: "Pilih Kategori",
            });
        }
    };

    const onShowGambar = () => {
        setShowCard((prevState) => ({
            ...prevState,
            ["showDataGambar"]: !showCard.showDataGambar,
        }));
    };

    const onSelect = (select) => {
        const new_method = dataGambarMetode.filter(
            (dt) => dt.kategori == select.value
        );

        setShowCard((prevState) => ({
            ...prevState,
            ["dataGambar"]: new_method,
        }));

        setData("kategori", select.value);
    };

    const onPilihGambar = (dt) => {
        setData("gambar", dt.foto);
        setData("metode", dt.metode);
        setData(
            "biaya",
            `Rp ${Rupiah(`${dt.fee_flat}`)} + ${dt.fee_percent} %`
        );
        setShowCard((prevState) => ({
            ...prevState,
            ["showDataGambar"]: false,
        }));
    };

    const onHapusGambar = () => {
        setData("gambar", "/image/no_image.jpg");
        setData("metode", "");
    };

    const onSubmit = () => {
        post("/superadmin/metode-pembayaran", {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
            onSuccess: (page) => {
                onShow("close");
            },
        });
    };

    const onDelete = (dt) => {
        CustomToast("delete", "", () => {
            router.delete(`/superadmin/metode-pembayaran/${dt.id}`);
        });
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <div className={`${!showCard.show && "hidden"}`}>
                <CardTitle title={showCard.title}>
                    <FormSelectHorizontalCMS
                        title="Kategori"
                        data={dataKategori}
                        onChange={onSelect}
                        selectRef={selectRef}
                    />
                    <div className="grid grid-cols-2 items-center gap-y-3">
                        <div className="">
                            <label
                                htmlFor=""
                                className="mb-3 block text-black dark:text-white"
                            >
                                Gambar
                            </label>
                        </div>
                        <div className="flex items-end gap-2">
                            <img
                                src={data.gambar}
                                alt=""
                                className="max-w-20 w-full h-auto"
                            />
                            <div className="">
                                <ButtonCMS
                                    title="Hapus"
                                    bgColor="bg-danger hover:opacity-90"
                                    disabled={
                                        data.gambar == "/image/no_image.jpg"
                                            ? true
                                            : false
                                    }
                                    onClick={onHapusGambar}
                                    size="sm"
                                />
                            </div>
                            <div className="">
                                <ButtonCMS
                                    title="Pilih Gambar"
                                    size="sm"
                                    onClick={onShowGambar}
                                    disabled={
                                        isEmpty(data.kategori) ? true : false
                                    }
                                />
                            </div>
                        </div>
                        {showCard.showDataGambar && (
                            <>
                                <div className=""></div>
                                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {!isEmpty(showCard.dataGambar) &&
                                        showCard.dataGambar.map((dt, idx) => (
                                            <div
                                                className="rounded-lg p-2 bg-boxdark flex flex-col justify-between gap-3"
                                                key={idx}
                                            >
                                                <img
                                                    src={dt.foto}
                                                    alt=""
                                                    className="w-full h-12 object-contain object-center"
                                                />
                                                <ButtonCMS
                                                    size="sm"
                                                    title="Pilih"
                                                    className="w-full"
                                                    onClick={() =>
                                                        onPilihGambar(dt)
                                                    }
                                                />
                                            </div>
                                        ))}
                                </div>
                            </>
                        )}
                    </div>
                    <FormHorizontalCMS
                        title="Metode"
                        value={data.metode}
                        onChange={(e) => setData("metode", e.target.value)}
                    />
                    <FormHorizontalCMS
                        title="Biaya"
                        value={data.biaya}
                        disabled
                    />
                    <div className="flex justify-between items-center">
                        <h3
                            className="cursor-pointer font-medium"
                            onClick={() => onShow("close")}
                        >
                            Batal
                        </h3>
                        {isLoading ? (
                            <ButtonLoadingCMS />
                        ) : (
                            <ButtonCMS title="Submit" onClick={onSubmit} />
                        )}
                    </div>
                </CardTitle>
            </div>
            <Card className="p-5 space-y-5">
                <ButtonCMS
                    title="Tambah Metode"
                    onClick={() => onShow("tambah")}
                />
                <TableCMS>
                    <TheadTrCMS>
                        <TheadThCMS title="Gambar" width="w-15" />
                        <TheadThCMS title="Metode" />
                        <TheadThCMS title="Kategori" />
                        <TheadThCMS title="Biaya" />
                        <TheadThCMS title="Aksi" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={5} data={dataPayment}>
                        {dataPayment.map((dt, idx) => (
                            <tr key={idx} className="text-sm">
                                <td className="p-4">
                                    <img src={dt.payment_metode.foto} alt="" />
                                </td>
                                <td className="p-4">{dt.metode}</td>
                                <td className="p-4">
                                    {dt.payment_metode.kategori}
                                </td>
                                <td className="p-4">
                                    Rp {Rupiah(`${dt.payment_metode.fee_flat}`)}{" "}
                                    + {dt.payment_metode.fee_percent} %
                                </td>
                                <td className="p-4 space-x-1 space-y-1">
                                    <ButtonIconCMS
                                        icon="fa-solid fa-pen-to-square"
                                        id="btn-edit"
                                        onClick={() => onShow("edit", dt)}
                                    />
                                    <ButtonIconCMS
                                        icon="fa-regular fa-trash-can"
                                        bgColor="bg-danger"
                                        id="btn-delete"
                                        onClick={() => onDelete(dt)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </TbodyCMS>
                </TableCMS>
            </Card>
        </LayoutCMS>
    );
}
