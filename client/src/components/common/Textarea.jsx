import React from 'react';

function Textarea({ label, name, value, onChange, required = false, placeholder = "", rows = 4, error = "" }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: error ? '1px solid #dc3545' : '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '1rem',
          resize: 'vertical'
        }}
      />
      {error && <span style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>{error}</span>}
    </div>
  );
}

export default Textarea;
