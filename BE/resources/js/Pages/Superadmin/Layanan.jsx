import React, { useEffect, useState } from "react";
import {
    ButtonCMS,
    ButtonIconCMS,
    Card,
    CardFormFilterAjaxCMS,
    CardFormFilterCMS,
    CustomToast,
    InputSearchCMS,
    LayoutCMS,
    SelectSearchCMS,
    TablePaginationAjaxCMS,
    TablePaginationCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router } from "@inertiajs/react";
import { ServicePost } from "../../Utils";

const TablePreview = ({ url, dataKategori, dataStatus }) => {
    useEffect(() => {
        onFetchPagination();
    }, []);

    const [formSearch, setFormSearch] = useState({
        kategori: "",
        status: "",
        search: "",
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
            tipe: "pagination_layanan",
            ...(search ? formSearch : fetchPagination.search),
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
                    title="Kategori"
                    onChange={(e) =>
                        onChangeFormSearch("kategori", e.target.value)
                    }
                >
                    {dataKategori.map((dt, i) => (
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
                <InputSearchCMS
                    title="Search"
                    value={formSearch.search}
                    onChange={(e) =>
                        onChangeFormSearch("search", e.target.value)
                    }
                />
            </CardFormFilterAjaxCMS>
            <TablePaginationAjaxCMS
                data={fetchPagination}
                onFetchPagination={onFetchPagination}
            >
                <TheadTrCMS>
                    <TheadThCMS title="Gambar" />
                    <TheadThCMS title="Banner" />
                    <TheadThCMS title="Nama" />
                    <TheadThCMS title="Sub Nama" />
                    <TheadThCMS title="Kategori" />
                    <TheadThCMS title="Status" />
                    <TheadThCMS title="Aksi" />
                </TheadTrCMS>
                <TbodyCMS
                    colSpan={7}
                    isLoading={fetchPagination.loading}
                    data={fetchPagination.data}
                >
                    {fetchPagination.data.map((dt, i) => (
                        <tr key={i} className="text-sm">
                            <td className="p-4">
                                <img
                                    src={dt.gambar}
                                    alt=""
                                    className="max-w-20"
                                />
                            </td>
                            <td className="p-4">
                                <img
                                    src={dt.banner}
                                    alt=""
                                    className="max-w-30"
                                />
                            </td>
                            <td className="p-4">{dt.nama}</td>
                            <td className="p-4">{dt.sub_nama}</td>
                            <td className="p-4">{dt.kategori.nama}</td>
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
                                        icon="fa-solid fa-eye"
                                        id="btn-show"
                                        bgColor="bg-secondary-cms"
                                    />
                                    <ButtonIconCMS
                                        icon="fa-solid fa-pen-to-square"
                                        id="btn-edit"
                                        onClick={() =>
                                            router.get(
                                                "/superadmin/layanan/" + dt.slug
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

export default function Layanan({ dataKategori, dataStatus, Konfigurasi }) {
    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5">
                <ButtonCMS
                    title="Tambah Layanan"
                    onClick={() => router.get("/superadmin/layanan/tambah")}
                />
            </Card>

            <TablePreview
                url="/superadmin/layanan"
                dataKategori={dataKategori}
                dataStatus={dataStatus}
            />
        </LayoutCMS>
    );
}
