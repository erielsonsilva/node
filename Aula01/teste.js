//Commonjs -> responsável por importar ou exportar os módulos
// importanto o módulo os do node e colocando em uma variavel
const banana = require('os')

/*
o módulo os está dentro da variavel os, deste forma conseguimos
acessar as propriedades e métodos deste módulo/objeto.
*/
const totalMem = parseInt(os.totalMem() / 1024 / 1024)
const freeMem = parseInt(os.freeMem() / 1024 / 1024)

console.log('Memória Livre: ${freeMem}' , 'Total de Mémoria: ${totalMem}')
