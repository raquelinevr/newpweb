class PessoaJuridica extends Pessoa {

    constructor( _name: string, _idade: number, _dataNasc: Date,private _cnpj: string) {
        super(_name + '- jurídica', _idade, _dataNasc);
        this._cnpj = _cnpj;
    }
    get cnpj(): string{
        return this._cnpj;
    }
    set cnpj(cnpj){
        this._cnpj = cnpj;
    }
}