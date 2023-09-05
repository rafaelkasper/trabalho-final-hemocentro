/*===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====*/
function menu() {
  let opcao = Number(
    prompt(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`)
  );

  switch (opcao) {
    case 1:
      cadastrarDoador();
      break;
    case 2:
      listarDoadores();
      break;
    case 3:
      buscarTipoSangue();
      break;
    case 4:
      buscarPorData();
      break;
    case 5:
      // Sair
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

const arrayDoadores = [];

function cadastrarDoador() {
  nome = prompt("Qual é o seu nome?").toUpperCase();
  idade = prompt("Qual a sua idade?");
  peso = prompt("Qual é o seu peso?");
  tipoSanguineo = prompt("Qual é o seu tipo sanguineo?").toUpperCase();
  ultimaDoacao = prompt("Qual a data da sua última doacao? (dd/mm/aaaa)");

  const doador = {
    nome: nome,
    idade: idade,
    peso: peso,
    tipoSanguineo: tipoSanguineo,
    ultimaDoacao: ultimaDoacao,
  };

  arrayDoadores.push(doador);
  menu();
}

function listarDoadores() {
  if (arrayDoadores.length === 0) {
    alert("Nenhum doador cadastrado.");
    menu();
  } else {
    const listarDoadores = [];
    for (const doador of arrayDoadores) {
      const { nome, idade, peso, tipoSanguineo, ultimaDoacao } = doador;
      listarDoadores.push(
        `${nome.padEnd(18)}| ${idade.padEnd(9)}| ${peso.padEnd(
          8
        )}| ${tipoSanguineo.padEnd(28)}| ${ultimaDoacao}`
      );
    }

    let lista = `----------------------
    LISTAGEM DE DOADORES:
    ----------------------
    NOME             | IDADE | PESO | TIPO SANGUINEO | ÚLTIMA DOAÇÃO`;
    for (let doador of listarDoadores) {
      lista += `\n${doador}`;
    }
    const retornarDoadores = prompt(
      `
        ${lista}

    Digite qualquer tecla para continuar:`
    );
    if (retornarDoadores !== null) {
      menu();
    }
  }
}

function buscarTipoSangue() {
  const tipo = prompt("Digite o tipo sanguine desejado").toUpperCase();
  const doadoresDisponiveis = [];

  for (let i = 0; i < arrayDoadores.length; i++) {
    if (arrayDoadores[i].tipoSanguineo === tipo) {
      doadoresDisponiveis.push(
        `${arrayDoadores[i].nome.padEnd(18)}| ${arrayDoadores[i].idade.padEnd(
          9
        )}| ${arrayDoadores[i].peso.padEnd(8)}| ${arrayDoadores[
          i
        ].tipoSanguineo.padEnd(28)}| ${arrayDoadores[i].ultimaDoacao}`
      );
    }
  }
  if (doadoresDisponiveis.length > 0) {
    let lista = ` 
    ----------------------
    LISTAGEM DE DOADORES:
    ----------------------
    NOME             | IDADE | PESO | TIPO SANGUINEO | ÚLTIMA DOAÇÃO`;
    for (let doador of doadoresDisponiveis) {
      lista += `\n${doador}`;
    }
    const retornarDoadores = prompt(`
    ${lista}

    Digite qualquer tecla para continuar:`);
    if (retornarDoadores !== null) {
      menu();
    }
  } else {
    alert("Nenhum doador cadastrado.");
    menu();
  }
}

function buscarPorData() {
  const data = prompt("Digite a data desejada (dd/mm/aaaa)");

  const doadoresDisponiveis = [];

  for (i = 0; i < arrayDoadores.length; i++) {
    if (arrayDoadores[i].ultimaDoacao === data) {
      doadoresDisponiveis.push(
        `${arrayDoadores[i].nome.padEnd(18)}| ${arrayDoadores[i].idade.padEnd(
          9
        )}| ${arrayDoadores[i].peso.padEnd(8)}| ${arrayDoadores[
          i
        ].tipoSanguineo.padEnd(28)}| ${arrayDoadores[i].ultimaDoacao}`
      );
    }
  }
  if (doadoresDisponiveis.length > 0) {
    let lista = ` 
    ----------------------
    LISTAGEM DE DOADORES:
    ----------------------
    NOME             | IDADE | PESO | TIPO SANGUINEO | ÚLTIMA DOAÇÃO`;
    for (let doador of doadoresDisponiveis) {
      lista += `\n${doador}`;
    }
    const retornarDoadores = prompt(`
    ${lista}

    Digite qualquer tecla para continuar:`);
    if (retornarDoadores !== null) {
      menu();
    }
  } else {
    alert("Nenhum doador cadastrado.");
    menu();
  }
}

menu();
