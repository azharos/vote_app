import React, { useEffect } from "react";
import isEmpty from "./isEmpty";
import { CustomToast } from "../Components";

export default function useValidationErrors(errors) {
    useEffect(() => {
        if (!isEmpty(errors)) {
            var result = Object.keys(errors).map((key) => [key, errors[key]]);
            CustomToast("danger", result[0][1]);
        }
    }, [errors]);
}
