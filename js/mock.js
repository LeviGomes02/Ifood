// Dashboard
export const dadosTabela = [
  { id: "#876364", quantidade: 3, valor: "R$158,24", status: "Pendente" },
  { id: "#876368", quantidade: 5, valor: "R$234,20", status: "Pendente" },
  { id: "#876612", quantidade: 1, valor: "R$87,90", status: "Concluído" },
  { id: "#876621", quantidade: 2, valor: "R$179,90", status: "Cancelado"},
  { id: "#876724", quantidade: 5, valor: "R$245,50", status: "Concluído"},
  { id: "#876588", quantidade: 3, valor: "R$184,40", status: "Concluído"},
  { id: "#871262", quantidade: 8, valor: "R$457,20", status: "Concluído"},
  { id: "#876954", quantidade: 5, valor: "R$264,90", status: "Concluído"},
  { id: "#876632", quantidade: 2, valor: "R$129,94", status: "Concluído"},
  { id: "#875678", quantidade: 1, valor: "R$90,20", status: "Concluído"},
  { id: "#871262", quantidade: 2, valor: "R$135,50", status: "Cancelado"}
];

export const dadosCards = [
  { title: "Dinheiro em Caixa", value: "R$ 162.532,64" },
  { title: "Disponível para Saque", value: "R$ 142.865,23" },
  { title: "Aguardando Liberação", value: "R$ 19.667,41" },
  { title: "Estornos e Cancelamentos", value: "R$ 835,10" },
  { title: "Vendas", value: "R$ 57.731,46", percentage: "+24%", percentageClass: "text-success" },
  { title: "Faturamentos", value: "R$ 37.235,23", percentage: "+17%", percentageClass: "text-success" },
  { title: "Despesas", value: "R$ 20.496,23", percentage: "-11%", percentageClass: "text-danger" },
  { title: "Ticket Médio Pedido", value: "R$ 146.52", percentage: "+14%", percentageClass: "text-success" }
];

export const produtosMaisPedidos = [
    {
        nome: "Bourbon BBQ Deluxe",
        imagem: "./images/imagem-dashboard/hamburger.png",
        descricaoImagem: "Um grande hambúrger com duas carnes dentro",
        estrela2: '<i class="bi bi-star-fill"></i>',
        estrela1: '<i class="bi bi-star-fill"></i>',
        estrela3: '<i class="bi bi-star-fill"></i>',
        estrela4: '<i class="bi bi-star-fill"></i>',
        estrela5: '<i class="bi bi-star-fill"></i>',
        unidadesVendidas: 2472,
        preco: "R$ 29,90"
    },
    {
        nome: "Chocolate Heaven",
        imagem: "./images/imagem-dashboard/milkshake.png",
        descricaoImagem: "Um copo de vidro com milkshake de chocolate",
        estrela2: '<i class="bi bi-star-fill"></i>',
        estrela1: '<i class="bi bi-star-fill"></i>',
        estrela3: '<i class="bi bi-star-fill"></i>',
        estrela4: '<i class="bi bi-star-fill"></i>',
        estrela5: '<i class="bi bi-star-fill"></i>',
        unidadesVendidas: 2151,
        preco: "R$ 19,90"
    },
    {
        nome: "King Mont Bacon",
        imagem: "./images/imagem-dashboard/x-bacon.png",
        descricaoImagem: "Um grande hambúrguer de bacon",
        estrela2: '<i class="bi bi-star-fill"></i>',
        estrela1: '<i class="bi bi-star-fill"></i>',
        estrela3: '<i class="bi bi-star-fill"></i>',
        estrela4: '<i class="bi bi-star-fill"></i>',
        estrela5: '<i class="bi bi-star-half"></i>',
        unidadesVendidas: 1436,
        preco: "R$ 24,90"
    },
    {
        nome: "Batatas Apimentadas",
        imagem: "./images/imagem-dashboard/batatas.png",
        descricaoImagem: "Uma porção de batatas fritas",
        estrela2: '<i class="bi bi-star-fill"></i>',
        estrela1: '<i class="bi bi-star-fill"></i>',
        estrela3: '<i class="bi bi-star-fill"></i>',
        estrela4: '<i class="bi bi-star-fill"></i>',
        estrela5: '<i class="bi bi-star"></i>',
        unidadesVendidas: 1291,
        preco: "R$ 14,90"
    }
];

