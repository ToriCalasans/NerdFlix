import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function LikePagina() {


    return (
        <PageDefault>
        <div>
        <h1> Obrigada por curtir nossa página.</h1>
        <progress value="50" max="100" > Progresso em 50 %</progress>
        <h1>Nosso site ainda está em desenvolvimento mas em breve vai funcionar lindamente.</h1>

        
            <label> Avalie nosso trabalho
                <input
                    type = "range"
                    name = "nota"                
                    onChange = "onChange"
                    list = "tickmarks"
                />
            </label>
            
        </div>

        
            
            <form>

            </form>
            <Link to='/'>Voltar para home</Link>
        </PageDefault>
    )
}

export default LikePagina;