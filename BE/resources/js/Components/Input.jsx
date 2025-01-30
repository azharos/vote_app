import React, { useState } from "react";

export const InputCheckbox = ({ title }) => {
    return (
        <div className="flex gap-2 items-start">
            <input
                type="checkbox"
                name="checkbox"
                className="focus:ring-2 focus:ring-primary outline-none"
            />
            <span className="text-xxs">{title}</span>
        </div>
    );
};

export const Input = ({
    type = "text",
    placeholder = "",
    autoComplete = "off",
    value = "",
    onChange,
}) => {
    return (
        <input
            type={type}
            className="w-full focus:outline-none px-3 py-1 rounded-lg h-9 focus:ring-2 focus:ring-primary text-xs placeholder:text-stone-300 font-secondary bg-input border border-input"
            placeholder={placeholder}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
        />
    );
};

export const InputNavbar = ({
    type = "text",
    placeholder = "",
    autoComplete = "off",
    value = "",
    onChange,
}) => {
    return (
        <input
            type={type}
            className="w-full focus:outline-none pl-10 pr-3 py-1 rounded-lg h-9 focus:ring-2 focus:ring-primary text-sm placeholder:text-stone-300 font-secondary bg-input border border-input"
            placeholder={placeholder}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
        />
    );
};

export const InputOTP = ({ fieldCount = 1, setFinalValue }) => {
    const [otpInputs] = useState(() => {
        const temp_array = [];
        for (let i = 1; i <= fieldCount; i++) {
            temp_array.push({ id: `input_${i}`, name: `input_${i}` });
        }
        return temp_array;
    });

    const onInput = (e) => {
        const isNotANumber = isNaN(parseInt(e.target.value, 10));
        if (isNotANumber) {
            e.target.value = "";
        }

        setFinalValue((prev) => {
            const temp_array = [...prev];
            temp_array[e.target.dataset.index] = e.target.value;
            return temp_array;
        });

        if (e.target.value.length === 1) {
            const nextSibling = e.target.nextElementSibling;
            if (nextSibling) {
                nextSibling.focus();
            }
        }
    };

    const onKeyUp = (e) => {
        if (e.code === "Backspace" || e.which === 8) {
            if (e.target.value.length === 0) {
                const prevSibling = e.target.previousElementSibling;
                if (prevSibling) {
                    prevSibling.focus();
                    prevSibling.select();
                }
            }
        }
    };

    return (
        <>
            {otpInputs.map((input, idx) => (
                <input
                    key={idx}
                    data-index={idx}
                    id={input.id}
                    name={input.name}
                    inputMode="numeric"
                    type="text"
                    maxLength={1}
                    onInput={onInput}
                    onKeyUp={onKeyUp}
                    className="bg-input rounded-lg h-16 text-center outline-none focus:ring-2 ring-primary"
                    autoComplete="off"
                />
            ))}
        </>
    );
};

export const InputPassword = ({
    placeholder = "",
    autoComplete = "off",
    value = "",
    onChange,
}) => {
    const [isPassword, setIsPassword] = useState(true);

    return (
        <div className="relative">
            <input
                type={isPassword ? "password" : "text"}
                className="w-full focus:outline-none pl-3 pr-7 py-1 rounded-lg h-9 focus:ring-2 focus:ring-primary text-xs placeholder:text-stone-300 font-secondary bg-input border border-input"
                placeholder={placeholder}
                value={value}
                autoComplete={autoComplete}
                onChange={onChange}
            />
            <div
                className="text-sm absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                onClick={() => setIsPassword(!isPassword)}
            >
                <i
                    className={`fa-regular ${
                        isPassword ? "fa-eye-slash" : "fa-eye"
                    } select-none`}
                ></i>
            </div>
        </div>
    );
};

export const FormInput = ({
    type = "text",
    title = "",
    value = "",
    onChange,
    placeholder = "",
}) => {
    return (
        <>
            <label className="block text-xs font-medium pb-2">{title}</label>
            <div className="w-full relative">
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

export const FormPassword = ({
    title = "",
    value = "",
    onChange,
    placeholder = "",
}) => {
    return (
        <>
            <label className="block text-xs font-medium pb-2">{title}</label>
            <div className="w-full relative">
                <InputPassword
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};
