import React from 'react';

function ButtonDecod({ fraseOriginal, setFraseDecodificada }) {
  const decodificar = () => {
    let novaFraseDecodificada = '';
    let i = 0;
    while (i < fraseOriginal.length) {
      let matchFound = false;
      for (let j = fraseOriginal.length; j > 0; j--) {
        let substr = fraseOriginal.substr(i, j);
        switch (substr) {
          case 'xuxa':
            novaFraseDecodificada += 'a';
            i += j;
            matchFound = true;
            break;
          case 'lilica':
            novaFraseDecodificada += 'e';
            i += j;
            matchFound = true;
            break;
          case 'yuko':
            novaFraseDecodificada += 'i';
            i += j;
            matchFound = true;
            break;
          case 'camane':
            novaFraseDecodificada += 'o';
            i += j;
            matchFound = true;
            break;
          case 'xbacon':
            novaFraseDecodificada += 'u';
            i += j;
            matchFound = true;
            break;
          case '17':
            novaFraseDecodificada += ' ';
            i += j;
            matchFound = true;
            break;
          default:
            break;
        }
        if (matchFound) {
          break;
        }
      }
      if (!matchFound) {
        novaFraseDecodificada += fraseOriginal[i];
        i++;
      }
    }
    setFraseDecodificada(novaFraseDecodificada);
  };

  return (
    <button className='btnCod' onClick={decodificar}>Decodificar</button>
  );
}

export default ButtonDecod;
