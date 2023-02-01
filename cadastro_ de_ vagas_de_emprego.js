const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    //1. nome, . x de candidatos
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga: ");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga: "
  );

  const confirmacao = confirm(
    " Deseja criar  uma nova vaga com essas informações?\n" +
      "nome: " +
      nome +
      "\n Descrição: " +
      descricao +
      "\n Data limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("vaga criada. ");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir: ");
  const vaga = vagas[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidatos
  ) {
    return textoFinal + "\n - " + candidatos;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\n Quantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Iforme o nome do candidato(a): ");
  const indice = prompt(
    "Informe o  índice da vaga para a qual o(a) candidato(a) deseja se inscrever: "
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever  o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Incrição realizada. ");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego " +
      "\n\n Escolha uma das opções: " +
      "\n1. Listar vagas disponíveis " +
      "\n2. Criar uma nova vaga " +
      "\n3. Visualizar uma vaga " +
      "\n4. Increver um(a) candidato(a) " +
      "\n5. Excluir uma vaga " +
      "\n6. Sair "
  );
  return opcao;
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção invalida!");
        break;
    }
  } while (opcao !== "6");
}

executar();
