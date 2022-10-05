

//CommonJS -> responsável por importar ou exportar os módulos
// Importando o módulo 'os' do node e colocando em uma variável
const os = require("os");
const { byteToGB } = require("../aula02/convertUnitStorage");
const fs = require("fs");
const { json } = require("stream/consumers");
// o módulo 'os ' está dentro da variável 'os', desta forma conseguimos acessar as propriedades e métodos deste módulo/objeto

setInterval(() => {
  const totalMen = parseInt(byteToGB(os.totalmem())).toFixed(2);
  const freMen = parseInt(byteToGB(os.freemem())).toFixed(2);
  const percent = parseInt((freMen / totalMen) * 100);

  const memoria = {
    total: `${totalMen} GB`,
    free: `${freMen} GB`,
    percent: `${percent} %`,
  };

  let dateTime = new Date().toLocaleString()
  let print = `${dateTime} ${JSON.stringify(memoria)}\n`

  console.clear();
  console.table(memoria);
  fs.appendFile('./aula02/log.txt', print ,'utf-8',()=>console.log('Log inserido'))
}, 1000);

// console.log(`Memória Livre: ${freMen}`, `Total de Memória : ${totalMen}`);