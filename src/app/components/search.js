import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'


const KEY_TO_FIND = ['nombre', 'telefono', 'apellido']

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
      }
      render () {
        const filteredCliente = Clientes.filter(createFilter(this.state.searchTerm, KEY_TO_FIND))
     
        return (
          <div>
            <SearchInput className="search-input" onChange={this.searchUpdated} />
            {filteredCliente.map(Clientes => {
              return (
                <div className="mail" key={Clientes.id}>
                  <div className="from">{Clientes.user.name}</div>
                  <div className="subject">{Clientes.subject}</div>
                </div>
              )
            })}
          </div>
        )
      }
     
      searchUpdated (term) {
        this.setState({searchTerm: term})
      }
 }

 export default SearchBar