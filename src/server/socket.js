import {io} from "socket.io-client";

const options = {
    "force new connections": true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
};

const socket = io('/', options);

export default socket;