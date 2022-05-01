import React, { Component } from "react";
import TabelaHead from './componentes/TabelaHead';
import TabelaBody from './componentes/TabelaBody';
import TabelaFoot from './componentes/TabelaFoot';
import "./index.css";

class App extends Component {
  state = {
    livros: [],
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response =>  response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na requisição");
      })
      .finally(function() {
        console.log("Sempre retorna");
      });
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter( livro => livro.id !== id);

    this.setState({ livros });
  }

  ordenar = ( ) => {
    return this.state.livros.sort( (a, b) => a.titulo < b.titulo ? -1 : 0);
  }

  handleOrdenarCrescente = (titulo) => {
    let livros = this.ordenar();

    this.setState({ livros });
  }

  handleOrdenarDecrescente = (titulo) => {
    let livros = this.ordenar();
    livros.reverse();

    this.setState({ livros });
  }

  render() {
    return (
      <table className="tabela">
        <TabelaHead
          ordenarCrescente={ this.handleOrdenarCrescente }
          ordenarDecrescente={ this.handleOrdenarDecrescente }
        />
        <TabelaBody
          livros={ this.state.livros }
          removerLinha={ this.handleRemoverLinha }
        />
        <TabelaFoot qtdeLivros={ this.state.livros.length } />
      </table>
    );
  }
}

export default App;
