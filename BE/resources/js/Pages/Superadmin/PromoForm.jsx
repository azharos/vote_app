import React, { useEffect, useRef, useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CalendarRange,
    FormGroupHorizontalCMS,
    FormHorizontalCMS,
    FormInputCMS,
    FormSelectCMS,
    FormSwitchCMS,
    InputGroupCMS,
    LayoutCMS,
} from "../../Components";
import { router, useForm } from "@inertiajs/react";
import { Rupiah, useValidationErrors } from "../../Utils";

export default function PromoForm({
    Konfigurasi,
    title,
    dataPilihanPromo,
    dataLayanan,
    routeForm,
    errors,
    promoEndDate,
    dataPromo,
}) {
    useValidationErrors(errors);

    const selectRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);

    const { data, setData, post } = useForm({
        kodePromo: dataPromo.kode_promo || "",
        hargaPromo: Rupiah(`${dataPromo.harga_promo}`) || 0,
        limitUser: Rupiah(`${dataPromo.batas_penggunaan_user}`) || 1,
        status: dataPromo.status && true,
        minBeli: Rupiah(`${dataPromo.min_beli}`) || 0,
        tanggalPromo: {
            startDate: dataPromo.tanggal_awal_promo || new Date(),
            endDate: dataPromo.tanggal_akhir_promo || new Date(),
            key: "selection",
        },
        pilihanPromo: dataPromo.pilihan_promo || "",
        limitHarian: dataPromo.limit_harian || 0,
        layanan: "",
        promoEndDate: promoEndDate,
    });

    useEffect(() => {
        if (dataPromo?.pilihan_promo) {
            selectRef.current.selectOption({
                value: dataPromo.pilihan_promo,
                label: dataPromo.pilihan_promo,
            });
        }
    }, []);

    const onChangeInt = (form, value) => {
        return setData(form, Rupiah(`${value}`));
    };

    const onChangeTime = (item) => {
        const date = new Date(item.endDate);
        const tgl = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        const bln =
            date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
        const thn = date.getFullYear();

        setData("promoEndDate", tgl + "/" + bln + "/" + thn);
        setData("tanggalPromo", item);
    };

    const onChange = (item) => {
        const new_item = item.map((e) => e.label).join(", ");
        setData("layanan", new_item);
    };

    const onSubmit = () => {
        post(routeForm, {
            onBefore: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo} title={title}>
            <div className="grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 space-y-5">
                    <CardTitle title="Informasi Utama">
                        <FormHorizontalCMS
                            title="Kode Promo"
                            value={data.kodePromo}
                            onChange={(e) =>
                                setData(
                                    "kodePromo",
                                    e.target.value.toUpperCase()
                                )
                            }
                        />
                        <div className="">
                            <FormGroupHorizontalCMS
                                title="Diskon"
                                label="Rp"
                                value={data.hargaPromo}
                                onChange={(e) =>
                                    onChangeInt("hargaPromo", e.target.value)
                                }
                            />
                            <div className="grid grid-cols-2 mt-1">
                                <div className=""></div>
                                <div className="text-sm">
                                    <p>Diskon Sebesar Rp {data.hargaPromo}</p>
                                </div>
                            </div>
                        </div>
                        <FormHorizontalCMS
                            title="Limit Per User"
                            value={data.limitUser}
                            onChange={(e) =>
                                onChangeInt("limitUser", e.target.value)
                            }
                        />
                    </CardTitle>
                    <CardTitle title="Tanggal Promo">
                        <CalendarRange
                            onChange={onChangeTime}
                            value={data.tanggalPromo}
                        />
                    </CardTitle>
                </div>
                <div className="md:col-span-2 space-y-5">
                    <CardTitle title="Status">
                        <FormSwitchCMS
                            title="Status Promo"
                            value={data.status}
                            onChange={() => setData(!data.status)}
                        />
                    </CardTitle>
                    <CardTitle title="Minimum Pembelian">
                        <InputGroupCMS
                            label="Rp"
                            value={data.minBeli}
                            onChange={(e) =>
                                onChangeInt("minBeli", e.target.value)
                            }
                        />
                    </CardTitle>
                    <CardTitle title="Pilihan Lainnya">
                        <FormSelectCMS
                            selectRef={selectRef}
                            title="Pilihan Promo"
                            data={dataPilihanPromo}
                            onChange={(e) => setData("pilihanPromo", e.value)}
                        />
                        {data.pilihanPromo == "Limit Harian" ? (
                            <FormInputCMS
                                title="Limit Harian"
                                value={data.limitHarian}
                                onChange={(e) =>
                                    onChangeInt("limitHarian", e.target.value)
                                }
                            />
                        ) : (
                            data.pilihanPromo == "Layanan" && (
                                <FormSelectCMS
                                    type="multi"
                                    title="Pilih Layanan"
                                    data={dataLayanan}
                                    onChange={onChange}
                                />
                            )
                        )}
                    </CardTitle>
                    <CardTitle title="Tampilan Promo">
                        <div className="rounded-lg space-y-3">
                            <h3 className="font-medium text-primary text-lg">
                                Diskon sebesar Rp.{" "}
                                {Rupiah(`${data.hargaPromo}`)}
                            </h3>
                            <div className="flex flex-col gap-1 text-white text-sm">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-caret-right"></i>{" "}
                                    <span>
                                        Promo berlaku hingga {data.promoEndDate}
                                    </span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-caret-right"></i>{" "}
                                    Minimum Pembelian Rp.{" "}
                                    {Rupiah(`${data.minBeli}`)}
                                </div>
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-caret-right"></i>{" "}
                                    Batas penggunaan {data.limitUser} kali untuk
                                    setiap akun
                                </div>

                                {data.pilihanPromo == "Layanan" && (
                                    <div className="flex gap-3 items-start">
                                        <i className="fa-solid fa-caret-right mt-1"></i>{" "}
                                        Promo ini hanya berlaku layanan{" "}
                                        {data.layanan}
                                    </div>
                                )}

                                {data.pilihanPromo == "Limit Harian" && (
                                    <div className="flex gap-3 items-start">
                                        <i className="fa-solid fa-caret-right mt-1"></i>{" "}
                                        Promo ini sudah mencapai limit
                                        penggunaan untuk hari ini, digunakan 0/
                                        {data.limitHarian}
                                    </div>
                                )}
                            </div>
                            <h3 className="font-medium text-primary text-sm">
                                Kode Promo: {data.kodePromo}
                            </h3>
                        </div>
                    </CardTitle>
                </div>
            </div>
            <Card className="p-5 space-y-5">
                <div className="flex justify-between items-center">
                    <h3
                        className="cursor-pointer font-medium"
                        onClick={() => router.get("/superadmin/promo")}
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
