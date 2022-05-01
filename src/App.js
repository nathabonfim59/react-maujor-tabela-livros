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

  render() {
    return (
      <table className="tabela">
        <TabelaHead/>
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
