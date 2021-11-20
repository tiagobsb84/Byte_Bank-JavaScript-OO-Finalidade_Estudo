import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Fulano", 1232511515);
console.log(cliente1);

const cliente2 = new Cliente("Beltrano", 525452525);
console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(102, cliente2);
contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);

console.log(contaCorrenteRicardo);

console.log(ContaCorrente.numeroDeContas);


