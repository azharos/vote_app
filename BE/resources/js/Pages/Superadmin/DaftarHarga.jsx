import React, { useEffect, useState } from "react";
import {
    ButtonIconCMS,
    Card,
    CardFormFilterAjaxCMS,
    LayoutCMS,
    SelectSearchCMS,
    TablePaginationAjaxCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { Rupiah, ServicePost } from "../../Utils";
import { router } from "@inertiajs/react";

const TablePreview = ({ url, dataKategori, dataBrand, dataHarga }) => {
    useEffect(() => {
        onFetchPagination();
    }, []);

    const [formSearch, setFormSearch] = useState({
        kategori: "",
        brand: "",
        urutanHarga: "",
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
            tipe: "pagination_daftar_harga",
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
                            value={dt}
                            key={i}
                            className="text-bodydark bg-meta-4"
                        >
                            {dt}
                        </option>
                    ))}
                </SelectSearchCMS>
                <SelectSearchCMS
                    title="Brand"
                    onChange={(e) =>
                        onChangeFormSearch("brand", e.target.value)
                    }
                >
                    {dataBrand.map((dt, i) => (
                        <option
                            value={dt}
                            key={i}
                            className="text-bodydark bg-meta-4"
                        >
                            {dt}
                        </option>
                    ))}
                </SelectSearchCMS>
                <SelectSearchCMS
                    title="Urutan Harga"
                    onChange={(e) =>
                        onChangeFormSearch("urutanHarga", e.target.value)
                    }
                >
                    {dataHarga.map((dt, i) => (
                        <option
                            value={dt}
                            key={i}
                            className="text-bodydark bg-meta-4"
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
                    <TheadThCMS title="Nama" />
                    <TheadThCMS title="Kategori" />
                    <TheadThCMS title="Brand" />
                    <TheadThCMS title="Tipe" />
                    <TheadThCMS title="Harga Produk" />
                    <TheadThCMS title="Aksi" />
                </TheadTrCMS>
                <TbodyCMS
                    colSpan={8}
                    isLoading={fetchPagination.loading}
                    data={fetchPagination.data}
                >
                    {fetchPagination.data.map((dt, i) => (
                        <tr key={i} className="text-sm">
                            <th className="p-4">{i + 1}</th>
                            <th className="p-4 text-left">{dt.skuCode}</th>
                            <td className="p-4">{dt.nama}</td>
                            <td className="p-4">{dt.kategori}</td>
                            <td className="p-4">{dt.brand}</td>
                            <td className="p-4">{dt.type}</td>
                            <td className="p-4">
                                Rp {Rupiah(`${dt.hargaProduk}`)}
                            </td>
                            <td className="p-4">
                                <ButtonIconCMS
                                    icon="fa-solid fa-plus"
                                    id="btn-tambah-produk"
                                    onClick={() =>
                                        router.get(
                                            "/superadmin/produk/tambah/" +
                                                dt.skuCode
                                        )
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </TbodyCMS>
            </TablePaginationAjaxCMS>
        </Card>
    );
};

export default function DaftarHarga({
    Konfigurasi,
    dataKategori,
    dataBrand,
    dataHarga,
}) {
    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <TablePreview
                url="/superadmin/daftar-harga"
                dataKategori={dataKategori}
                dataBrand={dataBrand}
                dataHarga={dataHarga}
            />
        </LayoutCMS>
    );
}
