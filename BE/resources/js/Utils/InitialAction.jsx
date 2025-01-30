import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { CustomToast } from "../Components";

export default function useInitialAction() {
    const { flash } = usePage().props;

    useEffect(() => {
        flash.success && CustomToast("success", flash.success);
        flash.danger && CustomToast("danger", flash.danger);
    }, [flash]);
}
