import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MyMap(){
    return(
        <MapContainer center={[35.768615, 51.438266]} zoom={13} scrollWheelZoom={false}>
        </MapContainer>

    )
}