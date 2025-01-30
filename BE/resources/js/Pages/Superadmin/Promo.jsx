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

const TablePreview = ({ url }) => {
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
    });

    const onChangePagination = (form, value) => {
        setFetchPagination((prevState) => ({ ...prevState, [form]: value }));
    };

    const onFetchPagination = async (page = 1) => {
        onChangePagination("loading", true);

        const data = {
            page,
            countPage: fetchPagination.countPage,
            tipe: "pagination_promo",
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
            <TablePaginationAjaxCMS
                data={fetchPagination}
                onFetchPagination={onFetchPagination}
            >
                <TheadTrCMS>
                    <TheadThCMS title="No" width="w-[50px]" />
                    <TheadThCMS title="Kode Promo" />
                    <TheadThCMS title="Tanggal Mulai" />
                    <TheadThCMS title="Tanggal Berakhir" />
                    <TheadThCMS title="Min Beli" />
                    <TheadThCMS title="Limit User" />
                    <TheadThCMS title="Pilihan Promo" />
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
                            <th className="p-4 text-left">{dt.kode_promo}</th>
                            <td className="p-4">{dt.tanggal_awal_promo}</td>
                            <td className="p-4">{dt.tanggal_akhir_promo}</td>
                            <td className="p-4">
                                Rp {Rupiah(`${dt.min_beli}`)}
                            </td>
                            <td className="p-4">{dt.batas_penggunaan_user}</td>
                            <td className="p-4">
                                {isEmpty(dt.pilihan_promo)
                                    ? "-"
                                    : dt.pilihan_promo}
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
                                                `${url}/edit/` + dt.kode_promo
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

export default function Promo({ Konfigurasi }) {
    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5">
                <ButtonCMS
                    title="Tambah Promo"
                    onClick={() => router.get("/superadmin/promo/tambah")}
                />
            </Card>

            <TablePreview url="/superadmin/promo" />
        </LayoutCMS>
    );
}
