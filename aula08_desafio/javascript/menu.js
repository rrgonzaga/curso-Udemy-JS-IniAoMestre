// Seção 09: aula 63. Usar JavaScript para melhorar a acessibilidade do hamburguer menu
/*
    - Deixar o hamburguer menu mais acessível usando atributos ARIA (aria-controls e aria-expanded).
    - Uso das funções getAttribute e setAttribute
*/ 
(function(){
        'use strict';
        var $html = document.querySelector("html");
        var $btnMenu = document.querySelector(".header-nav__hamburgger");

        var ariaControl = $btnMenu.getAttribute('aria-controls');

        var $menu = document.getElementById(ariaControl);

        $html.classList.remove("no-js");
        $html.classList.add("js");

        function toogleMenu() {            
            $html.classList.toggle("menu-opened");
            var ariaExpanded = this.getAttribute('aria-expanded') === "true";

            $btnMenu.setAttribute('aria-expanded',!ariaExpanded);
            $menu.setAttribute('aria-expanded', !ariaExpanded);
        }

        $btnMenu.addEventListener("click", toogleMenu);

})();