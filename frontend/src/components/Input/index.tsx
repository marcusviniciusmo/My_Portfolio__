import { useState } from 'react';
import { InputContainer, StyledInput, Label } from './styles';

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  const [value, setValue] = useState('');

  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <Label>{placeholder}</Label>
    </InputContainer>
  );
}
