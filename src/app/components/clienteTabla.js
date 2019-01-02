import React, { Component } from 'react';
class ClienteTabla extends Component {

  constructor() {
    super();
      this.state = {
        clientes: [],
        
      };
      this.updateCliente = this.updateCliente.bind(this);
      this.deleteCliente = this.deleteCliente.bind(this);
  }

  deleteCliente(id) {
   if(confirm('¿Esta seguro querer eliminar el Cliente?')){
    fetch(`/clientes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchCliente();
        });
  }
}
  updateCliente(id) {
    fetch(`/clientes/${id}`)
      .then(res =>  res.json())
      .then(data => {
        console.log(data);
        this.setState({
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        direccion: data.direccion,
        cumpleaños: data.cumpleaños,
        ocupacion: data.ocupacion,
        hobbie: data.hobbie,
        _id:data._id,
        });
      });

  }

  componentDidMount() {
    this.fetchCliente();
  }
  fetchCliente() {
    fetch('/clientes')
      .then(res => res.json())
        .then(data => {
          this.setState({clientes: data});
          console.log(this.state.clientes);
        });
  }




render() {
  return(
    <div className=""  style={{width: 830, marginLeft:130, background: "#ffffff"}} >
      <div className="table-responsive" >
        <table className="table table-light">
            <thead className="thead-light">
              <tr>
                <th className=" ">Nombre</th>
                <th className=" ">Apellido</th>
                <th className=" ">Telefono</th>
                <th className=" ">Direccion</th>
                <th className=" ">Cumpleaños</th>
                <th className=" ">Ocupacion</th>
                <th className=" ">Hobbie</th>
                <th className=" ">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-striped">
              {
                this.state.clientes.map(cliente => {
                    return (
                      <tr key={cliente._id}>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.cumpleaños}</td>
                        <td>{cliente.ocupacion}</td>
                        <td>{cliente.hobbie}</td>
                        <td> <button className="btn red darken-4" style={{margin: '2px'}} title="Eliminar" onClick={() => this.deleteCliente(cliente._id)} ><i className="material-icons">delete</i></button>
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
        </table>

      </div>
    </div>
  )
}




}

export default ClienteTabla;