
//Importar express, socketIO y serial port
const socket = require('socket.io');
const express = require('express');
const SerialPort = require('serialport');
const http = require('http');

//Crear e iniciar servidor
const app = express();
const servidor = http.createServer(app);
const conexionSocket = socket.listen(servidor)

//Leer lineas serial
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

//Crear conexión
const arduinoSerial = new SerialPort('COM3', {
    baudRate: 9600
});

//
arduinoSerial.pipe(parser);

//Comprobar que la conexión está creada
arduinoSerial.on('open', function () {
    console.log('Serial open');
});

//Leemos los datos enviados desde el serial
arduinoSerial.on('data', function (data) {
    console.log(data.toString());
});

//Gestión de errores
arduinoSerial.on('err', function (err) {
    console.log(err.menssage);
});

//El servidor se quede a la escucha
servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})




