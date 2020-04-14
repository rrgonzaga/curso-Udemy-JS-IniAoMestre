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

// Seção 12: Aula 70 - Função sortear

/* 
    - Função que sorteia um número inteiro de 0 a n-1. 
    - Ex.1: sortear(2) deve retornar 0 ou 1.
    - Ex.2: sortear(10) deve retornar de 0 a 9.
*/

function sortear(n) {

	var n_ = n || 1;

	var nSorteado = Math.random();
	console.log("nSorteado = ", nSorteado);

	nSorteado = nSorteado * n_;
	console.log("nSorteado * " + n_ + " = ", nSorteado);

	//Math.floor arredonda para baixo. Ex.: 0.99 arredonda para 0 ou 4.99874 para 4.
	nSorteado = Math.floor(nSorteado);
	console.log("Math.floor(nSorteado) = ", nSorteado);
	return nSorteado; 
}