// Pagamentos
export const pagamentos = [
    {
      transacao: '#876364',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 2.423,35',
      data: '15/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#876234',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/Itau-logo-0BE09A6D22-seeklogo.com.png" class="banco-icon" alt=""> 01959059-1',
      valor: 'R$ 6.346,35',
      data: '14/06/2024',
      status: 'Pendente'
    },
    {
      transacao: '#876164',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 523,99',
      data: '12/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#876012',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 1.140,00',
      data: '12/06/2024',
      status: 'Cancelada'
    },
    {
      transacao: '#871536',
      tipo: 'Transferência',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 650,00',
      data: '10/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#871233',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 157,65',
      data: '9/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#870235',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 800,00',
      data: '7/06/2024',
      status: 'Pendente'
    },
    {
      transacao: '#869534',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/Itau-logo-0BE09A6D22-seeklogo.com.png" class="banco-icon" alt=""> 01959059-1',
      valor: 'R$ 120,50',
      data: '6/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#867453',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/Itau-logo-0BE09A6D22-seeklogo.com.png" class="banco-icon" alt=""> 01959059-1',
      valor: 'R$ 50,00',
      data: '3/06/2024',
      status: 'Concluída'
    },
    {
      transacao: '#867143',
      tipo: 'Saque',
      conta: '<img src="../images/imagem-pagamentos/nubank-95.png" class="banco-icon" alt=""> 60078144-9',
      valor: 'R$ 1.200,00',
      data: '1/06/2024',
      status: 'Cancelada'
    }
    
  ];

export const cardsPagamentos = [
    { descricao: "Dinheiro em Caixa", valor: "R$ 162.532,64" },
    { descricao: "Disponível para Saque", valor: "R$ 142.865,23" },
    { descricao: "Aguardando Liberação", valor: "R$ 19.667,41" },
    { descricao: "Estornos", valor: "R$ 835,10" }
];

