import { Cliente } from "./cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(valorNovo) {
        //essa condicao e para proteger os atributos, no caso ela só sera feita se for uma instancia da classe cliente.
        if (valorNovo instanceof Cliente) {
            this._cliente = valorNovo;
        }
    }
    get cliente() {
        return this.cliente;
    }

    _saldo = 0;

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo > valor) {
            this._saldo -= valor;
            return valor;
        }
        else {
            console.log("Saque não permitido, saldo insuficiente.");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}