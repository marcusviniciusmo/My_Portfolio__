import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { TitleContentPage } from '../../components/TitleContentPage';
import { Input } from '../../components/Input';
import { Toastify } from '../../components/Toastify';
import { Textarea } from '../../components/Textarea';

import { ContactFormType } from '../../@types/Contact';

import { ContactContainer, Text, Form, Inputs, SubmitButton } from './styles';
import { Loading } from '../../components/Loading';

export function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
  });

  const CONTACT_TEXT = 'Thanks for taking the time to reach out.';

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const form = event.target as HTMLFormElement;

    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then((result) => {
        toast.success(`${result.text}!! Message sent!`);
      })
      .catch((error) => {
        toast.error(`Error!! ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <ContactContainer>
      <TitleContentPage title="Contact" $left="16.8" />

      <Form onSubmit={handleSubmit}>
        <Text>{CONTACT_TEXT}</Text>

        <Inputs>
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
        </Inputs>

        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <SubmitButton>Submit</SubmitButton>
        <Toastify />
        {isLoading && <Loading />}
      </Form>
    </ContactContainer>
  );
}
