import { Cliente } from "./cliente.js";
import { Gerente } from "./Funcionario/gerente.js";
import { Diretor } from "./Funcionario/diretor.js";
import { SistemaAutenticacao } from "./Funcionario/sistemaAutenticacao.js";


const gerente = new Gerente("Ricardo", 10000, "124141512");
gerente.cadastraSenha('123');

const diretor = new Diretor("Bill", 15000, "1115555325");
diretor.cadastraSenha('321');

const cliente = SistemaAutenticacao.login(diretor, "321");
console.log(gerente, diretor, cliente);









