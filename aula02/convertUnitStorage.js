const byteToMB = bytes => bytes /1024/1024

const byteToGB = bytes => bytes /1024/1024/1024


// O mudule.export permite exportar as funções para que sejam visíveis em outro arquivo, permitindo a reutilização e evitando repetição
module.exports={byteToMB, byteToGB}