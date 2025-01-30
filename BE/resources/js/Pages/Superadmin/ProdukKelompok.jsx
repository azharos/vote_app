import React, { useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    Card,
    CardTitle,
    CustomToast,
    FormInputCMS,
    LayoutCMS,
    TableCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router, useForm } from "@inertiajs/react";

export default function ProdukKelompok({ Konfigurasi, dataProdukGroup }) {
    const { data, setData, post, reset } = useForm({
        id: "",
        nama: "",
    });

    const onEdit = (dt) => {
        setData("id", dt.id);
        setData("nama", dt.nama);
    };

    const onDelete = (dt) => {
        CustomToast("delete", "", () => {
            router.delete(`/superadmin/produk/kelompok/${dt.id}`, {
                onFinish: () => {
                    reset();
                },
            });
        });
    };

    const onReset = () => {
        reset();
    };

    const onSubmit = () => {
        post("/superadmin/produk/kelompok", {
            onFinish: () => {
                reset();
            },
        });
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo} title="Kelompok Produk">
            <div className="grid md:grid-cols-3 gap-5">
                <div className="">
                    <CardTitle title="Form">
                        <FormInputCMS
                            title="Nama"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <ButtonCMS
                            title="Submit"
                            className="w-full"
                            onClick={onSubmit}
                        />
                        <ButtonCMS
                            title="Reset"
                            className="w-full"
                            bgColor="bg-secondary-cms hover:opacity-90"
                            onClick={onReset}
                        />
                    </CardTitle>
                </div>
                <div className="col-span-2">
                    <Card className="p-5 space-y-5">
                        <TableCMS>
                            <TheadTrCMS>
                                <TheadThCMS title="No" width="w-30" />
                                <TheadThCMS title="Nama" />
                                <TheadThCMS title="Jumlah Produk" />
                                <TheadThCMS title="Aksi" />
                            </TheadTrCMS>
                            <TbodyCMS colSpan={3} data={dataProdukGroup}>
                                {dataProdukGroup.map((dt, i) => (
                                    <tr key={i} className="text-sm">
                                        <th className="p-4 text-left">
                                            {i + 1}
                                        </th>
                                        <td className="p-4">{dt.nama}</td>
                                        <td className="p-4">
                                            {dt.jumlah_produk} Produk
                                        </td>
                                        <td className="p-4 space-y-1 space-x-1">
                                            <ButtonIconCMS
                                                icon="fa-solid fa-pen-to-square"
                                                id="btn-edit"
                                                onClick={() => onEdit(dt)}
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
                </div>
            </div>
        </LayoutCMS>
    );
}
