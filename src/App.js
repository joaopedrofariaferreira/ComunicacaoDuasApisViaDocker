import React, { useState } from 'react';
import './App.css';
import { saveUser } from './services/api';

function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await saveUser({ id, nome, telefone });
      setMessage('Usuário salvo com sucesso!');
      setId('');
      setNome('');
      setTelefone('');
    } catch (err) {
      console.error(err);
      setError('Falha ao salvar usuário.');
    }
  };

  return (
      <div className="App">
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
                id="telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
  );
}

export default App;
