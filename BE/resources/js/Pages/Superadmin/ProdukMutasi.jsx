import React, { useRef, useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CustomToast,
    FormInputGroupCMS,
    FormSelectCMS,
    InputCMS,
    InputGroupCMS,
    LayoutCMS,
    TablePaginationAjaxCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { isEmpty, Rupiah, ServiceGet, ServicePost } from "../../Utils";
import { router } from "@inertiajs/react";

export default function ProdukMutasi({
    Konfigurasi,
    dataKategoriOwner,
    dataKategoriInternal,
    dataProdukGroup,
}) {
    const selectBrandRef = useRef(null);
    const selectTipeRef = useRef(null);
    const selectLayananRef = useRef(null);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [marginHarga, setMarginHarga] = useState({
        marginHargaTamu: 0,
        marginHargaMember: 0,
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

    const [provider, setProvider] = useState({
        kategori: "",
        brand: "",
        tipe: "",
        dataBrand: [],
        dataTipe: [],
    });

    const [internal, setInternal] = useState({
        kategori: "",
        layanan: "",
        produk_group: "",
        dataLayanan: [],
    });

    const onChangeProvider = async (dt, select) => {
        if (isEmpty(dt.value)) {
            if (select == "kategori") {
                selectBrandRef.current.selectOption({
                    value: "",
                    label: "Pilih Brand",
                });

                selectTipeRef.current.selectOption({
                    value: "",
                    label: "Pilih Tipe",
                });

                setProvider((prevState) => ({
                    ...prevState,
                    ["kategori"]: "",
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["brand"]: "",
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["tipe"]: "",
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["dataBrand"]: [],
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["dataTipe"]: [],
                }));
            } else if (select == "brand") {
                selectTipeRef.current.selectOption({
                    value: "",
                    label: "Pilih Tipe",
                });

                setProvider((prevState) => ({
                    ...prevState,
                    ["dataTipe"]: [],
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["brand"]: "",
                }));

                setProvider((prevState) => ({
                    ...prevState,
                    ["tipe"]: "",
                }));
            } else if (select == "tipe") {
                setProvider((prevState) => ({
                    ...prevState,
                    ["tipe"]: "",
                }));
            }

            return;
        }

        if (select == "kategori") {
            selectBrandRef.current.selectOption({
                value: "",
                label: "Pilih Brand",
            });

            selectTipeRef.current.selectOption({
                value: "",
                label: "Pilih Tipe",
            });

            const result = await ServicePost("/superadmin/produk/ajax", {
                kategori: dt.value,
                tipe: "kategori_import",
            });

            setProvider((prevState) => ({
                ...prevState,
                ["kategori"]: dt.value,
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["brand"]: "",
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["tipe"]: "",
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["dataBrand"]: result.data,
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["dataTipe"]: [],
            }));
        } else if (select == "brand") {
            selectTipeRef.current.selectOption({
                value: "",
                label: "Pilih Tipe",
            });

            const result = await ServicePost("/superadmin/produk/ajax", {
                brand: dt.value,
                tipe: "brand_import",
            });

            setProvider((prevState) => ({
                ...prevState,
                ["brand"]: dt.value,
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["tipe"]: "",
            }));

            setProvider((prevState) => ({
                ...prevState,
                ["dataTipe"]: result.data,
            }));

            if (result.data.length == 1) {
                selectTipeRef.current.selectOption({
                    value: result.data[0].value,
                    label: result.data[0].label,
                });
            }
        } else if (select == "tipe") {
            setProvider((prevState) => ({
                ...prevState,
                ["tipe"]: dt.value,
            }));
        }
    };

    const onChangeInternal = async (dt, select) => {
        if (isEmpty(dt.value)) {
            if (select == "kategori") {
                selectLayananRef.current.selectOption({
                    value: "",
                    label: "Pilih Layanan",
                });

                setInternal((prevState) => ({
                    ...prevState,
                    ["kategori"]: "",
                }));

                setInternal((prevState) => ({
                    ...prevState,
                    ["layanan"]: "",
                }));

                setInternal((prevState) => ({
                    ...prevState,
                    ["dataLayanan"]: [],
                }));
            } else if (select == "layanan") {
                setInternal((prevState) => ({
                    ...prevState,
                    ["layanan"]: "",
                }));
            } else if (select == "produk_group") {
                setInternal((prevState) => ({
                    ...prevState,
                    ["produk_group"]: "",
                }));
            }

            return;
        }

        if (select == "kategori") {
            const result = await ServicePost("/superadmin/produk/ajax", {
                kategori: dt.value,
                tipe: "kategori_internal",
            });

            setInternal((prevState) => ({
                ...prevState,
                ["dataLayanan"]: result.data,
            }));

            setInternal((prevState) => ({
                ...prevState,
                ["kategori"]: dt.value,
            }));
        } else if (select == "layanan") {
            setInternal((prevState) => ({
                ...prevState,
                ["layanan"]: dt.value,
            }));
        } else if (select == "produk_group") {
            setInternal((prevState) => ({
                ...prevState,
                ["produk_group"]: dt.value,
            }));
        }
    };

    const onCariData = async () => {
        if (
            isEmpty(provider.kategori) ||
            isEmpty(provider.brand) ||
            isEmpty(internal.kategori) ||
            isEmpty(internal.layanan) ||
            isEmpty(internal.produk_group)
        ) {
            CustomToast("danger", "Silahkan Lengkapi Form Mutasi !!!");
            return;
        }

        await onFetchPagination(1);
    };

    const onChangePagination = (form, value) => {
        setFetchPagination((prevState) => ({ ...prevState, [form]: value }));
    };

    const onFetchPagination = async (page = 1) => {
        onChangePagination("page", page);
        onChangePagination("loading", true);

        const payload = {
            kategori: provider.kategori,
            brand: provider.brand,
            tipeProvider: provider.tipe,
            page,
            countPage: fetchPagination.countPage,
            tipe: "pagination_mutasi",
        };

        const result = await ServicePost("/superadmin/produk/ajax", payload);

        setFetchPagination({
            page: result.data.page,
            countPage: fetchPagination.countPage,
            listPage: result.data.listPage,
            data: result.data.data,
            noAwal: result.data.noAwal,
            total_pages: result.data.total_pages,
            loading: false,
        });

        const new_data = result.data.data.map((dt) => {
            return {
                skuCode: dt.skuCode,
                namaProduk: dt.nama,
                hargaProduk: dt.hargaProduk,
                marginHargaTamu: marginHarga.marginHargaTamu,
                marginHargaMember: marginHarga.marginHargaMember,
            };
        });

        setData(new_data);
    };

    const onChangeData = (key, form, val) => {
        const dataUpdate = data[key];
        const new_data = [...data];
        let value;

        if (form == "marginHargaTamu" || form == "marginHargaMember") {
            value = Rupiah(`${val}`);
        } else {
            value = val;
        }

        new_data[key] = { ...dataUpdate, [form]: value };
        setData(new_data);
    };

    const onSubmit = () => {
        router.post(
            "/superadmin/produk/mutasi",
            {
                data,
                kategori: internal.kategori,
                layanan: internal.layanan,
                produk_group: internal.produk_group,
            },
            {
                preserveState: true,
                onBefore: () => {
                    setLoading(true);
                },
                onSuccess: async () => {
                    setLoading(false);
                    await onFetchPagination(1);
                },
            }
        );
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo} title="Mutasi Produk">
            <CardTitle title="Set Margin Harga">
                <div className="grid sm:grid-cols-2 gap-5">
                    <FormInputGroupCMS
                        title="Margin Harga Tamu"
                        label="Rp"
                        value={marginHarga.marginHargaTamu}
                        onChange={(e) =>
                            setMarginHarga((prevState) => ({
                                ...prevState,
                                ["marginHargaTamu"]: Rupiah(
                                    `${e.target.value}`
                                ),
                            }))
                        }
                    />
                    <FormInputGroupCMS
                        title="Margin Harga Member"
                        label="Rp"
                        value={marginHarga.marginHargaMember}
                        onChange={(e) =>
                            setMarginHarga((prevState) => ({
                                ...prevState,
                                ["marginHargaMember"]: Rupiah(
                                    `${e.target.value}`
                                ),
                            }))
                        }
                    />
                </div>
            </CardTitle>

            <Card className="p-5 space-y-5">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <h3 className="font-medium text-white">
                            Produk Provider
                        </h3>
                        <FormSelectCMS
                            title="Kategori"
                            data={dataKategoriOwner}
                            onChange={(val) =>
                                onChangeProvider(val, "kategori")
                            }
                        />
                        <FormSelectCMS
                            title="Brand"
                            data={provider.dataBrand}
                            onChange={(val) => onChangeProvider(val, "brand")}
                            disabled={isEmpty(provider.dataBrand)}
                            selectRef={selectBrandRef}
                        />
                        <div>
                            <FormSelectCMS
                                title="Tipe"
                                data={provider.dataTipe}
                                onChange={(val) =>
                                    onChangeProvider(val, "tipe")
                                }
                                disabled={isEmpty(provider.dataTipe)}
                                selectRef={selectTipeRef}
                            />
                            <div className="text-sm mt-1">* Opsional</div>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h3 className="font-medium text-white">
                            Produk Internal
                        </h3>
                        <FormSelectCMS
                            title="Kategori"
                            data={dataKategoriInternal}
                            onChange={(val) =>
                                onChangeInternal(val, "kategori")
                            }
                        />
                        <FormSelectCMS
                            title="Layanan"
                            data={internal.dataLayanan}
                            onChange={(val) => onChangeInternal(val, "layanan")}
                            disabled={isEmpty(internal.dataLayanan)}
                            selectRef={selectLayananRef}
                        />
                        <div className="">
                            <FormSelectCMS
                                title="Kelompok Produk"
                                data={dataProdukGroup}
                                onChange={(val) =>
                                    onChangeInternal(val, "produk_group")
                                }
                                type="auto_create"
                            />
                            <div className="text-sm mt-1">
                                * Bisa ditambahkan langsung dalam input select
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex sm:justify-between items-center">
                    <h3
                        className="cursor-pointer font-medium"
                        onClick={() => router.get("/superadmin/produk/mutasi")}
                    >
                        Reset
                    </h3>
                    <ButtonCMS title="Cari Data" onClick={onCariData} />
                </div>
            </Card>

            <Card className="p-5 space-y-5">
                <TablePaginationAjaxCMS
                    data={fetchPagination}
                    onFetchPagination={onFetchPagination}
                >
                    <TheadTrCMS>
                        <TheadThCMS title="No" width="w-[50px]" />
                        <TheadThCMS title="SKU Code" />
                        <TheadThCMS title="Nama Produk" width="min-w-60" />
                        <TheadThCMS title="Harga Produk" width="min-w-40" />
                        <TheadThCMS
                            title="Margin Harga Tamu"
                            width="min-w-40"
                        />
                        <TheadThCMS
                            title="Margin Harga Member"
                            width="min-w-40"
                        />
                    </TheadTrCMS>
                    <TbodyCMS
                        colSpan={6}
                        isLoading={fetchPagination.loading}
                        data={fetchPagination.data}
                    >
                        {fetchPagination.data.map((dt, i) => (
                            <tr key={i} className="text-sm">
                                <th className="p-4 text-left">
                                    {fetchPagination.noAwal + i}
                                </th>
                                <th className="p-4 text-left">{dt.skuCode}</th>
                                <td className="p-4">
                                    <InputCMS
                                        value={data[i].namaProduk}
                                        onChange={(e) =>
                                            onChangeData(
                                                i,
                                                "namaProduk",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-4">
                                    <InputGroupCMS
                                        label="Rp"
                                        value={Rupiah(`${dt.hargaProduk}`)}
                                        disabled
                                    />
                                </td>
                                <td className="p-4">
                                    <InputGroupCMS
                                        label="Rp"
                                        value={data[i].marginHargaTamu}
                                        onChange={(e) =>
                                            onChangeData(
                                                i,
                                                "marginHargaTamu",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-4">
                                    <InputGroupCMS
                                        label="Rp"
                                        value={data[i].marginHargaMember}
                                        onChange={(e) =>
                                            onChangeData(
                                                i,
                                                "marginHargaMember",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </TbodyCMS>
                </TablePaginationAjaxCMS>

                {!isEmpty(fetchPagination.data) && (
                    <>
                        {loading ? (
                            <ButtonLoadingCMS
                                title="Submit"
                                className="w-full"
                            />
                        ) : (
                            <ButtonCMS
                                title="Submit"
                                className="w-full"
                                onClick={onSubmit}
                            />
                        )}
                    </>
                )}
            </Card>
        </LayoutCMS>
    );
}
