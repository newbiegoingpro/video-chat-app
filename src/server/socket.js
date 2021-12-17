import {io} from "socket.io-client";

const options = {
    "force new connections": true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
};

const socket = io(`ws//:https://lit-atoll-99067.herokuapp.com:${process.env.PORT}`, options);

export default socket;