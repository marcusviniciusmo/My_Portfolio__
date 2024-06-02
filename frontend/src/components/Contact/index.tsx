import emailjs from 'emailjs-com';
import React, { useState } from 'react';
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

interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ContactContainer className="contentContainer">
      <TitleContentPage title="Contact" left="16.8" />

      <ContactForm onSubmit={handleSubmit}>
        <Text>Thanks for taking the time to reach out.</Text>

        <ContactInputs>
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </ContactInputs>

        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}
