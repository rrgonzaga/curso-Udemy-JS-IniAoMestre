// Seção 11: Aula 67 - Desafio - 

/* 
	- Desafio: Tratar a saída da função que calcula a média e retornar um número com apenas duas casas decimais.  
    
*/
function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return (total / qtd).toFixed(2);
}