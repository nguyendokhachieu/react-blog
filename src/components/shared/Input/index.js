import './Input.css';
import { useEffect, useState } from 'react';

// Input.defaultProps = {
//   type: 'text'
// }

export default function Input({ 
  type = 'text',
  placeholder,
  labelText,
  onChange,
  value: propValue = ''
}) {
  // state
  const [value, setValue] = useState('');
  const [localType, setLocalType] = useState(type);

  useEffect(() => {
    setValue(propValue);
  }, [propValue])

  function _onChange(evt) {
    setValue(evt.target.value);
    
    if (typeof onChange === 'function') {
      onChange(evt);
    }
  }

  function onToggleShowPassword() {
    if (localType === 'password') {
      setLocalType('text');
    } else {
      setLocalType('password')
    }
  }

  return (
    <div className="form-control">
      {
        labelText ? <label>{labelText}</label> : null
      }
      {
        type === 'password' 
          ? <i 
            onClick={onToggleShowPassword} 
            className={
              localType === 'password' 
                ? 'toggle-password ion-eye' 
                : 'toggle-password ion-eye-disabled'
            } 
          />
          : null
      }
      <input 
        type={localType} 
        placeholder={placeholder} 
        onChange={_onChange}
        value={value}
      />
    </div>
  )
}

// Truthy - Falsy
// Falsy: undefined - null - '' - 0 - false - NaN
// Không phải Falsy sẽ là Truthy