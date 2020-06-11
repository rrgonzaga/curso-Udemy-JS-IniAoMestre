# curso-Udemy-JS-IniAoMestre
Repositorio do curso de JavaScript - do iniciante ao Mestre da Udemy

# Seção 13: Aula 72 - Arrays - Métodos parte 1 - every(), some(), filter(), forEach(), indexOf, lastIndexOf

- Testando a função every() do array onde permite fazer um teste com cada elemento do array onde todos os elementos precisam satisfazer uma condição para retornar true. 
- Testando a função some() do array onde permite fazer um teste com cada elemento do array onde pelo menos um elemento precisa satisfazer uma condição para retorna true.
- Testando a função filter() do array onde permite fazer um teste com cada elemento do array onde a função retorna um novo Array apenas com os elementos que atenderam a uma condição. 
- Testando a função forEach() do array onde permite fazer uma iteraçao com cada elemento do array. Método muito usado para fazer loop sendo uma alternativa ao uso do loop for, while e 'do while'.
- Testando as funções indexOf e lastIndexOf de um array para retornar a posição de um determinado elemento no array. Caso o elemento a ser procurado/pesquisado não exista, as funções retornam -1.

# Seção 13: Aula 73 - Arrays - Métodos parte 2 - map(), concat(), join()

- Testando o método map() do array onde permite fazer uma iteraçao com cada elemento do array para gerar um novo elemento, normalmente calculado a partir do elemento original, e o retorno deste método é um novo array com os novos elementos.
- Testando o método concat() do array para concatenar/juntar arrays. Além de concatenar arrays, podemos concatenar elementos fora do array. O retorno deste método é um novo array com todos os elementos passados por parâmetro. Ex.: arr.concat(numeros, arr2, 100, 200, 300);
- Testando o métdo join() do array que converte os elementos de um array em uma string. Semelhante ao método toString(). A diferença é que podemos passar por parâmetro um separador de elementos para o método join(). Exemplo: arr2.join(', '). Saída: 1, 2, 3, 4, 5

# Seção 13: Aula 74 - Arrays - Métodos parte 3 - push(), pop(), shift(), unshift()

- Testando o método push() onde permite acrescentar itens no final do array. Pode ser usado para acrescentar mais de um item no final do array de uma só vez. Ex.: arr.push('2', '3'). Este método não gera um novo array, ou seja, altera diretamente o array original. 
- Testando o método pop() onde permite excluir o último item do array. Ex.: var ultimoItem = arr.pop(). Este método não gera um novo array, ou seja, altera diretamente o array original.
- Testando o método shift() onde permite excluir o primeiro item do array. Ex.: var primeiroItem = arr.shift(). Este método não gera um novo array, ou seja, altera diretamente o array original.
- Testando o método unshift() onde permite acrescentar itens no início do array. Ex.: arr.shift(-2, -1, 0). Este método não gera um novo array, ou seja, altera diretamente o array original.

# Seção 13: Aula 75 - Arrays - Métodos parte 4 - reduce(), reverse()

- Testando o método reduce() que reduz um array para um valor único. O método reduce() executa uma função para cada valor do array. O valor de retorno da função é armazenado em um acumulador (result/total). Obs.: Este método não modifica o array original. Sintaxe: array.reduce(function(total, currentValue, currentIndex, arr), initialValue). 
Parâmetros: total: requerido (valor inicial ou valor retornado anteriormente da função); currentValue: requerido (valor do elemento atual); currentIndex: opcional, arr: opcional e initialValue: opcional (um valor a ser passado para a função como valor inicial).
- Testando o método reverse() que inverte a ordem dos elementos de um array. Obs.: Este método modifica o array original.

# Seção 13: Aula 76 - Arrays - Métodos parte 5 - slice() e splice()

- Testando o método slice() que retorna um pedação de um array. Devolve um pedação da array a partir da posição (não é o índice), indicado no método. Exemplo: arr.slice(2). Retorna um novo array a partir da posição 2 até o último elemento. Obs.1: Posição é diferente de índice. Índice começa sempre com 0 e posição com 1. Obs.2: O elemento da posição 2 não é incluído. Obs.3: No exemplo arr.slice(2,4), o array retornado é a partir da posição 2 (elemento não incluído) até a posição 4 (elemento incluído).
- Testando o método splice(), método bastante flexível onde permite acrescentar ou excluir qualquer elemento do array em qualquer posição. Retorna um novo array com os elementos excluídos e modifica o array original. 
Exemplo: arr2.splice(2, 2, '3','4','5','6'). A partir da posição 2 (não inclusa), exclua dois elementos e acrescente os elementos '3','4','5','6' a partir da posição 2.



