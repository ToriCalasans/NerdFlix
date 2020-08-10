/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function LikePagina() {
  return (
    <PageDefault>
      <div>
        <h1> Obrigada por curtir nossa página.</h1>
        <progress value="50" max="100"> Progresso em 50 %</progress>
        <h1>Nosso site ainda está em desenvolvimento mas em breve vai funcionar lindamente.</h1>

        <label>
          {' '}
          Avalie nosso trabalho
          <input
            type="range"
            name="nota"
            onChange="onChange"
          />
        </label>
        <label>
          <input
            type="submit"
            name="enviar"
            value="Enviar"
          />
        </label>

      </div>

      <form />
      <Link to="/">Voltar para home</Link>
    </PageDefault>
  );
}

export default LikePagina;
