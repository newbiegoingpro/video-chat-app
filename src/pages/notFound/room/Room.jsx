import React from 'react'
import { useParams } from 'react-router'
import useWebRtc, { LOCAL_VIDEO } from '../../../hooks/useWebRtc';

function layout(clientsNumber = 1) {
    const pairsOfClients = Array.from({ length: clientsNumber }).reduce((acc, next, index, arr) => {
        if (index % 2 === 0) {
            acc.push(arr.slice(index, index + 2))
        }
        return acc
    }, [])
    const numberOfPairs = pairsOfClients.length;
    const heigth = `${100 / numberOfPairs}%`

    return pairsOfClients.map((row, index, arr) => {
        if (index === arr.length - 1 && row.length === 1) {
            return [{
                width: '100%',
                heigth: heigth,
            }]
        }
        return row.map(() => ({

            width: '50%',
            heigth
        })
        )
    }).flat();
}

export default function Room() {
    const { id: roomId } = useParams();
    const { clients, provideMediaRef } = useWebRtc(roomId);
    console.log(clients);
    const videoLayout = layout(clients.length);


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            {clients.map((client, index) => (
                <div key={client} style={videoLayout[index]}>
                    <video
                        width='100%'
                        height='100%'
                        autoPlay
                        playsInline
                        muted={client === LOCAL_VIDEO}
                        ref={instance => {
                            provideMediaRef(client, instance)
                        }}
                    />

                </div>
            ))}
        </div>
    )
}
