import React, { useRef, useState } from "react";
import {
    ButtonCMS,
    ButtonLoadingCMS,
    Card,
    CardTitle,
    CustomToast,
    FormFileHorizontalCMS,
    LayoutCMS,
    TableCMS,
    TbodyCMS,
    TheadThCMS,
    TheadTrCMS,
} from "../../Components";
import { router } from "@inertiajs/react";
import { isEmpty, useValidationErrors } from "../../Utils";

export default function ProdukIcon({ Konfigurasi, errors, dataIcon }) {
    useValidationErrors(errors);

    const fileRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState([]);

    const onDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;

        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);

            fileRef.current.classList.add("border-dashed");
            fileRef.current.classList.remove("bg-form-strokedark");
        }
    };

    const onDrag = (e, active = true) => {
        e.preventDefault();

        if (active) {
            fileRef.current.classList.remove("border-dashed");
            fileRef.current.classList.add("bg-form-strokedark");
        } else {
            fileRef.current.classList.add("border-dashed");
            fileRef.current.classList.remove("bg-form-strokedark");
        }
    };

    const onDeleteFile = (idx) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== idx));
    };

    const onSubmit = () => {
        router.post(
            "/superadmin/produk/icon",
            { files },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onFinish: () => {
                    setIsLoading(false);
                },
                onSuccess: () => {
                    setFiles([]);
                },
            }
        );
    };

    const onDelete = (id) => {
        CustomToast("delete", "", () => {
            router.delete("/superadmin/produk/icon/" + id);
        });
    };

    return (
        <LayoutCMS logo={Konfigurasi.logo}>
            <Card className="p-5">
                <ButtonCMS
                    bgColor="bg-secondary-cms"
                    title="Kembali"
                    onClick={() => router.get("/superadmin/produk")}
                />
            </Card>
            <CardTitle title="Tambah Icon">
                {isLoading ? (
                    <ButtonLoadingCMS
                        className="w-full"
                        title="Proses Uploading..."
                    />
                ) : (
                    <>
                        <div
                            className="border border-dashed border-form-strokedark h-40 w-full rounded-lg flex justify-center items-center"
                            onDrop={onDrop}
                            onDragOver={(event) => onDrag(event)}
                            onDragLeave={(event) => onDrag(event, false)}
                            onDragEnter={(event) => onDrag(event)}
                            ref={fileRef}
                        >
                            <div className="text-center text-sm">
                                <p>Drag & Drop Icon Disini</p>
                            </div>
                        </div>
                        {!isEmpty(files) && (
                            <div className="grid grid-cols-12 gap-3">
                                {files.map((file, i) => (
                                    <div
                                        className="p-1 border border-form-strokedark rounded-lg relative"
                                        key={i}
                                    >
                                        <img
                                            src={URL.createObjectURL(file)}
                                            className="w-full h-15 object-cover object-center"
                                        />
                                        <div
                                            className="absolute -top-2 -right-2 size-5 rounded-full bg-danger flex justify-center items-center text-xs text-white cursor-pointer hover:opacity-90"
                                            onClick={() => onDeleteFile(i)}
                                        >
                                            <i className="fa-solid fa-close"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <ButtonCMS
                            className="w-full"
                            title="Submit"
                            onClick={onSubmit}
                            disabled={isEmpty(files)}
                        />
                    </>
                )}
            </CardTitle>
            <Card className="p-5 space-y-5">
                <TableCMS>
                    <TheadTrCMS>
                        <TheadThCMS width="w-20" title="No" />
                        <TheadThCMS title="Icon" />
                        <TheadThCMS title="Aksi" />
                    </TheadTrCMS>
                    <TbodyCMS colSpan={3} data={dataIcon}>
                        {dataIcon.map((dt, i) => (
                            <tr className="text-sm" key={i}>
                                <th className="p-4 text-left">{i + 1}</th>
                                <td className="p-4">
                                    <img
                                        src={dt.gambar}
                                        alt=""
                                        className="w-9 h-auto"
                                    />
                                </td>
                                <td className="p-4">
                                    <ButtonCMS
                                        bgColor="bg-danger hover:opacity-90"
                                        title="Hapus"
                                        onClick={() => onDelete(dt.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </TbodyCMS>
                </TableCMS>
            </Card>
        </LayoutCMS>
    );
}
