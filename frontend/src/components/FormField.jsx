import React from 'react';

const FormField = ({ label, name, type = 'number', value, onChange, options, required = true }) => {
  if (type === 'select') {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        step={type === 'number' ? '1' : undefined}
      />
    </div>
  );
};

export default FormField;