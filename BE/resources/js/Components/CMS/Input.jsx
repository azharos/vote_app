import React, { useRef, useState } from "react";
import { isEmpty } from "../../Utils";
import { Button } from "./Button";
import Ckeditor from "../Ckeditor";
import {
    ReactSelect,
    ReactSelectCreate,
    ReactSelectMulti,
} from "../ReactSelect";

export const Input = ({
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    disabled = false,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-boxdark-4 dark:border-form-strokedark dark:bg-form-input dark:text-white"
            disabled={disabled}
        />
    );
};

export const TextArea = ({ value = "", onChange, placeholder = "" }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            className="w-full h-30 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white text-sm"
            placeholder={placeholder}
        />
    );
};

export const InputFile = ({ onChange }) => {
    return (
        <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-meta-3 file:hover:bg-opacity-100 focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-meta-3 dark:file:text-white dark:focus:border-meta-3"
            onChange={onChange}
        />
    );
};

export const InputGroup = ({
    label = "",
    placeholder = "",
    value = "",
    onChange,
    disabled = false,
}) => {
    return (
        <div className="w-full border-[1.5px] border-form-strokedark rounded-lg overflow-hidden flex">
            <div className="p-3 bg-form-strokedark text-center">{label}</div>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="flex-1 w-full rounded-lg bg-transparent py-3 px-4 text-black outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-boxdark-4 dark:border-form-strokedark dark:bg-form-input dark:text-white"
            />
        </div>
    );
};

