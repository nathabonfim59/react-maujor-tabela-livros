import React from "react";
import TabelaHead from './componentes/TabelaHead';
import TabelaBody from './componentes/TabelaBody';
import TabelaFoot from './componentes/TabelaFoot';

function App() {
  return (
    <table className="tabela">
      <TabelaHead/>
      <TabelaBody/>
      <TabelaFoot/>
    </table>
  );
}

export default App;
