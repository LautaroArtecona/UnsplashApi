import './App.css';
import {useEffect, useState} from 'react'
import {Buscador} from './components';

function App() {

  const [fotos,setFotos]=useState([])
  const [pagina,setPagina]=useState(1)


  useEffect(() => {
    const obtenerfotos=async ()=>{
      try{
        const res=await fetch(`https://api.unsplash.com/photos/?client_id=dyqKJjrsm1oZS_XJqTv8aoKa3-mz6pTdAADYWWpC2O4&page=${pagina}`)
        const fotos=await res.json()
        setFotos(pre=>[...pre, ...fotos])
      }catch(error){
        console.log(error)
      }
    }
      obtenerfotos()
    },[pagina])

  useEffect(()=>{
    const handleScroll=(e)=> {
      const scrollHeight=e.target.documentElement.scrollHeight
      const currentHeight=e.target.documentElement.scrollTop + window.innerHeight
      if (currentHeight + 1 >= scrollHeight) {
        setPagina(pagina+5)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  }, [pagina])

    function fotosFilt(foto) {

    return foto.user.location!= null && foto.user.username!=null;
    
  }

  const fotosFiltradas= fotos.filter(fotosFilt)

  return (
      <div className='container'>
        <div className='cont-busca'>
          <Buscador/>
        </div> 
        <div className='row justify-content-around'>
          {fotosFiltradas && fotosFiltradas.map(foto=>(
          <div className='card col-sm-3 cont-tarj' key={foto.id} /* style="width: 18rem;" */ >
              <img src={foto.urls.small} className='card-img-top fotos' alt="" />
              <div className='card-body tarjeta'>
                <h5 className='card-title descrip'><strong>Descripcion:</strong> {fotos.description!=null ? fotos.description : foto.alt_description}</h5>
                <div>
                  <p className='card-text username'><strong>Usuario:</strong> {foto.user.username}</p>
                  <p className='card-text location'><strong>Ubicacion:</strong> {foto.user.location}</p>
                </div>
              </div>
          </div>))}
        </div>
      </div>
  );
}



export default App;
