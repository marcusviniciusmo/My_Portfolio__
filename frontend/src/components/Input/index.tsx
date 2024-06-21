import { useState } from 'react';

import { InputProps } from '../../@types/Input';

import { InputContainer, StyledInput, Label } from './styles';

export function Input({ name, placeholder, value, onChange }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <InputContainer>
      <StyledInput
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />

      <Label>{focused || value ? placeholder : placeholder + ' *'}</Label>
    </InputContainer>
  );
}
