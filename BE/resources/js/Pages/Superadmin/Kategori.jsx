import React, { useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CustomToast,
    FormHorizontalCMS,
    LayoutCMS,
    TableCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router, useForm } from "@inertiajs/react";
import { useValidationErrors } from "../../Utils";

const CardUrutan = ({ title, setActiveCard }) => {
    return (
        <div
            className="px-4 py-2 text-sm text-white bg-primary rounded-lg font-primary cursor-move select-none active:opacity-70"
            draggable
            onDragStart={() => setActiveCard(title)}
            onDragEnd={() => setActiveCard(null)}
        >
            {title}
        </div>
    );
};

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <div
            className={
                showDrop
                    ? "opacity-100 h-10 text-xs rounded-lg ease-in-out duration-200 border border-meta-3 flex justify-center items-center"
                    : "opacity-0 h-1 w-full text-xs"
            }
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
        >
            DropArea
        </div>
    );
};

const CardDragDrop = ({ data = [], setData, show }) => {
    const [activeCard, setActiveCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onDrop = (idx) => {
        const item = data.find((e) => e == activeCard);
        const updatedItem = data.filter((e) => e != activeCard);
        updatedItem.splice(idx, 0, item);
        setData((prevState) => ({
            ...prevState,
            dataUrutan: updatedItem,
        }));
    };

    const onSubmit = () => {
        router.post(
            "/superadmin/kategori/urutan",
            { data: data },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onSuccess: () => {
                    setIsLoading(false);
                    setData((prevState) => ({
                        ...prevState,
                        showUrutan: false,
                    }));
                },
            }
        );
    };

    const onClose = () => {
        setData((prevState) => ({
            ...prevState,
            showUrutan: false,
        }));
    };

    return (
        <div className={`w-full md:w-1/2 ${!show && "hidden"}`}>
            <CardTitle title="Urutan Kategori">
                <div className="flex flex-col gap-1">
                    <DropArea onDrop={() => onDrop(0)} />
                    {data.map((dt, i) => (
                        <React.Fragment key={i}>
                            <CardUrutan
                                title={dt}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea onDrop={() => onDrop(i + 1)} />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <h3
                        className="cursor-pointer font-medium"
                        onClick={onClose}
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
    );
};

export default function Kategori({ errors, dataKategori, Konfigurasi }) {
    useValidationErrors(errors);

    const [isLoading, setIsLoading] = useState(false);
    const [showCard, setShowCard] = useState({
        showForm: false,
        titleForm: "",
        showUrutan: false,
        dataUrutan: dataKategori.map((e) => e.nama),
    });

    const { reset, data, setData, post } = useForm({
        id: "",
        kategori: "",
        urutan: "",
    });

    const onShow = (tipe, dt = "") => {
        if (tipe == "tambah_form") {
            setShowCard((prevState) => ({
                ...prevState,
                showForm: true,
                titleForm: "Tambah Kategori",
                showUrutan: false,
            }));
        } else if (tipe == "edit_form") {
            setShowCard((prevState) => ({
                ...prevState,
                showForm: true,
                titleForm: "Edit Kategori",
                showUrutan: false,
            }));

            setData({
                id: dt.id,
                kategori: dt.nama,
                urutan: dt.urutan,
            });
        } else if (tipe == "close_form") {
            reset();

            setShowCard((prevState) => ({
                ...prevState,
                showForm: false,
                titleForm: "",
            }));
        } else if (tipe == "show_urutan") {
            setShowCard((prevState) => ({
                ...prevState,
                showForm: false,
                titleForm: "",
                showUrutan: true,
            }));
        }
    };

    const onSubmit = () => {
        post("/superadmin/kategori", {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
            onSuccess: (page) => {
                onShow("close_form");
            },
        });
    };

    const onDelete = (dt) => {
        CustomToast("delete", "", () => {
            router.delete(`/superadmin/kategori/${dt.id}`);
        });
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <div className={`${!showCard.showForm && "hidden"}`}>
                <CardTitle title={showCard.titleForm}>
                    <FormHorizontalCMS
                        title="Kategori"
                        value={data.kategori}
                        onChange={(e) => setData("kategori", e.target.value)}
                    />

                    {showCard.titleForm == "Edit Kategori" && (
                        <FormHorizontalCMS
                            title="Urutan"
                            value={data.urutan}
                            onChange={(e) => setData("urutan", e.target.value)}
                        />
                    )}

                    <div className="flex justify-between items-center">
                        <h3
                            className="cursor-pointer font-medium"
                            onClick={() => onShow("close_form")}
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
            <CardDragDrop
                data={showCard.dataUrutan}
                setData={setShowCard}
                show={showCard.showUrutan}
            />
            <Card className="p-5 space-y-5">
                <div className="flex gap-3">
                    <ButtonCMS
                        title="Tambah Kategori"
                        onClick={() => onShow("tambah_form")}
                    />
                    <ButtonCMS
                        title="Urutan Kategori"
                        onClick={() => onShow("show_urutan")}
                    />
                </div>
                <TableCMS>
                    <TheadTrCMS>
                        <TheadThCMS title="Urutan" width="w-30" />
                        <TheadThCMS title="Kategori" />
                        <TheadThCMS title="Total Layanan" />
                        <TheadThCMS title="Aksi" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={4} data={dataKategori}>
                        {dataKategori.map((dt, i) => (
                            <tr key={i} className="text-sm">
                                <th className="p-4 text-left">{dt.urutan}</th>
                                <td className="p-4">{dt.nama}</td>
                                <td className="p-4">
                                    {dt.totalLayanan} Layanan
                                </td>
                                <td className="p-4 space-y-1 space-x-1">
                                    <ButtonIconCMS
                                        icon="fa-solid fa-pen-to-square"
                                        id="btn-edit"
                                        onClick={() => onShow("edit_form", dt)}
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
