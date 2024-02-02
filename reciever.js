const rabbitChannel = require("./rabbit");
const config = require("./config");

async function receiveMessages() {
  const { rabbitMQUrl, queueName } = config;
  const mq = new rabbitChannel(rabbitMQUrl, queueName);
  let messageCount = 0;
  try {
    await mq.connect();
    console.log(`Waiting for messages.`);

    setInterval(() => {
      console.log(`${messageCount} messages/second`);
      messageCount = 0;
    }, 1000);

    mq.channel.consume(queueName, (msg) => {
      if (msg !== null) {
        messageCount++;
        //console.log(`${msg.content.toString()}`); // uncomment to show incoming messages
        mq.channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

receiveMessages();
