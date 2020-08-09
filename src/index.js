/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import LikePagina from './pages/Like';

const Pagina404 = () => (
    <div>
        erro 404
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component= {CadastroVideo} />
            <Route path="/cadastro/categoria" component= {CadastroCategoria} />
            <Route path="/like" component= {LikePagina} />
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);