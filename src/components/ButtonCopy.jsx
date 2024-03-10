import React from 'react';

function ButtonCopy({ fraseCodificada }) {
  const copiarResultado = () => {
    // Lógica de cópia do resultado
    const resultado = fraseCodificada ;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado para a área de transferência!');
  };

  return (
    <button onClick={copiarResultado}>Copiar</button>
  );
}

export default ButtonCopy;