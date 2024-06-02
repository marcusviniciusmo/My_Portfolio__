import { useState } from 'react';
import { InputContainer, StyledInput, Label } from './styles';

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export function Input({ name, placeholder, value, onChange }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <InputContainer className="fieldContainer">
      <StyledInput
        type="text"
        className="fieldStyled"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />
      <Label className="fieldLabel">
        {focused || value ? placeholder : placeholder + ' *'}
      </Label>
    </InputContainer>
  );
}
