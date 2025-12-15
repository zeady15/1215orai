import { Routes, Route, NavLink } from "react-router-dom"
import { PostProducts } from "./pages/PostProduct"
import { GetProducts } from "./pages/GetProducts"
import { GetProductById } from "./pages/GetProductById"

import './App.css'

export const App = () => {

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
       <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Menü</NavLink>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} className={({isActive}) => 
            "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-safe2"></i>Products</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/posts'} className={({isActive}) => 
            "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-text-paragraph"></i>Posts</span>
            </NavLink>
          </li>
                    <li className="nav-item">
            <NavLink to={'/products'} className={({isActive}) => 
            "nav-link" + (isActive ? " active" : "")}>
            <span className="nav-link"><i className="bi bi-pencil-square"></i>ProductById</span>
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
      <h1>React Router Példa</h1>
      
        <Routes>
          <Route path="/" element={<GetProducts />} />
          <Route path="/posts" element={<PostProducts />} />
          <Route path="/products/:productId" element={<GetProductById />} />
          <Route path="*" element={<h2>404 - Nincs ilyen oldal!</h2>} />
        </Routes>
    </>
  )
}

export default App