import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {

  const [fotos,setFotos]=useState([])
  const [pagina,setPagina]=useState([1])

  useEffect(() => {
    const obtenerfotos=async ()=>{
      const response=await axios.get('https://api.unsplash.com/photos/?client_id=dyqKJjrsm1oZS_XJqTv8aoKa3-mz6pTdAADYWWpC2O4&per_page=9&page='+ pagina)
      setFotos((paginaPrev) => paginaPrev.concat(response.data))}
    obtenerfotos()
/*     console.log(fotos.map(foto=>(foto.urls.small))) */
/*       console.log(fotos) */
},[pagina]);
  return (
  <InfiniteScroll 
    dataLength={fotos.length} 
    hasMore={true} 
    next={() => setPagina ((paginaPrev) => paginaPrev + 1)}>
      <div className='container'>
        <div className='container-img'>
          {fotos.map(foto=>(
          <div key={foto.id}>
            <img src={foto.urls.small} alt=''/>
          </div>))}
        </div>
      </div>
  </InfiniteScroll>
  );
}



export default App;
