export class Conta {
    constructor(agencia, cliente, saldoInicial) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        let valorSacado = taxa * valor;
        if (this._saldo > valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
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

    set cliente(valorNovo) {
        //essa condicao e para proteger os atributos, no caso ela só sera feita se for uma instancia da classe cliente.
        if (valorNovo instanceof Cliente) {
            this._cliente = valorNovo;
        }
    }
    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this._saldo;
    }
}