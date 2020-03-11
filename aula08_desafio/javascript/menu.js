// Seção 08: aula 62. Exercício desafio - Resolução (solução do professor)
/*
    - Implementar o comportamento correto do menu hamburguer.  
    - Fazendo a melhoria da página permitindo que ela funcione mesmo sem JavaScript através da 
    classe no-js.
*/  
(function(){
        'use strict';
        var $html = document.querySelector("html");
        var $btnMenu = document.querySelector(".header-nav__hamburgger");

        $html.classList.remove("no-js");
        $html.classList.add("js");

        function toogleMenu() {            
            $html.classList.toggle("menu-opened");
        }

        $btnMenu.addEventListener("click", toogleMenu);

})();