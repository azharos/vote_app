import React, { useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { isEmpty } from "../Utils";
import Select from "react-select";

const colorStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "#1e1e2d",
        borderColor: "#3d4d60",
        boxShadow: "0 0 #0000",
        padding: "6px 10px",
        borderRadius: "8px",

        ":hover": {
            borderColor: "#10B981",
        },
        ":active": {
            borderColor: "#10B981",
        },
        ":focus": {
            borderColor: "#10B981",
        },
    }),
    option: (styles) => ({
        ...styles,
        backgroundColor: "#1e1e2d",
        ":hover": {
            backgroundColor: "#151521",
        },
    }),
    input: (styles) => ({
        ...styles,
        color: "white",
    }),
    placeholder: (styles) => ({ ...styles, color: "white" }),
    singleValue: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? "#3d4d60" : "white",
    }),
    noOptionsMessage: (styles) => ({ ...styles, backgroundColor: "#1e1e2d" }),
    menu: (styles) => ({
        ...styles,
        backgroundColor: "#1e1e2d",
        border: "1px solid #3d4d60",
        zIndex: "999",
    }),
};

export const ReactSelect = ({
    data = [],
    title = "",
    onChange,
    selected = "",
    disabled = false,
    selectRef,
}) => {
    const new_data = [{ value: "", label: "Pilih " + title }, ...data];

    let new_selected;

    if (isEmpty(selected)) {
        new_selected = new_data[0];
    } else {
        const findIndex = new_data.findIndex((dt) => dt.value == selected);
        new_selected = new_data[findIndex];
    }

    return (
        <Select
            ref={selectRef}
            options={new_data}
            onChange={onChange}
            styles={colorStyles}
            defaultValue={new_selected}
            isDisabled={disabled}
            noOptionsMessage={() => "Tidak Ada Data"}
        />
    );
};

export const ReactSelectCreate = ({
    data = [],
    title = "",
    onChange,
    selected = "",
    disabled = false,
    selectRef,
}) => {
    const new_data = [{ value: "", label: "Pilih " + title }, ...data];

    let new_selected;

    if (isEmpty(selected)) {
        new_selected = new_data[0];
    } else {
        const findIndex = new_data.find((dt) => dt.value == selected);
        new_selected = new_data[findIndex];
    }

    return (
        <CreatableSelect
            ref={selectRef}
            options={new_data}
            onChange={onChange}
            styles={colorStyles}
            defaultValue={new_selected}
            isDisabled={disabled}
            noOptionsMessage={() => "Tidak Ada Data"}
        />
    );
};

export const ReactSelectMulti = ({
    placeholder = "",
    defaultValue = [],
    data = [],
    onChange,
}) => {
    return (
        <Select
            defaultValue={defaultValue}
            isMulti
            options={data}
            styles={colorStyles}
            placeholder={placeholder}
            noOptionsMessage={() => "Tidak Ada Data"}
            onChange={onChange}
        />
    );
};
