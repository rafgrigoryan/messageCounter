## RabbitMQ Messages Counter
### Prerequisites

- Node.js installed
- RabbitMQ installed and running

### Configuration

Update the `config.js` file to configure RabbitMQ connection details and messages count.

### Running the Receiver

To start receiving messages, follow these steps:

1. Open a terminal and navigate to the project directory.

2. Run the receiver script using the following command:

    ```bash
    node receiver.js
    ```

   This command initiates the receiver script, allowing it to continuously listen for incoming messages.

### Running the Sender

To send messages to the RabbitMQ queue, follow these steps:

1. Open another terminal and navigate to the project directory.

2. Run the sender script using the following command:

    ```bash
    node sender.js
    ```

   The sender script will send the specified number of messages (configured in `config.js`) to the RabbitMQ queue.

### Generating Message Count Report

To generate a message count report after running the receiver, follow these steps:

1. Open a new terminal window.

2. Navigate to the project directory.

3. Run the following command:

    ```bash
    node reciever.js
    ```

   This command will display the total count of messages received in second.

### Notes

- Ensure that RabbitMQ is installed and running before executing the scripts.
- Adjust the `messagesCount` in `config.js` to change the number of messages sent by the sender.
