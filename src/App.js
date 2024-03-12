import React, { Component } from 'react';
import ButtonCod from './components/ButtonCod';
import ButtonDecod from './components/ButtonDecod';
import ButtonCopy from './components/ButtonCopy';
import ImgBusca from './img/busca.svg';
import github from './img/icons8-github-26.png';
import linkedin from './img/icons8-linkedin-26.png';
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
        <footer>
            <p>Made in React with love</p>
            <a href='https://github.com/Beto1821' >
              <img src={github} alt='github/Beto1821' />
            </a>
            <a href='https://www.linkedin.com/in/adalberto-ramos-ribeiro-344092107/' >
              <img src={linkedin} alt='linkedin' />
            </a>
        </footer>
    </body>
    );
  }
}
