import { TitleContentPage } from '../TitleContentPage';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import {
  ContactContainer,
  Text,
  ContactForm,
  ContactInputs,
  SubmitButton,
} from './styles';

export function Contact() {
  return (
    <ContactContainer className="contentContainer">
      <TitleContentPage title="Contact" left="16.8" />

      <ContactForm>
        <Text>Thanks for taking the time to reach out.</Text>

        <ContactInputs>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </ContactInputs>

        <Textarea placeholder="Message" />

        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}
