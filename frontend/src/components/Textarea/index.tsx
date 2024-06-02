import { useState } from 'react';
import { TextareaContainer, StyledTextarea, Label } from './styles';

interface TextareaProps {
  placeholder: string;
}

export function Textarea({ placeholder }: TextareaProps) {
  const [value, setValue] = useState('');

  return (
    <TextareaContainer className="fieldContainer">
      <StyledTextarea
        rows={5}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <Label>{placeholder}</Label>
    </TextareaContainer>
  );
}
