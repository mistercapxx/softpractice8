const remoteUrl = 'wss://ws.postman-echo.com/raw';
const localUrl = 'ws://localhost:8082';

const url = remoteUrl; 
const client = new WebSocket(localUrl);

client.onopen = () => {
    console.log('Connection done');
};


client.onmessage = ({ data }) => {
    const chat = document.getElementById('chat');
    chat.value += `${data}\n`;
};

function send() {
    const nickname = document.getElementById('userName').value;
    const message = document.getElementById('message').value;

   (nickname && message) 
        const formattedMessage = `${nickname}: ${message}`;
        client.send(formattedMessage);
        // document.getElementById('message').value = ''; // Clear message input after sending
  
}