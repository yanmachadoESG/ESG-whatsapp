const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const message = req.body.message?.toLowerCase() || "";
  let response;

  if (message.includes("1")) {
    response = "Você selecionou *Mudança / Remoção*. Por favor, envie seu postcode, data desejada e detalhes da mudança.";
  } else if (message.includes("2")) {
    response = "Você selecionou *Móveis / Storage*. Por favor, envie seu postcode, itens envolvidos e destino.";
  } else if (message.includes("3")) {
    response = "Você selecionou *Reciclagem*. Nos informe o tipo de material e sua localização.";
  } else if (message.includes("4")) {
    response = "Você selecionou *Doações*. Nos envie fotos ou descrição dos itens e o local de retirada.";
  } else if (message.includes("5")) {
    response = "Você selecionou *Táxi para Aeroporto*. Informe o horário do voo, endereço e número de passageiros.";
  } else if (message.includes("6")) {
    response = "Você selecionou *Transporte de Mala*. Quantas malas? Qual o destino e horário desejado?";
  } else if (message.includes("7")) {
    response = "Você selecionou *Aluguel de Quartos*. Deseja alugar ou anunciar? Nos envie detalhes.";
  } else if (message.includes("8")) {
    response = "Você selecionou *Uber Van*. Informe número de pessoas e localização.";
  } else if (message.includes("9")) {
    response = "Você selecionou *Eletrônicos*. Descreva o item e o endereço de retirada/entrega.";
  } else if (message.includes("10")) {
    response = "Você selecionou *Roupas e Acessórios*. Nos envie descrição ou fotos e seu postcode.";
  } else if (message.includes("11")) {
    response = "Você selecionou *Resgate de Motos*. Informe localização da moto, destino e situação.";
  } else if (message.includes("12")) {
    response = "Você selecionou *Fretes / IKEA*. Nos diga qual loja e o que precisa transportar.";
  } else {
    response = `Olá! Bem-vindo(a) à Easy Solution Group - ESG.\nEscolha o serviço desejado enviando apenas o número correspondente:\n\n1 - Mudança / Remoção\n2 - Móveis / Storage\n3 - Reciclagem\n4 - Doações\n5 - Táxi para Aeroporto\n6 - Transporte de Mala\n7 - Aluguel de Quartos\n8 - Uber Van\n9 - Eletrônicos\n10 - Roupas e Acessórios\n11 - Resgate de Motos\n12 - Fretes / IKEA\n\nEnvie também seu *postcode* para orçamento.`;
  }

  res.send({ reply: response });
});

app.listen(3000, () => {
  console.log('Webhook ativo na porta 3000');
});
