import React, { useEffect, useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    Card,
    CardFormFilterAjaxCMS,
    CustomToast,
    LayoutCMS,
    SelectSearchCMS,
    TablePaginationAjaxCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router } from "@inertiajs/react";
import { isEmpty, Rupiah, ServicePost } from "../../Utils";

const TablePreview = ({ url, dataLayanan, dataStatus }) => {
    useEffect(() => {
        onFetchPagination();
    }, []);

    const [formSearch, setFormSearch] = useState({
        layanan: "",
        status: "",
    });

    const [fetchPagination, setFetchPagination] = useState({
        page: 1,
        countPage: 10,
        listPage: "0-0 dari 0",
        data: [],
        noAwal: "",
        total_pages: 0,
        loading: false,
        search: "",
    });

    const onChangeFormSearch = (form, val) => {
        setFormSearch((prevState) => ({ ...prevState, [form]: val }));
    };

    const onChangePagination = (form, value) => {
        setFetchPagination((prevState) => ({ ...prevState, [form]: value }));
    };

    const onSearch = () => {
        onChangePagination("search", formSearch);
        onFetchPagination(1, true);
    };

    const onFetchPagination = async (page = 1, search = false) => {
        onChangePagination("loading", true);

        const data = {
            page,
            countPage: fetchPagination.countPage,
            tipe: "pagination_produk",
            ...(search ? formSearch : fetchPagination.searchformSearch),
        };

        const result = await ServicePost(`${url}/ajax`, data);

        setFetchPagination((prevState) => ({
            ...prevState,
            page: result.data.page,
            listPage: result.data.listPage,
            data: result.data.data,
            noAwal: result.data.noAwal,
            total_pages: result.data.total_pages,
            loading: false,
        }));
    };

    const onDelete = (dt) => {
        CustomToast("delete", "", () => {
            router.delete(`${url}/${dt.id}`);
        });
    };

    return (
        <Card className="p-5 space-y-5">
            <CardFormFilterAjaxCMS
                url={`${url}`}
                colGrid="grid-cols-3"
                onSearch={onSearch}
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
            </CardFormFilterAjaxCMS>
            <TablePaginationAjaxCMS
                data={fetchPagination}
                onFetchPagination={onFetchPagination}
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
                <TbodyCMS
                    colSpan={8}
                    isLoading={fetchPagination.loading}
                    data={fetchPagination.data}
                >
                    {fetchPagination.data.map((dt, i) => (
                        <tr key={i} className="text-sm">
                            <th className="p-4 text-left">
                                {i + fetchPagination.noAwal}
                            </th>
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
                                        parseInt(dt.produk_owner.hargaProduk) +
                                        parseInt(dt.margin_harga_tamu)
                                    }`
                                )}
                            </td>
                            <td className="p-4">
                                {Rupiah(
                                    `${
                                        parseInt(dt.produk_owner.hargaProduk) +
                                        parseInt(dt.margin_harga_member)
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
                                                `${url}/edit/` + dt.skuCode
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
            </TablePaginationAjaxCMS>
        </Card>
    );
};

export default function Produk({ Konfigurasi, dataLayanan, dataStatus }) {
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

            <TablePreview
                url="/superadmin/produk"
                dataLayanan={dataLayanan}
                dataStatus={dataStatus}
            />
        </LayoutCMS>
    );
}
