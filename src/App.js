import logo from './logo.svg';
import './App.css';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Cadastro from './componentes/cadastro';
import { useState } from 'react';

function App() {

  const [showModal, setShow] = useState(false);
  const[listImoveis, setImovel] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const salvarImovel = () => {
    var nome = document.getElementById('inputNome').value;
    var email = document.getElementById('inputEmail').value;
    var estado = document.getElementById('selEstado').value;
    var cidade = document.getElementById('selCidade').value;
    var lote = document.getElementById('inputLote').value;
    var quadra = document.getElementById('inputQuadra').value;
    var situacao = document.getElementById('selSituacao').value;

    if(nome == "" || email == "" || estado == "" || cidade == "" || lote == "" || quadra == "" || situacao == "") {
      alert("Preencha todos os campos");
      return;
    }

    setImovel(listImoveis.push({ nome: nome, email:email, estado:estado, cidade: cidade, lote: lote, quadra: quadra, situacao: situacao }))
    console.log(listImoveis)
    setShow(false);
  }

  const handleSubmit = () => {
    alert("teste")
  }

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "50px" }}>
        <Button variant="primary" onClick={handleShow}>
          Cadastrar imóvel
        </Button>
      </div>
      <Modal isOpen={showModal} onHide={handleClose} size="xl">
        <ModalHeader closeButton>
          Cadastrar imóvel
        </ModalHeader>
        <ModalBody>
          <form role="form">
              <div class="form-group">
                  <label for="inputNome">Nome <span class="validacaoCampo">*</span></label>
                  <input type="text" class="form-control" id="inputNome" required />
              </div>
              <div class="form-group">
                  <label for="inputEmail">E-mail <span class="validacaoCampo">*</span></label>
                  <input type="email" class="form-control" id="inputEmail" required />
              </div>
              <div class="form-group container">
                  <div class="row">
                      <div class="col">
                          <label for="selEstado">Estado <span class="validacaoCampo">*</span></label>
                          <select class="form-control" id="selEstado">
                              <option value="PR">PR</option>
                          </select>
                      </div>
                      <div class="col">
                          <label for="selCidade">Cidade <span class="validacaoCampo">*</span></label>
                          <select class="form-control" id="selCidade">
                              <option value="Londrina">Londrina</option>
                          </select>
                      </div>
                  </div>
              </div>
              <div class="form-group">
                  <label for="inputLote">Lote <span class="validacaoCampo">*</span></label>
                  <input type="email" class="form-control" id="inputLote" required/>
              </div>
              <div class="form-group">
                  <label for="inputQuadra">Quadra <span class="validacaoCampo">*</span></label>
                  <input type="email" class="form-control" id="inputQuadra" required/>
              </div>
              <div class="form-group">
                  <label for="selSituacao">Situação <span class="validacaoCampo">*</span></label>
                      <select class="form-control" id="selSituacao">
                          <option value="Em divida">Em divida</option>
                          <option value="Regular">Regular</option>
                      </select>
              </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button type="submit" color="success" onClick={salvarImovel}>
            Salvar
          </Button>
        </ModalFooter>
      </Modal>
      <h3 className="p-3 text-center">Imóveis já cadastrados:</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Estado</th>
                    <th>Cidade</th>
                    <th>Lote</th>
                    <th>Quadra</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                {listImoveis && listImoveis.map(item => {
                    <tr>
                        <td>{item.nome}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  );
}

export default App;
