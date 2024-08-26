import React, { useState } from 'react'
import {MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../components/Mainview.css'

const WeatherMap = () => {
    const position = [20.5937, 78.9629]
    const [weatherLayer, setWeatherlayer] = useState(null)

   const weatherLayerURL =  'https://tile.openweathermap.org/map/' + weatherLayer + '/{z}/{x}/{y}.png?appid=d5d06f38168859042a64cdab1041697f'

  return (
    <div id="map" style={{width : "100%", height:"100vh"}}>
     <div className='container controls'>
      <div class="form-check">
        <input className="form-check-input" type="checkbox" checked={weatherLayer==="precipitation_new"} onChange={(e) => setWeatherlayer(e.target.value)} value="precipitation_new"/>
       <label className='form-check-label' >Precipitation</label></div>
       <div class="form-check">
        <input className="form-check-input" type="checkbox" checked={weatherLayer==="wind_new"} onChange={(e) => setWeatherlayer(e.target.value)} value="wind_new"/>
        <label className='form-check-label' >Wind</label>
        </div>
        </div>
        
        <MapContainer center={position} zoom={5} scrollWheelZoom={true}>

        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <TileLayer 
        url={weatherLayerURL}
        />
        </MapContainer>
    
    </div>


  )
}

export default WeatherMap