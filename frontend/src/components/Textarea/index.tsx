import { useState } from 'react';
import { TextareaContainer, StyledTextarea, Label } from './styles';

interface TextareaProps {
  placeholder: string;
}

export function Textarea({ placeholder }: TextareaProps) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <TextareaContainer className="fieldContainer">
      <StyledTextarea
        className="fieldStyled"
        rows={5}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Label className="fieldLabel">
        {focused || value ? placeholder : placeholder + ' *'}
      </Label>
    </TextareaContainer>
  );
}
