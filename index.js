const cliente1 = new Cliente();
cliente1.nome = "Fulano";
cliente1.cpf = 1232511515;

const cliente2 = new Cliente();
cliente2.nome = "Beltrano";
cliente2.cpf = 525452525;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(200);
console.log(contaCorrenteRicardo._saldo);

const valorSacado = contaCorrenteRicardo.sacar(30);
console.log(valorSacado);
console.log(contaCorrenteRicardo._saldo);