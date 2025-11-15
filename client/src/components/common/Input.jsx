import React from 'react';

function Input({ label, name, value, onChange, type = "text", required = false, placeholder = "", error = "" }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '1rem'
        }}
      />
      {error && <span style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>{error}</span>}
    </div>
  );
}

export default Input;
