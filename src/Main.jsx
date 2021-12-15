import React from 'react'
import ACTIONS from './server/actions';
import socket from './server/socket';
import { useNavigate } from 'react-router';
import { v4 } from 'uuid';

export default function Main() {
    const [rooms, setRooms] = React.useState([]);
    const history = useNavigate();
    const rootNode = React.useRef();
    React.useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, function ({ rooms = [] } = {}) {
                if (rootNode.current) {
                    setRooms(rooms);
                }

            })
    }, []);

    return (
        <div ref={rootNode}>
            Main
            <h1>Rooms</h1>

            <ul>
                {rooms.map(room => {
                    return (
                        <li key={room}>
                            {room}
                            <button onClick={() => { history(`/room/${room}`) }}>join</button>
                        </li>

                    )
                })}
            </ul>
            <button onClick={() => { history(`/room/${v4()}`) }}>create new room</button>
        </div>
    )
}
