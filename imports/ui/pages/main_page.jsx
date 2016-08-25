import React from 'react';
import ReactDOM from 'react-dom';
import {Map, TileLayer, Marker} from 'react-leaflet';
import MarkerLayer from 'react-leaflet-marker-layer';
import {EditMarker} from '../components/edit_marker/EditMarker.jsx';

import MainLayout from '/imports/ui/layouts/main_layout.jsx';

import 'leaflet/dist/leaflet.css';
import './main_page.scss';

export class MainPage extends React.Component {
    renderHeader() {
        return (<h1>Hello</h1>);
    }
    renderContent() {
        const position = [51, 0];
        return (
            <div className="container">
                <Map center={position} zoom={10}>
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                    <MarkerLayer 
                        markers={[{
                            position: { lng: 0, lat: 51 }
                        }]}
                        longitudeExtractor={m => m.position.lng}
                        latitudeExtractor={m => m.position.lat}
                        markerComponent={EditMarker}
                    />
                </Map>
            </div>
        );
    }
    render() {
        return (
            <MainLayout header={this.renderHeader()} content={this.renderContent()}/>
        );
    }
}

FlowRouter.route('/', {
    action() {
        // if logged in
        ReactDOM.render(<MainPage />, document.getElementById('app'));
        // else 
        // ReactDOM.render(<LoginPage />, document.getElementById('app'));
    }
});
