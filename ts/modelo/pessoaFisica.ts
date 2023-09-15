class PessoaFisica extends Pessoa {

    constructor( _name: string, _idade: number, _dataNasc: Date, private _cpf: string) {
        super(_name + '- física', _idade, _dataNasc);
        this._cpf = _cpf;
    }
    get cpf(): string{
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
}