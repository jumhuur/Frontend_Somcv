const accountSid = "ACad07bd8173e3b7aa7f67477e4efbd5c1";
const authToken = "acbb6fadb7b115e3e5ea123799e0cdc0";
const client = require("twilio")(accountSid, authToken);
const SendMessage = (req, res) => {
  const { Massage } = req.body;
  client.messages
    .create({
      body: `${Massage}`,
      to: `+252634645195`, // Text your number
      from: "+12056327563", // From a valid Twilio number
    })
    .then((message) => res.json({ Done: "ok" }));
};

module.exports = {
  SendMessage,
};
