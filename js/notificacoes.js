import { notificacaoRelatorio } from './mock.js';
import { notificacaoPagamento } from './mock.js';
import { notificacaoEntrega } from './mock.js';

function preencherTabela() {
  const tabelaRelatorio = document.getElementById("notificacao-relatorio");
  tabelaRelatorio.innerHTML = ''; // Limpa o conteúdo existente

  notificacaoRelatorio.forEach((item) => {
    let row = `
      <tr>
        <td>${item.numero}</td>
        <td>${item.relatorio}</td>
        <td>${item.data}</td>
        <td class="text-${getStatusRelatorio(item.status)}">${item.status}</td>
        <td>
          <button class="btn btn-secondary btn-3pontos negrito" type="button">
            <img class="img-3pontos" src="../images/imagem-pagamentos/tres-pontos.png" alt="3 pontos">
          </button>
        </td>
      </tr>
    `;
    // Adiciona a linha na tabela
    tabelaRelatorio.innerHTML += row;
  });
}

// Função para retornar a classe CSS de acordo com o status
function getStatusRelatorio(status) {
  if (status === 'Concluído') {
    return 'success';
  } else if (status === 'Emitido') {
    return 'warning';
  }
  return 'secondary';
}

// Chama a função para preencher a tabela
preencherTabela();



function preencherTabelaPagamento() {
    const tabelaPagamento = document.getElementById("notificacao-pagamentos");
    tabelaPagamento.innerHTML = ''; // Limpa o conteúdo existente
  
    notificacaoPagamento.forEach((item) => {
      let row = `
        <tr>
          <td>${item.produto}</td>
          <td>R$ ${item.valor}</td>
          <td>${item.dataHora}</td>
          <td class="text-${getStatusPagamento(item.status)}">${item.status}</td>
          <td>
            <button class="btn btn-secondary btn-3pontos negrito" type="button">
              <img class="img-3pontos" src="../images/imagem-pagamentos/tres-pontos.png" alt="3 pontos">
            </button>
          </td>
        </tr>
      `;
      // Adiciona a linha na tabela
      tabelaPagamento.innerHTML += row;
    });
  }
  
  // Função para retornar a classe CSS de acordo com o status
  function getStatusPagamento(status) {
    if (status === 'Realizado') {
      return 'success';
    } else if (status === 'Estornado') {
      return 'danger';
    }
    return 'secondary';
  }
  
  // Chama a função para preencher a tabela
  preencherTabelaPagamento();

  
function preencherTabelaEntrega() {
    const tabelaEntrega = document.getElementById("notificacao-entregas");
    tabelaEntrega.innerHTML = ''; // Limpa o conteúdo existente
  
    notificacaoEntrega.forEach((item) => {
      let row = `
        <tr>
          <td>${item.numero}</td>
          <td>R$ ${item.endereco}</td>
          <td>${item.dataHora}</td>
          <td class="text-${getStatusEntrega(item.status)}">${item.status}</td>
          <td>
            <button class="btn btn-secondary btn-3pontos negrito" type="button">
              <img class="img-3pontos" src="../images/imagem-pagamentos/tres-pontos.png" alt="3 pontos">
            </button>
          </td>
        </tr>
      `;
      // Adiciona a linha na tabela
      tabelaEntrega.innerHTML += row;
    });
  }
  
  // Função para retornar a classe CSS de acordo com o status
  function getStatusEntrega(status) {
    if (status === 'Entrega Concluída') {
      return 'success';
    } else if (status === 'Entrega Cancelada') {
      return 'danger';
    } else if (status === 'Entrega a Caminho') {
      return 'primary';
    }
    return 'secondary';
  }
  
  // Chama a função para preencher a tabela
  preencherTabelaEntrega();