//Classe abstract -> Essa classe passa a ser abstract devido ela ser serve se for herdada pelo filhos e não instaciada. 
export class Conta {
    constructor(agencia, cliente, saldoInicial) {
        //com o throw ele lançara um erro no terminal caso tente instaciar essa classe Conta.
        if (this.constructor == Conta) {
            throw new Error('Você não deveria instaciar um objeto do tipo conta');
        }

        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    //metodo abstrato
    sacar() {
        throw new Error('Essa conta e abstratar, instaciar a conta');
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