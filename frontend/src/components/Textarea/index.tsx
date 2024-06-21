import { useState } from 'react';

import { TextareaProps } from '../../@types/Textarea';

import { TextareaContainer, StyledTextarea, Label } from './styles';

export function Textarea({
  name,
  placeholder,
  value,
  onChange,
}: TextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <TextareaContainer>
      <StyledTextarea
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />

      <Label>{focused || value ? placeholder : placeholder + ' *'}</Label>
    </TextareaContainer>
  );
}
