import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Buscador} from './components';

function App() {

  const [fotos,setFotos]=useState([])
  const [pagina,setPagina]=useState([1])

  useEffect(() => {
    const obtenerfotos=async ()=>{
      const response=await axios.get('https://api.unsplash.com/photos/?client_id=dyqKJjrsm1oZS_XJqTv8aoKa3-mz6pTdAADYWWpC2O4&per_page=9&page='+ pagina)
      setFotos((paginaPrev) => paginaPrev.concat(response.data))}
    obtenerfotos()
/*     console.log(fotos.map(foto=>(foto.urls.small))) */
       
},[pagina]);

  return (
  <InfiniteScroll 
    dataLength={fotos.length} 
    hasMore={true} 
    next={() => setPagina ((paginaPrev) => paginaPrev + 1)}>
      <div className='container'>
        <Buscador/>
        <div className='row'>
          {fotos.map(foto=>(
          <div key={foto.id} className="col-4">
            <img src={foto.urls.small} alt=''/>
          </div>
          ))}
        </div>
      </div>
  </InfiniteScroll>
  );
}



export default App;
