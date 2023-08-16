
import { sendEmail } from './send-email';

sendEmail(
    'user@domain.com',
       'We need your feedback',
    'You are invited to Our GreenGram Application [link]',
 { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
).then(() => {
    console.log('Your message was successfully sent!');
});