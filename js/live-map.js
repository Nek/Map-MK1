import React from "react";
import {Map, TileLayer, MapLayer, Marker, Popup} from "react-leaflet";
import L from 'leaflet';
import component from 'omniscient';

class LiveMap extends React.Component {
    componentDidMount() {
        this.map = L.map(React.findDOMNode(this), {
            center: [10,20],
            zoom: 5,
            minZoom: 2,
            maxZoom: 20,
            layers: [
                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
            ],
            attributionControl: false,
        });
        this.map.on('click', this.onMapClick);
        this.map.panTo([this.props.latlng.get(0), this.props.latlng.get(1)]);
    }
    componentWillUnmount() {
        this.map.off('click', this.onMapClick());
        this.map = null;
    }
    onMapClick() {
        console.log('Map clicked!');
    }
    render() {
        return (
            <div className='map'></div>
        )
    }
}


export default component('LiveMap', (latlng) =>
                         <div>
                         <LiveMap latlng={latlng.deref()}></LiveMap>
                         </div>
                        );
