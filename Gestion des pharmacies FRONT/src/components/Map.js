import { MapContainer, LayerGroup ,  TileLayer , LayersControl , useMapEvents , Marker ,Popup} from 'react-leaflet'

import {useEffect, useState} from 'react'
import Routing from './Routing'
import { icon } from "leaflet"
import { Icon } from '@iconify/react'

const ICON1 = icon({
  iconUrl: "https://i.pinimg.com/originals/57/1a/e3/571ae39ce1b3360b0cf852322b413bdb.png",
  iconSize: [40, 40],
})
const ICOND = icon({
  iconUrl: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/64151/sun-icon-clipart-xl.png",
  iconSize: [40, 40],
})
const ICONN = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1809/1809597.png",
  iconSize: [40, 40],
})
const ICONU = icon({
  iconUrl: "https://icon-library.com/images/2018/2112015_marker-circle-map-marker-circle-png-png-download.png",
  iconSize: [40, 40],
})

const Map = ({choosePH,eventData,choosePosition,curent_position,selected_PH,pharmacytJour,pharmacytNuit}) => {
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState(null)
  useEffect(() => {

    if(selected_PH!=0 && position!=null){
      setLoading(false)
    }


    
  })
    function LocationMarker() {
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            choosePosition(e.latlng)
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            console.log(selected_PH)
          },
        })
        
          return position === null ? null : (
            <Marker  position={position}>
              <Popup>You are here</Popup>
            </Marker>
          )
      }
      


    const markers = eventData.map((ev, index) => {
      const lat = ev.lat
      const lng =  ev.log
      const url = "http://localhost:8090/get/imagep/" + ev.id
        return <Marker icon={ICON1}  key={index} position={[ ev.lat , ev.log]} >
             <Popup>
               <h2><Icon icon="healthicons:pharmacy"  />{ev.nom}</h2>
               <img style={ {width : "16rem"}} src={url} alt='pharmacy'></img> 
                <h3> adresse : {ev.adresse} </h3>
                <button onClick={() => choosePH({lat , lng})}><Icon icon="entypo:location" /> Localiser </button>
                </Popup>
            </Marker >
    })
    const markersJour = pharmacytJour.map((ev, index) => {
      const lat = ev.pharmacie.lat
      const lng =  ev.pharmacie.log
      const url = "http://localhost:8090/get/imagep/" + ev.pharmacie.id
      return <Marker icon={ICOND}  key={index} position={[ ev.pharmacie.lat , ev.pharmacie.log]} >
          <Popup>
               <h2><Icon icon="healthicons:pharmacy"  />{ev.pharmacie.nom}</h2>
               <img style={ {width : "16rem"}} src={url} alt='pharmacy'></img> 
                <h3> adresse : {ev.pharmacie.adresse} </h3>
                <button onClick={() => choosePH({lat , lng})}><Icon icon="entypo:location" /> Localiser </button>
                </Popup>
          </Marker >
  })
  const markersNuit = pharmacytNuit.map((ev, index) => {
    const lat = ev.pharmacie.lat
    const lng =  ev.pharmacie.log
    const url = "http://localhost:8090/get/imagep/" + ev.pharmacie.id
    return <Marker icon={ICONN} key={index} position={[ ev.pharmacie.lat , ev.pharmacie.log]} >
         <Popup>
               <h2><Icon icon="healthicons:pharmacy"  />{ev.pharmacie.nom}</h2>
               <img style={ {width : "16rem"}} src={url} alt='pharmacy'></img> 
                <h3> adresse : {ev.pharmacie.adresse} </h3>
                <button onClick={() => choosePH({lat , lng})}><Icon icon="entypo:location" /> Localiser </button>
                </Popup>
          </Marker >
})


  return (
    <div className='maps' >
      <MapContainer center={[ 33.189283 , -8.503153]} zoom={14} scrollWheelZoom={false}  style={{ width: '100%', height: "100vh" ,marginTop:"77px" }} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <LocationMarker />
    <LayersControl position="topright">
          <LayersControl.Overlay checked  name="Toute les pharmacies">
          <LayerGroup>
            {markers}
          </LayerGroup>
          </LayersControl.Overlay>
      <LayersControl.Overlay   name="les pharmacies Garde Nuits">
      <LayerGroup>
        {markersNuit}
       </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay   name="les pharmacies Garde Jour">
      <LayerGroup>
        {markersJour}
       </LayerGroup>
      </LayersControl.Overlay>
      </LayersControl>
    
    { !loading ? <Routing source={curent_position} destination={selected_PH} /> : <></>}
    </MapContainer>
    </div>
  )
}

export default Map



