var io = require('socket.io')();
// var socketFunction = {}
const socketStartUp = function (server) {
    io.attach(server);
    io.on('connection', function (socket) {
      socket.on('UPDATE_PRODUCT', function(data) {
        console.log('UPDATE_PRODUCT')
        io.emit('UPDATE_PRODUCT')
      });
      socket.on('UPDATE_NOTIFICATION', function(data) {
        io.emit('UPDATE_NOTIFICATION')
      });
    })
}
module.exports = {socketStartUp};