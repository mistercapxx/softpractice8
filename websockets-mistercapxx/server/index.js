const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8082 });


server.on('connection', (socket) => {
    
    socket.on('message', (sms) => {

    server.clients.forEach((client) => client.send(String(sms)));
        
    });
});

// server.on('close', () => {
//     console.log('Клиент отключен');
// });

// server.on('error', (error) => {
//     console.error('Ошибка WebSocket:', error);
// });




module.exports =server;