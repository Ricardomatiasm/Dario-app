import React, { Component } from 'react';


class ClienteForm extends Component {

  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: '',
      cumpleaños: '',
      ocupacion: '',
      hobbie: '',
    };
    this.addCliente = this.addCliente.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
addCliente(e) {
  console.log(this.state);
  e.preventDefault();
  fetch('/clientes', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Accept': 'aplication/json',
      'Content-Type': 'application/json',
    }
  })
    .then(res =>  res.json())
    .then(data => {
      console.log(data);
      this.setState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        cumpleaños: '',
        ocupacion: '',
        hobbie: '',
      });
    }).then(alert('Cliente Guardado'))
    .catch(err => console.log(err));
  }

  render(){
    return(
  <div>
      <div>
        <h4 align="center" style={{marginTop: "10px"}}>AÑADIR CLIENTE</h4>
          <div className="row">
                        <form className="col s15" onSubmit={this.addCliente} align="center">
                        
                             <input name="nombre" onChange={this.handleChange}  value={this.state.nombre}
                                   placeholder="Nombre" id="nombre" type="text" className="validate" autoFocus 
                                   style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                                   />  
                            
                              <input name="apellido" onChange={this.handleChange}  value={this.state.apellido}
                               placeholder="Apellido" id="apellido" type="text" className="validate" autoFocus
                               style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                               /> 
                            
                                <input name="telefono" onChange={this.handleChange}  value={this.state.telefono}
                                 placeholder="Telefono" id="telefono" type="text" className="validate" autoFocus
                                 style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                                 /> 
                            
                               <input name="direccion" onChange={this.handleChange}  value={this.state.direccion}
                                placeholder="Direccion" id="direccion" type="text" className="validate" autoFocus
                                style={{width: "50%",padding: "7px", margin: "5px  15px  10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                                /> 
                            
                                <input name="cumpleaños" onChange={this.handleChange}  value={this.state.cumpleaños}
                                 placeholder="Cumpleaños" id="cumpleaños" type="text" className="validate" autoFocus
                                 style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                                 /> 
                            
                               <input name="ocupacion" onChange={this.handleChange}  value={this.state.ocupacion}
                                placeholder="Ocupacion" id="ocupacion" type="text" className="validate" autoFocus
                                style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                                /> 
                            
                            <input name="hobbie" onChange={this.handleChange}  value={this.state.hobbie}
                             placeholder="Hobbie" id="hobbie" type="text" className="validate" autoFocus
                             style={{width: "50%",padding: "7px", margin: "5px 15px 10px 15px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}}
                             /> 
                        
                        <button type="submit"
                        style={{backgroundColor: "#4CAF50",color: "white", padding: "16px 20px", margin: "8px 15px",
                          border: "1px solid #55456b", cursor: "pointer", width: "50%", opacity: "0.9"}}
                        >Guardar</button>
        
          </form>
        </div>
        </div>
  </div>
    )
  }
}

export default ClienteForm;