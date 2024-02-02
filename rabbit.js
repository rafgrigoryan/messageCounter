const amqp = require("amqplib");

class Rabbit {
  constructor(connection, queueName) {
    this.connection = connection;
    this.queueName = queueName;
    this.channel = null;
  }

  async connect() {
    this.connection = await amqp.connect(this.connection);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queueName, { durable: false });
  }

  async sendMessage(message) {
    await this.channel.sendToQueue(this.queueName, Buffer.from(message));
  }

  async closeConnection() {
    await this.channel.close();
    await this.connection.close();
  }
}

module.exports = Rabbit;
