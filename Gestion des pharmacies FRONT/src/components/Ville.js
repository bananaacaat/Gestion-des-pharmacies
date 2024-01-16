import {useState} from 'react'
import Zone from './Zone'



const Ville = ({ville,chooseZone}) => {
    const [selected_ville , setSelected_ville] = useState("0")
    const villes = ville.map((ev, index) => {
        return <option value={ev.id} nom={ev.nom} >
            {ev.nom}
        </option>
        //onChange={() => setLocationInfo({ id: ev.id, lat: ev.lat })}
        
    })  
  return (
    <div className='selection'>
        <h3 id='villet'> ville :  </h3>
         <select name="villes" id="ville-select" onChange={e=>setSelected_ville(e.target.value) }>
            <option value="0">--Veillez Choissir une ville--</option>
            {villes}
        </select>
        <Zone ville={selected_ville} chooseZone={chooseZone}  />
    </div>
   
  )
}

export default Ville
