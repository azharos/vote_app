import React, { useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    Card,
    CardFormFilterCMS,
    CustomToast,
    LayoutCMS,
    SelectSearchCMS,
    TablePaginationCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router } from "@inertiajs/react";
import { isEmpty, Rupiah } from "../../Utils";

export default function Produk({
    Konfigurasi,
    dataProduk,
    dataLayanan,
    dataStatus,
}) {
    const [formSearch, setFormSearch] = useState({
        layanan: "",
        status: "",
    });

    const onDelete = (dt) => {
        CustomToast("delete", "", () => {
            router.delete(`/superadmin/produk/${dt.id}`);
        });
    };

    const onChangeFormSearch = (form, val) => {
        setFormSearch((prevState) => ({ ...prevState, [form]: val }));
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5 space-x-3">
                <ButtonCMS
                    title="Tambah Produk"
                    onClick={() => router.get("/superadmin/produk/tambah")}
                />
                <ButtonCMS
                    title="Mutasi Produk"
                    onClick={() => router.get("/superadmin/produk/mutasi")}
                />
                <ButtonCMS
                    title="Kelompok Produk"
                    onClick={() => router.get("/superadmin/produk/kelompok")}
                />
                <ButtonCMS
                    title="Icon"
                    onClick={() => router.get("/superadmin/produk/icon")}
                />
            </Card>

            <Card className="p-5 space-y-5">
                <CardFormFilterCMS
                    url="/superadmin/produk"
                    colGrid="md:grid-cols-3"
                    formSearch={formSearch}
                >
                    <SelectSearchCMS
                        title="Layanan"
                        onChange={(e) =>
                            onChangeFormSearch("layanan", e.target.value)
                        }
                    >
                        {dataLayanan.map((dt, i) => (
                            <option
                                value={dt.id}
                                className="text-bodydark bg-meta-4"
                                key={i}
                            >
                                {dt.nama}
                            </option>
                        ))}
                    </SelectSearchCMS>
                    <SelectSearchCMS
                        title="Status"
                        onChange={(e) =>
                            onChangeFormSearch("status", e.target.value)
                        }
                    >
                        {dataStatus.map((dt, i) => (
                            <option
                                value={dt}
                                className="text-bodydark bg-meta-4"
                                key={i}
                            >
                                {dt}
                            </option>
                        ))}
                    </SelectSearchCMS>
                </CardFormFilterCMS>
                <TablePaginationCMS
                    pagination={dataProduk}
                    formSearch={formSearch}
                >
                    <TheadTrCMS>
                        <TheadThCMS title="No" width="w-[50px]" />
                        <TheadThCMS title="SKU Code" />
                        <TheadThCMS title="Nama Produk" />
                        <TheadThCMS title="Layanan" />
                        <TheadThCMS title="Harga Tamu" />
                        <TheadThCMS title="Harga Member" />
                        <TheadThCMS title="Status" />
                        <TheadThCMS title="Aksi" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={8} data={dataProduk.data}>
                        {dataProduk.data.map((dt, i) => (
                            <tr key={i} className="text-sm">
                                <th className="p-4 text-left">{i + 1}</th>
                                <th className="p-4 text-left">{dt.skuCode}</th>
                                <td className="p-4 align-middle">
                                    <div className="">
                                        {dt.nama_produk}
                                        {!isEmpty(dt.icon) && (
                                            <>
                                                &nbsp;
                                                <img
                                                    src={dt.icon.gambar}
                                                    alt={dt.nama_produk}
                                                    className="size-5 object-contain object-center inline-block"
                                                />
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className="p-4">{dt.layanan.nama}</td>
                                <td className="p-4">
                                    Rp{" "}
                                    {Rupiah(
                                        `${
                                            parseInt(
                                                dt.produk_owner.hargaProduk
                                            ) + parseInt(dt.margin_harga_tamu)
                                        }`
                                    )}
                                </td>
                                <td className="p-4">
                                    {Rupiah(
                                        `${
                                            parseInt(
                                                dt.produk_owner.hargaProduk
                                            ) + parseInt(dt.margin_harga_member)
                                        }`
                                    )}
                                </td>
                                <td className="p-4">
                                    {dt.status == 1 ? (
                                        <ButtonCMS size="sm" title="On" />
                                    ) : (
                                        <ButtonCMS
                                            size="sm"
                                            title="Off"
                                            bgColor="bg-danger hover:opacity-90"
                                        />
                                    )}
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-1">
                                        <ButtonIconCMS
                                            icon="fa-solid fa-pen-to-square"
                                            id="btn-edit"
                                            onClick={() =>
                                                router.get(
                                                    "/superadmin/produk/edit/" +
                                                        dt.skuCode
                                                )
                                            }
                                        />
                                        <ButtonIconCMS
                                            icon="fa-regular fa-trash-can"
                                            bgColor="bg-danger"
                                            id="btn-delete"
                                            onClick={() => onDelete(dt)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </TbodyCMS>
                </TablePaginationCMS>
            </Card>
        </LayoutCMS>
    );
}
