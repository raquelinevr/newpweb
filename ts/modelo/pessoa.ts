class Pessoa {
    protected _name: string;
    private _idade: number;
    private _dataNasc: Date;

    constructor(name: string,idade: number, dataNasc: Date) {
        this._name = name;
        this._idade = idade;
        this._dataNasc = dataNasc;        
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get idade(): number{
        return this._idade;
    }
    set idade(idade: number){
        this._idade = idade;
    }
    get dataNasc(): Date{
        return this._dataNasc;

    }
    set dataNasc(dataNasc: Date){
        this._dataNasc = dataNasc;
    }

}