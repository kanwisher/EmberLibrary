import Controller from '@ember/controller';
import { gte, and, not, match } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  message: '',
  textAreaValid: gte('message.length', 5),
  emailValid: match('emailAddress', /^.+@.+\..+$/),
  formValid: and('textAreaValid', 'emailValid'),

  actions: {
    sendMessage() {
      alert(`Email: ${this.get('emailAddress')}\nMessage: ${this.get('message')}`);
      this.set('responseMessage', `We got your message, we'll be in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
