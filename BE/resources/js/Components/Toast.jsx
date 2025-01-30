import { toast } from "react-toastify";

function ConfirmDelete({ closeToast }) {
    return (
        <div className="grid grid-cols-[1fr_1px_80px] w-full">
            <div className="flex flex-col p-4">
                <h3 className="text-zinc-800 text-sm font-semibold">
                    Anda yakin ingin hapus data ini?
                </h3>
                <p className="text-sm">
                    Data ini akan terhapus selamanya dari sistem!
                </p>
            </div>
            <div className="bg-zinc-900/20 h-full" />
            <div className="grid grid-rows-[1fr_1px_1fr] h-full">
                <button
                    onClick={() => closeToast("hapus")}
                    className="text-danger text-sm"
                >
                    Hapus!
                </button>
                <div className="bg-zinc-900/20 w-full" />
                <button onClick={() => closeToast()} className="text-sm">
                    Batal
                </button>
            </div>
        </div>
    );
}

export const CustomToast = (type = "", title = "", onClick) => {
    if (type == "danger") {
        toast.error(title, {
            className: "text-secondary font-secondary text-sm",
        });
    } else if (type == "warning") {
        toast.warn(title, {
            className: "text-secondary font-secondary text-sm",
        });
    } else if (type == "success") {
        toast.success(title, {
            className: "text-secondary font-secondary text-sm",
        });
    } else if (type == "info") {
        toast.info(title, {
            className: "text-secondary font-secondary text-sm",
        });
    } else if (type == "delete") {
        toast(ConfirmDelete, {
            closeButton: false,
            className: "p-0 w-[450px]",
            onClose: (reason) => {
                if (reason == "hapus") {
                    onClick();
                }
            },
        });
    }
};
