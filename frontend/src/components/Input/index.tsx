import { useState } from 'react';
import { InputContainer, StyledInput, Label } from './styles';

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  const [value, setValue] = useState('');

  return (
    <InputContainer className="fieldContainer">
      <StyledInput
        type="text"
        className="fieldStyled"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <Label className="fieldLabel">{placeholder}</Label>
    </InputContainer>
  );
}
