import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [curent_position , setCurent_position] = useState()
  const [selected_PH , setSelected_PH] = useState("0")
  const [selected_zone , setSelected_Zone] = useState("0")
  const [pharmacytData, setPharmacyData] = useState([])
  const [pharmacytNuit, setPharmacyNuit] = useState([])
  const [pharmacytJour, setPharmacyJour] = useState([])
  const [loading, setLoading] = useState(false)
  const [ville , setVille] = useState([])
    const choosePosition = (center) => {
        setCurent_position(center);
      };
     
      const chooseZone = (id) => {
        setSelected_Zone(id);
      };
      const choosePH = (id) => {
        setSelected_PH(id);
      };
  
  
  useEffect(() => {
    const fetchPharmacy = async () => {
      const res = await fetch('http://localhost:8090/zones/pharmacies/'+selected_zone)
      const result = await res.json()
      setPharmacyData(result)
      
    }
    const fetchPharmacyJour = async () => {
      const res = await fetch('http://localhost:8090/pharmacieDeGardes/getActual/jour/'+selected_zone)
      const result = await res.json()
      setPharmacyJour(result)
    }
    const fetchPharmacyNuit = async () => {
      const res = await fetch('http://localhost:8090/pharmacieDeGardes/getActual/nuit/'+selected_zone)
      const result = await res.json()
      setPharmacyNuit(result)
    }
    const fetchVille = async () => { 
      const res = await fetch('http://localhost:8090/villes/all')
      const result = await res.json()
      setVille(result)
    }
    if(selected_zone!="0")
    {
      fetchPharmacy()
    }
   
    fetchVille()
    fetchPharmacyJour()
    fetchPharmacyNuit()
    
  }, [selected_zone] )

  return (
    <div>
      <Header ville={ville} chooseZone={chooseZone} />
      { !loading ? <Map selected_PH={selected_PH} choosePH={choosePH} eventData={pharmacytData} choosePosition={choosePosition} curent_position={curent_position} pharmacytNuit={pharmacytNuit} pharmacytJour={pharmacytJour} /> : <Loader /> }
    </div>
  );
}

export default App;
