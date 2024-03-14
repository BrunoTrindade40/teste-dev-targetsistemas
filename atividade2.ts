/*
  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacci(n: number): number {
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function quadradoPerfeito(n: number): boolean {
  let raiz = Math.sqrt(n);
  return (raiz * raiz == n);
}

function verifica(n: number): boolean {
  return quadradoPerfeito(5 * Math.pow(n, 2) + 4) || quadradoPerfeito(5 * Math.pow(n, 2) - 4);
}

export { fibonacci, verifica };

