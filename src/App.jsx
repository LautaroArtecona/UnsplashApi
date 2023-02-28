import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [fotos,setFotos]=useState([])
  const [pagina,setPagina]=useState(1)
  const [busqueda,setBusqueda]=useState("")

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


         /*   BUSCADOR */
  const buscador = (e) => {
    setBusqueda(e.target.value)
  }
  const resultado= !busqueda ? fotosFiltradas : fotosFiltradas.filter((foto)=> 
  foto.description.toLowerCase().includes(busqueda.toLocaleLowerCase())
  || foto.user.location.toLowerCase().includes(busqueda.toLocaleLowerCase()))


  return (
    <div className='fondo'>
      <div className='container'>
        <div className='cont-busca'>
        <form action="" className='cont-buscador shadow p-3 mb-5 bg-body-tertiary rounded'>
          <input 
          value={busqueda} 
          type="text" 
          placeholder='Buscar' 
          className='buscador'
          onChange={buscador}/>
          <i className="bi bi-search lupa"></i>
        </form>
        </div> 
        <div className='row justify-content-around'>
          {/* fotosFiltradas && fotosFiltradas */resultado.map(foto=>(
          <div className='card col-sm-3 cont-tarj' key={foto.id} >
              <a href={foto.links.html} target='_blank'>
                <img src={foto.urls.small} className='card-img-top fotos' alt="foto"/>
              </a>
              <div className='card-body tarjeta'>
                <h6 className='card-title descrip'><strong>Descripcion:</strong> {fotos.description!=null ? fotos.description : foto.alt_description}</h6>
                <div>
                  <a href={foto.user.links.html} target='_blank' className='card-text username'>
                    <strong >Usuario:</strong> @{foto.user.username}
                  </a>
                  <p className='card-text location'><strong>Ubicacion:</strong> {foto.user.location}</p>
                </div>
              </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}



export default App;
