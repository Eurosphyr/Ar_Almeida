import React from "react";
import './styles_d/dados.css';

const Dados = () => {
    return (
        <main>
            <div class="grid">
                <div class="div">
                    <h3>Informações Legais e Cadastrais</h3>
                    <ul>
                        <li><p>Razão Social: A.R. Almeida Manutenção e Serviços Ltda</p></li>
                        <li><p>CNPJ: 06.220.494/0001-04</p></li>
                        <li><p>CMC: 159.637</p></li>
                        <li><p>Fundação: 31/03/2004</p></li>
                    </ul>
                </div>
                <div class="div">
                    <h3>Contato</h3>
                    <ul>
                        <li><p>Telefone/Fax: (11) 4427-5941</p></li>
                        <li><p>Celular: (11) 99991-9729</p></li>
                        <li><p>E-mail: a.r.almeida@uol.com.br</p></li>
                    </ul>
                </div>
                <div class="div">
                    <h3>Endereço</h3>
                    <ul>
                        <li><p>Rua: Tupinambás, Nº 323</p></li>
                        <li><p>Bairro: Vila Alzira</p></li>
                        <li><p>Cidade: Santo André - SP</p></li>
                        <li><p>CEP: 09195-110</p></li>
                    </ul>
                </div>
                <div class="div">
                    <p>Referência bancária: Itaú - Ag. São Bernardo do Campo</p>
                </div>
            </div>
        </main>
    )
}
export default Dados