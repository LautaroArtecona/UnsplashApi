import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [fotos,setFotos]=useState([])

  useEffect(() => {
    const obtenerfotos=async ()=>{
      const response=await axios.get('https://api.unsplash.com/photos/?client_id=dyqKJjrsm1oZS_XJqTv8aoKa3-mz6pTdAADYWWpC2O4&per_page=50')
      setFotos(response.data)}
    obtenerfotos()
/*     console.log(fotos.map(foto=>(foto.urls.small))) */
/*       console.log(fotos) */
})
  return (
    <div className='container'>
      <div className='container-img'>
        {fotos.map(foto=>(
        <div key={foto.id}>
          <img src={foto.urls.small} alt=''/>
        </div>))}
      </div>
    </div>
  );
}



export default App;
