const divhijo$$ = document.querySelector('.hijo');
const input$$ = document.querySelector('input');
const divpadre$$ = document.querySelector('.padre');

function cambiarColorHijo() {
    divhijo$$.style.backgroundColor = input$$.value;
    setTimeout(() => {
        divpadre$$.style.backgroundColor = input$$.value;
    }, 2000);
}

input$$.addEventListener("change", cambiarColorHijo);






