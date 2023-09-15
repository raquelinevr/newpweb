const p1 = new Pessoa('zé lezin', 20, new Date('15/07/2023'));

const pj1 = new PessoaJuridica('josé da manga', 21, new Date('15/07/2023'), '123.321.456-00/123.00');

const pf1 = new PessoaFisica('gege do abacaxi', 19, new Date('11/01/2003'), '123.314.364-01');

console.log('Pessoa: ', p1.name + ',idade: ', p1.idade + 'data de nascimento: ', p1.dataNasc);

console.log('Pessoa física: ', p1.name + ',idade: ', p1.idade + 'data de nascimento: ', p1.dataNasc + ', CPF: ', pf1.cpf);

console.log('Pessoa jurídico: ', p1.name + ',idade: ', p1.idade + 'data de nascimento: ', p1.dataNasc + ', CNPJ: ' + pj1.CNPJ);