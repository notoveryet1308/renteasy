
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './mapbox.styles.scss';

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1Ijoibm90b3ZlcnlldDEzMDgiLCJhIjoiY2s1bnZqcHg5MGN4NDNubW9neXQ0b3FrdiJ9.Z-1zjXKrlIsFQ1PjgpnCHA';



function Mapbox({latitude, longitude}) {
    const [viewport, setViewport] = useState({
        width: " 300px",
        height: "130px",
        latitude: latitude,
        longitude: longitude,
        center :[longitude, latitude],
        zoom: 10,

    });


    return (

        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/notoveryet1308/ck5nvchju10dn1inv169q64ae'
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
            className='mapbox'
        >
            <Marker latitude={latitude} longitude={longitude}>
                <div className='marker-icon'>
                    <i className="icon fas fa-map-marker-alt"></i>

                </div>

            </Marker>
        </ReactMapGL>
    )
}





export default Mapbox;


