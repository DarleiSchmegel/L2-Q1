# Questão 1

## L2code - Avaliação Técnica - Programa de Desenvolvedores Trainees

### Aspirador Inteligente

Uma empresa está construindo um robô aspirador, porém acabou
economizando demais em peças importantes e o robô terminou sem nenhum sensor
para localizar onde está posicionado ao concluir uma limpeza. O robô possui
conhecimento das dimensões do ambiente em que está, e registra a direção em que
está se deslocando. O motor do robô o permite girar 90 graus para a esquerda ou
direita, e andar uma unidade de distância para frente ou para trás, permitindo
calcular sua posição final com o histórico de movimentos.
Seu trabalho é implementar um algoritmo que determine a posição final do robô
quando ele terminar a limpeza, para que ele consiga calcular o caminho de volta
para a base.

Considere a posição inicial do robô como as coordenadas 0,0 de um plano
cartesiano, e que ele inicialmente está olhando para o norte. O robô não pode
atravessar paredes, então as coordenadas do robô devem ser sempre maiores ou
iguais a zero, e a posição X do robô deve ser sempre menor que a largura da sala, e
a posição Y sempre menor que o comprimento.

Entrada: A entrada contém vários casos de teste, sendo cada um especificado por
um par de linhas. A primeira linha é composta por dois números separados por um
espaço, indicando a largura e comprimento do ambiente, e a segunda contém uma
sequência composta pelos caracteres F (indicando um passo para a frente), T
(indicando um passo para trás), E (indicando uma rotação 90° à esquerda sem se
deslocar) e D (indicando uma rotação de 90° para a direita sem se deslocar).

Saída: Para cada caso de teste da entrada o programa deverá devolver uma linha
correspondente, indicando a orientação final do robô (N para norte, S para sul, O
para oeste e L para leste) e as coordenadas X e Y.

# Para executar o projeto

### Requisitos

```
ts-node >= v10.9.1
```

### Comando para rodar o projeto

```
ts-node src/VacuumCleaner.ts
```
