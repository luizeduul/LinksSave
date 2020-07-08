import React, { useState, useEffect } from 'react';

//import './styles.css';

export default function FormGroup(props) {
  const { data, name, label, type } = props;
  const [value, setValue] = useState('');

  function handleChange(event) {
    if (value === event.target.value) return;
    setValue(event.target.value);
  };

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;
    if (initialValue !== undefined) {
      setValue(initialValue)
    }
  }, [name, data]);

  const inputProps = {
    type,
    name,
    value: value || '',
    onChange: handleChange,
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="input-email"
        {...inputProps}
        required
      />
    </div>
  );
}
