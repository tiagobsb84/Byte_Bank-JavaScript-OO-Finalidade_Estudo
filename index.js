import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Fulano", 1232511515);
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1, 0);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(1024, cliente1, 50);
contaPoupanca.sacar(5);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
console.log("Números de Contas: " + ContaCorrente.numeroDeContas);






