import React, { useState } from "react";
import {
    ButtonCMS,
    Card,
    CardFormFilterCMS,
    InputSearchCMS,
    LayoutCMS,
    PaginationCMS,
    TableCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { Rupiah } from "../../Utils";

export default function Member({ dataMember, Konfigurasi }) {
    const [formSearch, setFormSearch] = useState({
        search: "",
    });

    const onChange = (form, val) => {
        setFormSearch((prevState) => ({ ...prevState, [form]: val }));
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5">
                <CardFormFilterCMS
                    url="/superadmin/member"
                    colGrid="grid-cols-3"
                    formSearch={formSearch}
                >
                    <InputSearchCMS
                        colSpan="col-span-2"
                        title="Search"
                        value={formSearch.search}
                        onChange={(e) => onChange("search", e.target.value)}
                    />
                </CardFormFilterCMS>
                <PaginationCMS
                    pagination={dataMember}
                    formSearch={formSearch}
                />
                <TableCMS>
                    <TheadTrCMS>
                        <th className="p-4 whitespace-nowrap text-left w-[50px]">
                            No
                        </th>
                        <TheadThCMS title="Nama Lengkap" />
                        <TheadThCMS title="Username" />
                        <TheadThCMS title="Email" />
                        <TheadThCMS title="Saldo" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={5} data={dataMember.data}>
                        {dataMember.data.map((member, idx) => (
                            <tr key={idx} className="text-sm">
                                <th className="p-4">
                                    {dataMember.from + (idx == 0 ? 0 : idx)}
                                </th>
                                <td className="p-4">{member.namaLengkap}</td>
                                <td className="p-4">{member.username}</td>
                                <td className="p-4">{member.email}</td>
                                <td className="p-4">
                                    Rp {Rupiah(member.saldo)}
                                </td>
                            </tr>
                        ))}
                    </TbodyCMS>
                </TableCMS>
            </Card>
        </LayoutCMS>
    );
}
