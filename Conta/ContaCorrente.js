import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
        ContaCorrente.numeroDeContas += 1;
    }

    //Ele esta sobre escrevendo o comportamento do metodo sacar.
    sacar(valor) {
        const taxa = 1.1;

        return this._sacar(valor, taxa);
    }
}