import React, { Component } from 'react';

class TurnoForm extends Component {

  constructor() {
    super();
    this.state = {
      fecha: '',
      hora: '',
      cliente: '',
      descripcion: ''
    };
    this.addTurno = this.addTurno.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTurno(e) {
    console.log(this.state);
    e.preventDefault();
    fetch('/turnos', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json',
      }
    }).then(res =>  res.json())
      .then(data => {
        console.log(data);
        M.toast({html: 'Turno Guardado'});
        this.setState({
          fecha: '',
          hora: '',
          cliente: '',
          descripcion: ''
        })
      }).then(alert('Turno Guardado')).catch(err => console.log(err));
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      
      <div >
      <h4 align="center" style={{marginTop: "10px"}}> ANADIR TURNO </h4>
        <div className="card-content"> 
          <div className="row">
          <form  className="input-field col s3" onSubmit={this.addTurno} align="center" >
           
            <input style={{width: "50%", padding: "7px", margin: "5px 2px 22px 2px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}} name="fecha" type="date"  onChange={this.handleChange} value={this.state.fecha} className="validate" />          
             <input style={{width: "50%", padding: "7px", margin: "5px 2px 22px 2px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}} name="hora" type="text" placeholder="Hora" onChange={this.handleChange} value={this.state.hora} className="validate"/>
                <input style={{width: "50%", padding: "7px", margin: "5px 2px 22px 2px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}} name="cliente" type="text" placeholder="Cliente" onChange={this.handleChange} value={this.state.cliente} className="validate"/>
                         <textarea style={{width: "50%", padding: "7px", margin: "5px 2px 22px 2px", display: "inline-block",
                                    border: "1px solid #55456b", background: "#f1f1f1"}} name="descripcion" placeholder="Agregue Aqui Una Descripcion Del Trabajo a Realizar" type="text" onChange={this.handleChange} value={this.state.descripcion} className="validate"/>
             
            <button type="Submit" style={{backgroundColor: "#4CAF50",color: "white", padding: "16px 20px", margin: "8px 0",
                          border: "1px solid #55456b", cursor: "pointer", width: "50%", opacity: "0.9"}}>Guardar</button>
          </form>
           </div>
        </div>
      </div>
    )
  }

}

export default TurnoForm;