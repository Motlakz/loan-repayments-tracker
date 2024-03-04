import React from "react";

const InputField = ({ id, name, type, value, placeholder, autocomplete, onChange, label }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        autocomplete={autocomplete}
        onChange={onChange}
        required
        className="mt-1 p-2 border rounded-md w-full"
      />
    </div>
);

export default InputField;
