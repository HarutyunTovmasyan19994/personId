import React from "react";
import {Controller} from "react-hook-form";


const CustomInput = ({name, placeholder, type, control, styles, label, rules = {}}: any) => {
    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <label>{label}</label>
                    <input
                        type={type}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        className={styles}
                    />
                </>
            )}
        />
    )
}
export default CustomInput
