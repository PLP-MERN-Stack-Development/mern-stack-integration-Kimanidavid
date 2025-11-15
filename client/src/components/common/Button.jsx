import React from 'react';

function Button({ children, type = "button", onClick, disabled = false, variant = "primary" }) {
  const baseStyles = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s'
  };

  const variants = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white'
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white'
    }
  };

  const styles = { ...baseStyles, ...variants[variant] };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={styles}
      onMouseOver={(e) => {
        if (!disabled) {
          e.target.style.opacity = '0.8';
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.target.style.opacity = '1';
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
