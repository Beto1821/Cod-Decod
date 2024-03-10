import React, { Component } from 'react';
import ButtonCod from './components/ButtonCod';
import ButtonDecod from './components/ButtonDecod';
import ButtonCopy from './components/ButtonCopy';
import './App.css'; 

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
    <body>
      <header >Codificar e Decodificar Frases</header>
        <main className='App'>
          <div className="Input">
            <textarea className='TextArea'
              value={fraseOriginal}
              onChange={(e) => this.setState({ fraseOriginal: e.target.value })}
              rows={4}
              cols={50}
              placeholder="Digite a frase..."
            />
  
            <div className='botaoCod'>
              <ButtonCod
                fraseOriginal={fraseOriginal}
                setFraseCodificada={(novaFraseCodificada) => this.setState({ fraseCodificada: novaFraseCodificada })}
              />
              <ButtonDecod
                fraseOriginal={fraseOriginal}
                setFraseDecodificada={(novaFraseDecodificada) => this.setState({ fraseDecodificada: novaFraseDecodificada })}
              />
            </div>
          </div> 
          <div className='Output'>
            <div className='outputText'>
              <h3>Frase </h3>
              <p>{fraseCodificada}</p>
              <p>{fraseDecodificada}</p>
            </div>
            <ButtonCopy className='buttonCopy'
              fraseCodificada={fraseCodificada}
            />
          </div>
        </main>  
        <button className='reset' onClick={this.handleRefresh}>Reiniciar</button>
        <footer className='footer'>
            Made in React with love
        </footer>
    </body>
    );
  }
}
