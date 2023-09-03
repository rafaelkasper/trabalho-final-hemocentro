const doadores = [];

const cadastrarDoador = () => {
  const nome = prompt("Qual é o seu nome?");
  const idade = prompt("Qual é a sua idade?");
  const peso = prompt("Qual é o seu peso?");
  const tipo = prompt("Qual é o seu Tipo sanguíneo?");
  const data = prompt("Qual é a data da sua última doação de sangue?");

  const doador = { nome, idade, peso, tipo, data };
  doadores.push(doador);
  console.log(doadores);
  menuPrincipal();
};

const listarDoadores = () => {
  console.log("------------------------------");
  console.log("LISTAGEM DE DOADORES:");
  console.log("------------------------------");
  console.log(
    "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO"
  );
  console.log(
    "-----------------------------------------------------------------"
  );

  for (const doador of doadores) {
    const { nome, idade, peso, tipoSanguineo, ultimaDoacao } = doador;
    console.log(
      `${nome.padEnd(17)} | ${idade.toString().padStart(5)} | ${peso
        .toString()
        .padStart(4)} | ${tipoSanguineo.padEnd(15)} | ${ultimaDoacao}`
    );
  }

  console.log(
    "-----------------------------------------------------------------"
  );
  menuPrincipal();
};

const buscarDoadoresTipo = () => {
  const tipo = prompt("Digite o tipo sanguíneo desejado:");
  const lista = doadores.filter(
    (d) => d.tipo.toLowerCase() === tipo.toLowerCase()
  );

  console.log("------------------------------");
  console.log("LISTAGEM DE DOADORES:");
  console.log("------------------------------");
  console.log(
    "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO"
  );
  console.log(
    "-----------------------------------------------------------------"
  );

  for (const doador of lista) {
    const { nome, idade, peso, tipoSanguineo, ultimaDoacao } = doador;
    console.log(
      `${nome.padEnd(17)} | ${idade.toString().padStart(5)} | ${peso
        .toString()
        .padStart(4)} | ${tipoSanguineo.padEnd(15)} | ${ultimaDoacao}`
    );
  }

  console.log(
    "-----------------------------------------------------------------"
  );
  menuPrincipal();
};

const buscarDoadoresData = () => {
  const data = prompt("Digite a data desejada (dd/mm/aaaa):");

  const lista = doadores.filter((d) => d.data === data);
  console.log("------------------------------");
  console.log("LISTAGEM DE DOADORES:");
  console.log("------------------------------");
  console.log(
    "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO"
  );
  console.log(
    "-----------------------------------------------------------------"
  );

  for (const doador of lista) {
    const { nome, idade, peso, tipoSanguineo, ultimaDoacao } = doador;
    console.log(
      `${nome.padEnd(17)} | ${idade.toString().padStart(5)} | ${peso
        .toString()
        .padStart(4)} | ${tipoSanguineo.padEnd(15)} | ${ultimaDoacao}`
    );
  }

  console.log(
    "-----------------------------------------------------------------"
  );
  menuPrincipal();
};

const sair = () => {
  console.log("Saindo do sistema ...");
};

const menuPrincipal = () => {
  const menu =
    "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== \n\n 1. Cadastrar doador \n 2. Listar doadores \n 3. Buscar doador por tipo sanguíneo \n 4. Buscar doador por data da última doação \n 5. Sair Escolha uma opção:\n\n";

  const acao = Number(prompt(menu));

  switch (acao) {
    case 1:
      //Cadastrar doador
      cadastrarDoador();
      break;
    case 2:
      //Listar doadores
      listarDoadores();
      break;
    case 3:
      //Buscar doador por tipo sanguíneo
      buscarDoadoresTipo();
      break;
    case 4:
      //Buscar doador por data da última doação
      buscarDoadoresData();
    case 5:
      // Sair
      sair();
      break;
    default:
      cadastrarDoador();
      break;
  }
};

menuPrincipal();
