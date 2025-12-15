import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const ListaKomponens = ({ elem }) => (

  <div>
     <div className="card" style={{width:"400px"}} >
  <div className="card-body">
    <h4 className="card-title">{elem.id}<br />
    {elem.name}<br />
    {elem.price}<br />
    <Link to={"/"}><i class="bi bi-backspace">Vissza</i></Link>
    </h4>
  </div>
</div>
      
    
    </div>
);
export const GetProduct=()=> {
  const [adat, setAdat] = useState([]);
  const { ProductId } = useParams();
  useEffect(() => {
    fetch('http://localhost:5198/api/Products/' + ProductId)
    .then((res) => (res.ok? res.json() : []))
    .then((tartalom) => setAdat(tartalom));
  }, [ProductId])

  return (
    
      <div className="row m-5 p-5 border">
        <ListaKomponens elem={adat} />
      </div>
  )
}