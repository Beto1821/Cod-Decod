import React from 'react';

function ButtonCod({ fraseOriginal, setFraseCodificada }) {
  const codificar = () => {
    let novaFraseCodificada = '';
    for (let i = 0; i < fraseOriginal.length; i++) {
      let char = fraseOriginal[i];
      switch (char) {
        case 'a':
          novaFraseCodificada += 'xuxa';
          break;
        case 'e':
          novaFraseCodificada += 'lilica';
          break;
        case 'i':
          novaFraseCodificada += 'yuko';
          break;
        case 'o':
          novaFraseCodificada += 'camane';
          break;
        case 'u':
          novaFraseCodificada += 'xbacon';
          break;
        case ' ':
          novaFraseCodificada += '17';
          break;
        default:
          novaFraseCodificada += char;
      }
    }
    setFraseCodificada(novaFraseCodificada);
  };

  return (
    <button className='btnCod' onClick={codificar}>Codificar</button>
  );
}

export default ButtonCod;
