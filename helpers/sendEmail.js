const ElasticEmail = require('@elasticemail/elasticemail-client');
require('dotenv').config();

const {ELESTICEMEIL_API_KEY} = process.env;
 
const defaultClient = ElasticEmail.ApiClient.instance;
 
const {apikey} = defaultClient.authentications;
apikey.apiKey = ELESTICEMEIL_API_KEY;
 
const api = new ElasticEmail.EmailsApi()
 
const email = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [
    new ElasticEmail.EmailRecipient("tofet55015@vreaa.com")
  ],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: "HTML",
        Content: "My test email content ;)"
      })
    ],
    Subject: "Verify email",
    From: "nikitenko.lyudmila@gmail.com"
  }
});
 
const sendEmail= function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.emailsPost(email, sendEmail);

module.export = sendEmail;