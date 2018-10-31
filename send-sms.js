const accountSid = 'AC450620e9addabb52ee91cf7f97347321';
const authToken = 'd2629d094cd0b9dc663c632e5e38215d';

const client = require('twilio')(accountSid,authToken);

client.messages.create({
    from: '+15005550006',
    to: '+923458560608',
    body: 'Twillio messaged u'
}).then( message => console.log(message.sid)).catch(err=> console.log(err))