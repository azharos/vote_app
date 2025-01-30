import React, { useState } from "react";
import {
    Card,
    CardFormFilterCMS,
    InputSearchCMS,
    LayoutCMS,
    TablePaginationCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";

export default function Topup({ dataTopup, Konfigurasi }) {
    const [formSearch, setFormSearch] = useState({
        search: "",
    });

    const onChange = (form, val) => {
        setFormSearch((prevState) => ({ ...prevState, [form]: val }));
    };

    const onSearch = () => {
        router.get(
            "/superadmin/topup",
            { ...formSearch },
            { preserveState: true }
        );
    };

    const onReset = () => {
        router.get("/superadmin/topup");
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5">
                <CardFormFilterCMS
                    colGrid="grid-cols-3"
                    onSearch={onSearch}
                    onReset={onReset}
                    data={dataTopup.data}
                >
                    <InputSearchCMS
                        colSpan="col-span-2"
                        title="Search"
                        value={formSearch.search}
                        onChange={(e) => onChange("search", e.target.value)}
                    />
                </CardFormFilterCMS>
                <TablePaginationCMS
                    pagination={dataTopup}
                    formSearch={formSearch}
                >
                    <TheadTrCMS>
                        <th className="p-4 whitespace-nowrap text-left w-[50px]">
                            No
                        </th>
                        <TheadThCMS title="Nama Lengkap" />
                        <TheadThCMS title="Username" />
                        <TheadThCMS title="Email" />
                        <TheadThCMS title="Saldo" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={5}></TbodyCMS>
                </TablePaginationCMS>
            </Card>
        </LayoutCMS>
    );
}
