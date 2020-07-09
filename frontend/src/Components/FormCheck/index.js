import React, { useState, useEffect } from 'react';

export default function FormCheck(props) {
  const { data, name, label } = props;
  const [isChecked, setIsChecked] = useState(null);

  function handleChange(event) {
    if (isChecked === event.target.checked) return;
    setIsChecked(!!event.target.checked);
  };

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;
    if (initialValue !== undefined) {
      setIsChecked(!!initialValue)
    }
  }, [name, data]);

  const inputProps = {
    type: 'checkbox',
    name,
    checked: !!isChecked,
    onChange: handleChange,
  };

  return (
    <div className="form-group">
      <label>
        <input {...inputProps} />
        <span></span>
          {label}
      </label>
    </div>
  );
}
