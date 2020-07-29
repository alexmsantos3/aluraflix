import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  // console.log('[nomeDaCategoria] = ', nomeDaCategoria);

  function setValue(chave, valor) {
    // chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  // function handleChange(infosDoEvento) {
  //   setValue(
  //     infosDoEvento.target.getAttribute('name'),
  //     infosDoEvento.target.value
  //   );
  // }  
  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form né?');
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input 
              type="text" 
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea 
              type="text" 
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input 
              type="color" 
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/"> 
        Ir para home
      </Link>
    </PageDefault>
  )
};

export default CadastroCategoria;