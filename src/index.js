import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Menu from './components/Menu';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio master blaster na descrição(pagina legal, com game talvez) 
const Pagina404 = () => (<div><Menu />Página 404</div>);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
    
    {/* <Switch>
      <Route path="cadCat" component={CadastroCategoria} />
    </Switch> */}

  </BrowserRouter>,
  
  document.getElementById('root')
);
