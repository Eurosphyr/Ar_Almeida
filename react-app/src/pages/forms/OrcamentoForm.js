import { useState } from 'react';
import './styles_f/forms.css';
import axios from 'axios';

const OrcamentoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cnpj: '',
    cargo: '',
    email: '',
    telefone: '',
    produto: 'Lista',
    assunto: '',
    mensagem: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (file) {
      data.append('arquivo', file);
    }

    try {
      await axios.post('http://localhost:8080/orcamento', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Orçamento enviado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar o orçamento.');
    }
  };

  return (
    <div className="orcamento-container">
      <h2>Solicitar orçamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>Nome</label>
            <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
          </div>
          <div>
            <label>Empresa</label>
            <input type="text" name="empresa" onChange={handleChange} />
          </div>
          <div>
            <label>CNPJ</label>
            <input type="text" name="cnpj" placeholder="00.000.000/0001-00" onChange={handleChange} />
          </div>
          <div>
            <label>Cargo</label>
            <input type="text" name="cargo" onChange={handleChange} />
          </div>
          <div>
            <label>E-mail</label>
            <input type="email" name="email" placeholder="empresa@email.com" onChange={handleChange} />
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" name="telefone" onChange={handleChange} />
          </div>
          <div>
            <label>Produto</label>
            <select name="produto" onChange={handleChange}>
              <option value="Lista">Lista</option>
              <option value="Produto 1">Produto 1</option>
              <option value="Produto 2">Produto 2</option>
            </select>
          </div>
          <div>
            <label>Assunto</label>
            <input type="text" name="assunto" onChange={handleChange} />
          </div>
        </div>

        <label>Como podemos ajudar?</label>
        <textarea name="mensagem" onChange={handleChange} />

        <div className="file-upload">
          <label>
            Anexe o questionário técnico ou outros arquivos:
            <input type="file" onChange={handleFileChange} />
          </label>
        </div>

        <button type="submit" className="submit-button">➔ Enviar</button>
      </form>
    </div>
  );
};

export default OrcamentoForm;
