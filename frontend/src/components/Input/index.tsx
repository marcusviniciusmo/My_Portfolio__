import { useState } from 'react';
import { InputContainer, StyledInput, Label } from './styles';

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <InputContainer className="fieldContainer">
      <StyledInput
        type="text"
        className="fieldStyled"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Label className="fieldLabel">
        {focused || value ? placeholder : placeholder + ' *'}
      </Label>
    </InputContainer>
  );
}
