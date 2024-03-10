import React, { Component } from 'react';
import ButtonCod from './components/ButtonCod';
import ButtonDecod from './components/ButtonDecod';
import ButtonCopy from './components/ButtonCopy';

export default class App extends Component {
  state = {
    fraseOriginal: '',
    fraseCodificada: '',
    fraseDecodificada: ''
  };

  handleRefresh = () => {
    window.location.reload();
  }

  render() {
    const { fraseOriginal, fraseCodificada, fraseDecodificada } = this.state;
    return (
      <div className="App">
        <h1>Codificar e Decodificar Frases</h1>
        <textarea
          value={fraseOriginal}
          onChange={(e) => this.setState({ fraseOriginal: e.target.value })}
          rows={4}
          cols={50}
          placeholder="Digite a frase..."
        />
        <ButtonCod
          fraseOriginal={fraseOriginal}
          setFraseCodificada={(novaFraseCodificada) => this.setState({ fraseCodificada: novaFraseCodificada })}
        />
        <ButtonDecod
          fraseOriginal={fraseOriginal}
          setFraseDecodificada={(novaFraseDecodificada) => this.setState({ fraseDecodificada: novaFraseDecodificada })}
        />
        <div>
          <h3>Frase :</h3>
          <p>{fraseCodificada}</p>
          <p>{fraseDecodificada}</p>
        </div>
        <ButtonCopy
          fraseCodificada={fraseCodificada}
        />
        <button onClick={this.handleRefresh}>Reiniciar</button>
      </div>
    );
  }
}
