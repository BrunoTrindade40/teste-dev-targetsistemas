/*
  4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

  Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

  Acendo o Primeiro interruptor e espero alguns minutos, apago o primeiro e acendo o segundo:
  1) Se a Lampada A estiver acesa: 2º = A -> 1 e 3 = B e C
  2) Se a Lampada A estiver apagada mas estiver quente: 1º = A -> 2 e 3 = B e C
  3) Se a Lampada A estiver apagada mas estiver Frio: 3º = A -> 1 e 2 = B e C

  Retorno à sala, apago o Segundo, Acendo o Primeiro interruptor e vou para a Lampada B

  Lampada B estiver Acesa(1 = B) e 1 for V: 1º = B | 2º = A | 3º = C
  Lampada B estiver Acesa(1 = B) e 3 for V: 1º = B | 2º = C | 3º = A
  Lampada B estiver Apagada(1 != B) e 1 for V: 1º = C | 2º = A | 3º = B
  Lampada B estiver Apagada(1 != B) e 2 for V: 1º = A | 2º = B | 3º = C
  Lampada B estiver Apagada(1 != B) e 3 for V: 1º = C | 2º = B | 3º = A
*/
