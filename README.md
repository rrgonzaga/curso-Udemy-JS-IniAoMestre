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

# Seção 13: Aula 78 - Spread Operator (ECMAscrit 2015, ECMAScript 6)

- Spread Operator (...): Com este operador, os parâmetros (elementos) que estão dentro do array são passados como 
argumentos para uma função. Cada elemento do array é como um argumento. 
Ex.: calcularMedia(...[2,9,9,3]) é o mesmo que calcularMedia(2,9,9,3). 

# Seção 13: Aula 79 - Arrow Functions (ECMAscrit 2015, ECMAScript 6)

-  Arrow function: Um jeito mais simples de escrever funções. O símbolo => representa uma 
arrow function. Não preciso mais mencionar palavra function. 
Ex.:  var temNotaZero = notas.some((nota) => {
    	return nota === 0;
    });
- Caso eu tenha apenas um parâmetro para a função como o exemplo acima, posso retirar os 
parênteses do parâmetro. 
Ex.:  var temNotaZero = notas.some(nota => {
    	return nota === 0;
    });
- Caso eu tenha apenas uma linha de comando no corpo da função que retorna alguma coisa 
como no exemplo acima, posso retirar o comando return e as chaves do corpo da função. 
Ex.:  var temNotaZero = notas.some(nota => nota === 0);	

# Seção 14: Aula 83 - Métodos do objeto construtor Date

- O objeto do tipo Date sempre precisa ser instanciado; 
- Método getDay(): Retorna um número (tipo number) que representa o dia da semana, sendo 0 para domingo, 1 para segunda e assim sucessivamente. 
- Método getDate(): Retorna um número (tipo number) que representa o dia da data. 
- Método getMonth(): Retorna um número (tipo number) que representa o mês da data sendo 0 para Janeiro, 1 para fevereiro e assim sucessivamente. 
- Método getYear(): Retorna um número que representa a diferença do ano da data menos 1900, ou seja, retorna o  número de anos que se passaram após o ano de 1900 até o ano da data em questão. 
- Método getFullYear(): Retorna um número que representa o ano da data. 
- Método getHours(): Retorna um número (tipo number) que representa as horas da data.
- Método getMinutes(): Retorna um número (tipo number) que representa os minutos da data.
- Método getSeconds(): Retorna um número (tipo number) que representa os segundos da data.
- Método getTime(): Retorna um número que representa o timeStamp da diferença da data utilizada menos a data de 1º de Janeiro de 1970. Podemos considerar este método para gerar números exclusivos, ou seja, que não se repetem. Um outro comando javaScript que podemos usar para gerar um timeStamp é: +new Date();
- Método setTime(<< num. milessegundos >>). Método usado para definir em um objeto Date uma data/hora específica através de sua representação em milissegundos. 
- Método setDate(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinido o dia através do valor passado por parâmetro.
- Método setMonth(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinido o mês através do valor passado por parâmetro.
- Método setYear(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinido o ano através do valor passado por parâmetro.
- Método setHours(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinida as horas através do valor passado por parâmetro.
- Método setMinutes(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinido os minutos através do valor passado por parâmetro.
- Método setMilliseconds(<<num.>>): Retorna um número timeStamp que representa um data que foi redefinido os segundos através do valor passado por parâmetro.
- Método new Date(<<yyyy, MM, dd>>): Retorna um objeto do tipo Date criado a partir do ano, mês e dia passados por parâmetro. Ex.: new Date(1976,6,12). 
- Método new Date(<<yyyy, MM, dd, hh, mm, ss>>): Retorna um objeto do tipo Date criado a partir do ano, mês, dia, hora, minuto e segundo passados por parâmetro. Ex.: new Date(1976, 6, 12, 15, 45, 5).

# Seção 15: Aula 87 - Temporizadores 
-ATENÇÃO! O JavaScript é single thread, ou seja, somente um processo por vez é executado. O código principal e os temporizadores são executados em uma única thread, seguindo a ordem da fila de processos a serem executados, um processo de cada vez.

- Métodos temporizadores servem para executar funções JS depois de um certo tempo, ou seja, servem para adiar ou programar execuções de função JS de tempo em tempos.                 
- Estes métodos não são nativos da ECMAScript, ou seja, eles só estão disponíveis nos browsers "pendurados" em window. Não estão disponíveis, por exemplo, no nodeJs. 
- setTimeout(func, ms): Executa uma função depois de um determinado tempo de espera definido em ms. 
- setInverval(func, ms): Executa uma função e repete a execução desta função de acordo com um determinado tempo em ms até que seja excluída esta execução com o método clearInterval. 
- clearTimeout(func, ms): Limpa/exclui o agendamento da execução de uma determinada função definida com setTimeout. 
- clearInverval(func, ms): Limpa/exclui o agendamento da execução de uma determinada função definida com setInterval. 