// Relatórios
  export const dadosRelatorios = [
     // Pedidos
     { id: 1, tipo: 'pedidos', data1: '2024-01-03', data2: '2024-01-04', hora1: '10:00', hora2: '12:00', detalhes: 'Pedidos - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 2, tipo: 'pedidos', data1: '2024-02-05', data2: '2024-02-10', hora1: '09:00', hora2: '10:30', detalhes: 'Pedidos - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 3, tipo: 'pedidos', data1: '2024-03-07', data2: '2024-03-09', hora1: '11:30', hora2: '14:00', detalhes: 'Pedidos - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 4, tipo: 'pedidos', data1: '2024-04-01', data2: '2024-04-05', hora1: '13:00', hora2: '15:00', detalhes: 'Pedidos - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 5, tipo: 'pedidos', data1: '2024-05-12', data2: '2024-05-15', hora1: '08:00', hora2: '09:45', detalhes: 'Pedidos - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 6, tipo: 'pedidos', data1: '2024-06-03', data2: '2024-06-09', hora1: '16:00', hora2: '17:30', detalhes: 'Pedidos - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 7, tipo: 'pedidos', data1: '2024-07-07', data2: '2024-07-10', hora1: '11:15', hora2: '13:00', detalhes: 'Pedidos - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 8, tipo: 'pedidos', data1: '2024-08-05', data2: '2024-08-09', hora1: '14:45', hora2: '16:30', detalhes: 'Pedidos - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 9, tipo: 'pedidos', data1: '2024-09-01', data2: '2024-09-06', hora1: '18:30', hora2: '20:00', detalhes: 'Pedidos - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 10, tipo: 'pedidos', data1: '2024-10-02', data2: '2024-10-07', hora1: '14:45', hora2: '16:00', detalhes: 'Pedidos - Outubro', visualizacao: '' },
 
     // Pagamentos
     { id: 11, tipo: 'pagamentos', data1: '2024-01-10', data2: '2024-01-10', hora1: '09:00', hora2: '11:30', detalhes: 'Pagamentos - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 12, tipo: 'pagamentos', data1: '2024-02-04', data2: '2024-02-04', hora1: '10:00', hora2: '12:15', detalhes: 'Pagamentos - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 13, tipo: 'pagamentos', data1: '2024-03-11', data2: '2024-03-11', hora1: '08:30', hora2: '10:45', detalhes: 'Pagamentos - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 14, tipo: 'pagamentos', data1: '2024-04-15', data2: '2024-04-15', hora1: '15:00', hora2: '17:00', detalhes: 'Pagamentos - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 15, tipo: 'pagamentos', data1: '2024-05-07', data2: '2024-05-07', hora1: '09:15', hora2: '11:45', detalhes: 'Pagamentos - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 16, tipo: 'pagamentos', data1: '2024-06-09', data2: '2024-06-09', hora1: '13:30', hora2: '15:15', detalhes: 'Pagamentos - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 17, tipo: 'pagamentos', data1: '2024-07-12', data2: '2024-07-12', hora1: '11:45', hora2: '13:15', detalhes: 'Pagamentos - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 18, tipo: 'pagamentos', data1: '2024-08-14', data2: '2024-08-14', hora1: '14:00', hora2: '16:00', detalhes: 'Pagamentos - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 19, tipo: 'pagamentos', data1: '2024-09-02', data2: '2024-09-02', hora1: '18:30', hora2: '20:00', detalhes: 'Pagamentos - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 20, tipo: 'pagamentos', data1: '2024-10-05', data2: '2024-10-05', hora1: '10:15', hora2: '12:45', detalhes: 'Pagamentos - Outubro', visualizacao: '(Este relatório já foi visualizado.)' },

      // Entregas
     { id: 21, tipo: 'entregas', data1: '2024-01-15', data2: '2024-01-15', hora1: '08:00', hora2: '10:00', detalhes: 'Entregas - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 22, tipo: 'entregas', data1: '2024-02-11', data2: '2024-02-11', hora1: '09:30', hora2: '11:45', detalhes: 'Entregas - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 23, tipo: 'entregas', data1: '2024-03-08', data2: '2024-03-08', hora1: '07:00', hora2: '09:00', detalhes: 'Entregas - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 24, tipo: 'entregas', data1: '2024-04-14', data2: '2024-04-14', hora1: '12:00', hora2: '14:30', detalhes: 'Entregas - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 25, tipo: 'entregas', data1: '2024-05-20', data2: '2024-05-20', hora1: '10:15', hora2: '12:45', detalhes: 'Entregas - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 26, tipo: 'entregas', data1: '2024-06-23', data2: '2024-06-23', hora1: '08:45', hora2: '11:00', detalhes: 'Entregas - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 27, tipo: 'entregas', data1: '2024-07-17', data2: '2024-07-17', hora1: '14:00', hora2: '16:15', detalhes: 'Entregas - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 28, tipo: 'entregas', data1: '2024-08-29', data2: '2024-08-29', hora1: '09:30', hora2: '11:45', detalhes: 'Entregas - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 29, tipo: 'entregas', data1: '2024-09-03', data2: '2024-09-03', hora1: '11:12', hora2: '15:40', detalhes: 'Entregas - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 30, tipo: 'entregas', data1: '2024-10-07', data2: '2024-10-07', hora1: '16:00', hora2: '18:30', detalhes: 'Entregas - Outubro', visualizacao: '(Este relatório já foi visualizado.)' },

     // Despesas
     { id: 31, tipo: 'despesas', data1: '2024-01-22', data2: '2024-01-22', hora1: '15:00', hora2: '17:45', detalhes: 'Despesas - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 32, tipo: 'despesas', data1: '2024-02-09', data2: '2024-02-09', hora1: '13:15', hora2: '15:45', detalhes: 'Despesas - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 33, tipo: 'despesas', data1: '2024-03-14', data2: '2024-03-14', hora1: '10:00', hora2: '12:30', detalhes: 'Despesas - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 34, tipo: 'despesas', data1: '2024-04-07', data2: '2024-04-07', hora1: '09:30', hora2: '12:00', detalhes: 'Despesas - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 35, tipo: 'despesas', data1: '2024-05-05', data2: '2024-05-05', hora1: '14:00', hora2: '16:15', detalhes: 'Despesas - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 36, tipo: 'despesas', data1: '2024-06-09', data2: '2024-06-09', hora1: '11:30', hora2: '13:45', detalhes: 'Despesas - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 37, tipo: 'despesas', data1: '2024-07-12', data2: '2024-07-12', hora1: '15:00', hora2: '17:30', detalhes: 'Despesas - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 38, tipo: 'despesas', data1: '2024-08-16', data2: '2024-08-16', hora1: '12:45', hora2: '15:15', detalhes: 'Despesas - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 39, tipo: 'despesas', data1: '2024-09-18', data2: '2024-09-18', hora1: '10:15', hora2: '12:45', detalhes: 'Despesas - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 40, tipo: 'despesas', data1: '2024-10-23', data2: '2024-10-23', hora1: '14:30', hora2: '16:45', detalhes: 'Despesas - Outubro', visualizacao: '(Este relatório já foi visualizado.)' },

      // Pedidos x Entregas
     { id: 41, tipo: 'pedidos-x-entregas', data1: '2024-01-10', data2: '2024-01-17', hora1: '08:30', hora2: '09:45', detalhes: 'Pedidos x Entregas - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 42, tipo: 'pedidos-x-entregas', data1: '2024-02-07', data2: '2024-02-14', hora1: '09:15', hora2: '10:30', detalhes: 'Pedidos x Entregas - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 43, tipo: 'pedidos-x-entregas', data1: '2024-03-05', data2: '2024-03-12', hora1: '11:00', hora2: '12:45', detalhes: 'Pedidos x Entregas - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 44, tipo: 'pedidos-x-entregas', data1: '2024-04-12', data2: '2024-04-19', hora1: '14:00', hora2: '15:30', detalhes: 'Pedidos x Entregas - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 45, tipo: 'pedidos-x-entregas', data1: '2024-05-17', data2: '2024-05-24', hora1: '08:45', hora2: '10:15', detalhes: 'Pedidos x Entregas - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 46, tipo: 'pedidos-x-entregas', data1: '2024-06-11', data2: '2024-06-18', hora1: '13:30', hora2: '15:00', detalhes: 'Pedidos x Entregas - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 47, tipo: 'pedidos-x-entregas', data1: '2024-07-14', data2: '2024-07-21', hora1: '11:00', hora2: '12:30', detalhes: 'Pedidos x Entregas - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 48, tipo: 'pedidos-x-entregas', data1: '2024-08-09', data2: '2024-08-16', hora1: '15:15', hora2: '16:45', detalhes: 'Pedidos x Entregas - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 49, tipo: 'pedidos-x-entregas', data1: '2024-09-10', data2: '2024-09-17', hora1: '08:19', hora2: '09:20', detalhes: 'Pedidos x Entregas - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 50, tipo: 'pedidos-x-entregas', data1: '2024-10-05', data2: '2024-10-12', hora1: '09:30', hora2: '11:00', detalhes: 'Pedidos x Entregas - Outubro', visualizacao: '(Este relatório já foi visualizado.)' },

     // Pedidos x Pagamentos
     { id: 51, tipo: 'pedidos-x-pagamentos', data1: '2024-01-08', data2: '2024-01-15', hora1: '16:00', hora2: '17:15', detalhes: 'Pedidos x Pagamentos - Janeiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 52, tipo: 'pedidos-x-pagamentos', data1: '2024-02-03', data2: '2024-02-10', hora1: '10:15', hora2: '11:45', detalhes: 'Pedidos x Pagamentos - Fevereiro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 53, tipo: 'pedidos-x-pagamentos', data1: '2024-03-12', data2: '2024-03-19', hora1: '13:00', hora2: '14:30', detalhes: 'Pedidos x Pagamentos - Março', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 54, tipo: 'pedidos-x-pagamentos', data1: '2024-04-09', data2: '2024-04-16', hora1: '15:30', hora2: '17:00', detalhes: 'Pedidos x Pagamentos - Abril', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 55, tipo: 'pedidos-x-pagamentos', data1: '2024-05-19', data2: '2024-05-26', hora1: '09:00', hora2: '10:30', detalhes: 'Pedidos x Pagamentos - Maio', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 56, tipo: 'pedidos-x-pagamentos', data1: '2024-06-21', data2: '2024-06-28', hora1: '14:45', hora2: '16:15', detalhes: 'Pedidos x Pagamentos - Junho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 57, tipo: 'pedidos-x-pagamentos', data1: '2024-07-25', data2: '2024-08-01', hora1: '11:30', hora2: '13:00', detalhes: 'Pedidos x Pagamentos - Julho', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 58, tipo: 'pedidos-x-pagamentos', data1: '2024-08-18', data2: '2024-08-25', hora1: '16:30', hora2: '18:00', detalhes: 'Pedidos x Pagamentos - Agosto', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 59, tipo: 'pedidos-x-pagamentos', data1: '2024-09-10', data2: '2024-09-17', hora1: '18:49', hora2: '19:24', detalhes: 'Pedidos x Pagamentos - Setembro', visualizacao: '(Este relatório já foi visualizado.)' },
     { id: 60, tipo: 'pedidos-x-pagamentos', data1: '2024-10-06', data2: '2024-10-13', hora1: '12:15', hora2: '13:45', detalhes: 'Pedidos x Pagamentos - Outubro', visualizacao: '(Este relatório já foi visualizado.)' }

];

// Produtos 
export const produtos = [
  { id: 1, nome: "Nome 1", avaliacao: 4, pedidos: 25, status: "Ativo" },
  { id: 2, nome: "Nome 2", avaliacao: 3, pedidos: 40, status: "Inativo" },
  { id: 3, nome: "Nome 3", avaliacao: 5, pedidos: 10, status: "Ativo" },
  { id: 4, nome: "Nome 4", avaliacao: 2, pedidos: 55, status: "Inativo" },
  { id: 5, nome: "Nome 5", avaliacao: 1, pedidos: 70, status: "Ativo" }
];