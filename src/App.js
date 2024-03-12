import React, { Component } from 'react';
import ButtonCod from './components/ButtonCod';
import ButtonDecod from './components/ButtonDecod';
import ButtonCopy from './components/ButtonCopy';
import ImgBusca from './img/busca.svg';
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
            <textarea
              value={fraseOriginal}
              onChange={(e) => this.setState({ fraseOriginal: e.target.value })}
              rows={4}
              cols={50}
              placeholder="Digite palavras com apenas letras minusculas"
            />
  
            <div className='buttonCod'>
              <ButtonCod
                fraseOriginal={fraseOriginal}
                setFraseCodificada={(novaFraseCodificada) => this.setState({ fraseCodificada: novaFraseCodificada })}
              />
              <ButtonDecod className='btnDec'
                fraseOriginal={fraseOriginal}
                setFraseDecodificada={(novaFraseDecodificada) => this.setState({ fraseDecodificada: novaFraseDecodificada })}
              />
            </div>
          </div> 
          <div className='Output'>
            <div className='outputText'>
              <div >
                {fraseCodificada || fraseDecodificada ? null : <img src={ImgBusca} alt="busca" />}
              </div>
              <div className='outpuTextArea'>
                <p>{fraseCodificada}</p>
                <p>{fraseDecodificada}</p>
              </div>
            </div>
            <ButtonCopy 
              fraseCodificada={fraseCodificada}
            />
          </div>
        </main> 
        <div className="buttonCopy">
         <button className='btnCopy' onClick={this.handleRefresh}>Reiniciar</button>
        </div>
        <footer className='footer'>
            Made in React with love
            <div id="heart"></div>
        </footer>
    </body>
    );
  }
}
