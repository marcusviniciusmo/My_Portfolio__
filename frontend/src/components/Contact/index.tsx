import { TitleContentPage } from '../TitleContentPage';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

export function Contact() {
  return (
    <div className="contentContainer">
      <TitleContentPage title="Contact" left="16.8" />
      <h1>CONTACT COMPONENT</h1>
      <p>Thanks for taking the time to reach out.</p>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Textarea placeholder="Message" />
      <button>Submit</button>
    </div>
  );
}
