/* 5) Escreva um programa que inverta os caracteres de um string.


  IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; */

export function strReverso(str: string) {
  let retorno = "";

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i);
    retorno += str[i];
  }
  return retorno;
}