import Spinner from "./Spinner";

export const Button = ({
    title = "",
    type = "button",
    disabled = false,
    classBtn = "",
    onClick,
}) => {
    return (
        <button
            type={type}
            className={`py-2 px-3 rounded-lg text-sm font-secondary bg-primary hover:bg-primary-75 cursor-pointer disabled:pointer-events-none disabled:opacity-50 ${classBtn} outline-none`}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export const ButtonWithIcon = ({
    icon = "",
    disabled = false,
    type = "button",
}) => {
    return (
        <button
            className="py-2 px-3 rounded-lg text-sm font-secondary bg-primary hover:bg-primary-75 cursor-pointer disabled:pointer-events-none disabled:opacity-50 outline-none"
            disabled={disabled}
            type={type}
        >
            <i className={`fa-solid ${icon}`}></i>
        </button>
    );
};

export const ButtonWithIconTitle = ({
    title = "",
    icon = "",
    classBtn = "",
    disabled = false,
    type = "button",
    onClick,
}) => {
    return (
        <button
            className={`py-2 px-3 rounded-lg text-sm font-secondary bg-primary hover:bg-primary-75 cursor-pointer disabled:pointer-events-none disabled:opacity-50 ${classBtn} outline-none`}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            <i className={`fa-solid ${icon}`}></i>&nbsp;{title}
        </button>
    );
};

export const ButtonTable = ({
    btnColor = "",
    title = "",
    size = "sm",
    rounded = "sm",
    disabled = false,
    onClick,
}) => {
    let color;
    let sizing;
    let borderRadius;

    switch (btnColor) {
        case "success":
            color = "bg-emerald-200 text-emerald-900";
            break;
        case "info":
            color = "bg-sky-600";
            break;
        case "warning":
            color = "bg-yellow-300 text-yellow-800";
            break;
        case "danger":
            color = "bg-red-300 text-red-800";
            break;
        case "primary":
            color = "bg-primary hover:bg-primary-75";
            break;
        case "secondary":
            color = "bg-secondary text-white";
            break;
    }

    switch (size) {
        case "sm":
            sizing = "py-0.5 px-1.5 text-xs";
            break;
        case "md":
            sizing = "py-2 px-3 text-sm";
            break;
        default:
            break;
    }

    switch (rounded) {
        case "sm":
            borderRadius = "rounded-sm";
            break;
        case "md":
            borderRadius = "rounded-md";
            break;
        case "lg":
            borderRadius = "rounded-lg";
            break;
        case "2xl":
            borderRadius = "rounded-2xl";
            break;
        default:
            break;
    }

    return (
        <button
            className={`${sizing} ${borderRadius} uppercase font-secondary ${color} disabled:pointer-events-none disabled:opacity-50 outline-none`}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export const ButtonLoading = ({ title = "Loading...", classBtn = "" }) => {
    return (
        <button
            type="button"
            className={`py-2 px-3 rounded-lg text-sm font-secondary bg-primary hover:bg-primary-75 cursor-pointer disabled:pointer-events-none disabled:opacity-50 ${classBtn} outline-none flex items-center justify-center gap-2`}
            disabled
        >
            <Spinner />
            <div className="">{title}</div>
        </button>
    );
};
