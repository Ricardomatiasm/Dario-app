import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-info" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link  font-weight-bold text-dark" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/verTurnos" className="nav-link  font-weight-bold text-dark" >Turnos</Link>
          </li>
          <li>
            <Link to="/verClientes"  className="nav-link font-weight-bold  text-dark">Clientes</Link>
          </li>
           <div style={{position: 'absolute', right: 0}} className="navbar-nav mr-auto">
          <li className="nav-item" style={{marginRight: 25, padding: "5.5px"}}> 
            <Link  to="/agregarClientes"><i className="material-icons text-dark" title="Nuevo Cliente" >contacts</i></Link>
          </li>
          <li className="nav-item" style={{marginRight: 50, padding: "6px"}}>
          <Link to="/agregarTurnos"  ><i className="material-icons text-dark" title="Nuevo Turno" >event</i></Link>
          </li>
            </div>
          </ul> 
      </nav>
    );
  }

}

export default Header;