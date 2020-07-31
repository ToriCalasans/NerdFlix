import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function LikePagina() {
    return (
        <PageDefault>
            <h1> Obrigada por curtir nossa página.</h1>
            <Link to='/'>Voltar para home</Link>
        </PageDefault>
    )
}

export default LikePagina;