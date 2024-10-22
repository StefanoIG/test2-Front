import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    disabled?: boolean; // Añadimos la propiedad disabled
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, placeholder, disabled = false }) => {
    return (
        <div className="w-full mb-4">
            <label className="mb-2 dark:text-gray-300" htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled} // Aplicamos el atributo disabled si es true
                className={`mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
        </div>
    );
};

export default InputField;
