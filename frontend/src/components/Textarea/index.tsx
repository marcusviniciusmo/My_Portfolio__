import { useState } from 'react';
import { TextareaContainer, StyledTextarea, Label } from './styles';

interface TextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export function Textarea({
  name,
  placeholder,
  value,
  onChange,
}: TextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <TextareaContainer className="fieldContainer">
      <StyledTextarea
        className="fieldStyled"
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />
      <Label className="fieldLabel">
        {focused || value ? placeholder : placeholder + ' *'}
      </Label>
    </TextareaContainer>
  );
}