export const FormInputGroup = ({
    title = "",
    label = "",
    placeholder = "",
    value = "",
    onChange,
    disabled,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            <InputGroup
                label={label}
                placeholder={new_placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export const InputSearch = ({
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    title = "",
    colSpan = "",
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className={`flex flex-col gap-1 ${colSpan}`}>
            <label htmlFor="" className="text-sm text-white">
                {title}
            </label>
            <input
                type={type}
                placeholder={new_placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-3 py-2 text-black outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white text-sm"
            />
        </div>
    );
};

export const SelectSearch = ({
    onChange,
    title = "",
    colSpan = "",
    children,
    defaultValue = "",
    ref,
}) => {
    return (
        <div className={`flex flex-col gap-1 ${colSpan}`}>
            <label htmlFor="" className="text-sm text-white">
                {title}
            </label>
            <select
                className="relative z-20 w-full appearance-none rounded-lg border border-stroke px-3 py-2 outline-none transition focus:border-meta-3 active:border-meta-3 dark:border-form-strokedark bg-transparent text-white text-sm"
                onChange={onChange}
                ref={ref}
                defaultValue={defaultValue}
            >
                <option
                    value=""
                    disabled=""
                    className="text-body dark:text-bodydark bg-meta-4"
                >
                    Pilih {title}
                </option>
                {children}
            </select>
        </div>
    );
};

export const FormHorizontal = ({
    title = "",
    value = "",
    onChange,
    placeholder = "",
    disabled,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <Input
                value={value}
                onChange={onChange}
                placeholder={new_placeholder}
                disabled={disabled}
            />
        </div>
    );
};

export const FormGroupHorizontal = ({
    title = "",
    label = "",
    placeholder = "",
    value = "",
    onChange,
    disabled,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <InputGroup
                label={label}
                placeholder={new_placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export const FormSelectHorizontalOld = ({
    children,
    title,
    onChange,
    ref,
    defaultValue = "",
}) => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <select
                className="relative z-20 w-full appearance-none rounded-lg border border-stroke px-5 py-3 outline-none transition focus:border-meta-3 active:border-meta-3 dark:border-form-strokedark bg-transparent text-white"
                onChange={onChange}
                ref={ref}
                defaultValue={defaultValue}
            >
                <option
                    value=""
                    disabled=""
                    className="text-body dark:text-bodydark bg-meta-4"
                >
                    Pilih {title}
                </option>
                {children}
            </select>
        </div>
    );
};

export const FormSelectHorizontal = ({
    title,
    onChange,
    selected,
    data,
    disabled,
    placeholder = "",
    selectRef,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <ReactSelect
                selectRef={selectRef}
                title={new_placeholder}
                selected={selected}
                onChange={onChange}
                data={data}
                disabled={disabled}
            />
        </div>
    );
};

export const FormFileHorizontal = ({
    src = "/image/no_image.jpg",
    title = "",
    onChange,
    desc = "",
    width = "max-w-28 w-full",
}) => {
    return (
        <div className="grid grid-cols-2 items-center gap-y-2">
            <div className=""></div>
            <div className="">
                <img src={src} alt="" className={`${width} h-auto`} />
            </div>
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>

            <div className="">
                <InputFile onChange={onChange} />
                <span className="text-xs">{desc}</span>
            </div>
        </div>
    );
};

export const FormPilihGambar = ({
    title = "Gambar",
    src = "/image/no_image.jpg",
    dataGambar = [],
}) => {
    return (
        <div className="grid grid-cols-2 items-center gap-y-3">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <div className="flex items-end gap-2">
                <img src={src} alt="" className="max-w-20 w-full h-auto" />
                <div className="">
                    <Button
                        title="Hapus"
                        bgColor="bg-danger hover:opacity-90"
                        disabled
                        size="sm"
                    />
                </div>
                <div className="">
                    <Button title="Pilih Gambar" size="sm" />
                </div>
            </div>
        </div>
    );
};

export const FormTextareaHorizontal = ({
    title,
    placeholder,
    value,
    onChange,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <TextArea
                value={value}
                onChange={onChange}
                placeholder={new_placeholder}
            />
        </div>
    );
};

export const FormCkeditor = ({ title, value, onChange }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            <div className="text-black text-sm">
                <Ckeditor value={value} onChange={onChange} />
            </div>
        </div>
    );
};

export const FormCkeditorHorizontal = ({ title = "", value, onChange }) => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="">
                <label
                    htmlFor=""
                    className="mb-3 block text-black dark:text-white"
                >
                    {title}
                </label>
            </div>
            <div className="text-black text-sm">
                <Ckeditor value={value} onChange={onChange} />
            </div>
        </div>
    );
};

export const FormInput = ({ title, placeholder, value, onChange }) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            <Input
                placeholder={new_placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export const FormSelect = ({
    title,
    placeholder,
    selected,
    onChange,
    data,
    type = "default",
    disabled,
    selectRef,
    defaultValue,
}) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            {type == "default" ? (
                <ReactSelect
                    selectRef={selectRef}
                    title={new_placeholder}
                    selected={selected}
                    onChange={onChange}
                    data={data}
                    disabled={disabled}
                />
            ) : type == "auto_create" ? (
                <ReactSelectCreate
                    selectRef={selectRef}
                    title={new_placeholder}
                    selected={selected}
                    onChange={onChange}
                    data={data}
                    disabled={disabled}
                />
            ) : (
                type == "multi" && (
                    <ReactSelectMulti
                        placeholder={new_placeholder}
                        defaultValue={defaultValue}
                        data={data}
                        onChange={onChange}
                    />
                )
            )}
        </div>
    );
};

export const FormFile = ({
    title = "",
    previewImage = "",
    onCloseImage,
    onDropFile,
}) => {
    const fileRef = useRef(null);

    const onDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;

        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            onDropFile(newFiles);

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

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            <div
                className="border border-dashed border-form-strokedark h-35 w-full rounded-lg flex justify-center items-center relative p-1"
                onDrop={onDrop}
                onDragOver={(event) => onDrag(event)}
                onDragLeave={(event) => onDrag(event, false)}
                onDragEnter={(event) => onDrag(event)}
                ref={fileRef}
            >
                {isEmpty(previewImage) ? (
                    <div className="text-center text-sm">
                        <p>Drag & Drop Gambar Disini</p>
                    </div>
                ) : (
                    <>
                        <img
                            src={previewImage}
                            alt=""
                            className="w-auto h-full object-contain object-center"
                        />
                        <div
                            className="absolute size-5 bg-secondary-cms rounded-full flex justify-center items-center top-1 left-2 text-sm cursor-pointer"
                            onClick={onCloseImage}
                        >
                            <i className="fa-solid fa-close"></i>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export const FormTextarea = ({ title, placeholder, value, onChange }) => {
    const new_placeholder = isEmpty(placeholder) ? title : placeholder;

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
                {title}
            </label>
            <TextArea
                value={value}
                onChange={onChange}
                placeholder={new_placeholder}
            />
        </div>
    );
};

export const FormSwitch = ({ value = false, title = "", onChange }) => {
    return (
        <div>
            <label
                htmlFor="toggle3"
                className="flex cursor-pointer select-none items-center gap-2"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle3"
                        className="sr-only"
                        onChange={onChange}
                    />
                    <div
                        className={`block h-8 w-14 rounded-full ${
                            value ? "bg-meta-3" : "bg-secondary-cms"
                        }`}
                    ></div>
                    <div
                        className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                            value &&
                            "!right-1 !translate-x-full !bg-primary dark:!bg-white"
                        }`}
                    >
                        <span className={`hidden ${value && "!block"}`}>
                            <svg
                                className="fill-white dark:fill-black"
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                    fill=""
                                    stroke=""
                                    strokeWidth="0.4"
                                ></path>
                            </svg>
                        </span>
                        <span className={`${value && "hidden"}`}>
                            <svg
                                className="h-4 w-4 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <span className="text-white">{title}</span>
            </label>
        </div>
    );
};
