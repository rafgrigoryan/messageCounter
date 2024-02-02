const config=require('./config')
const rabbitChannel=require('./rabbit')

async function sendMessages() {
    const{rabbitMQUrl,queueName,messagesCount}=config
    const mq=new rabbitChannel(rabbitMQUrl,queueName)
    await mq.connect()

  for (let i = 1; i <= messagesCount; i++) {
    const message = `Message ${i}`;
    mq.sendMessage(message)
    console.log(`Sent: ${message}`);
  }

  await mq.closeConnection()
}

sendMessages();
