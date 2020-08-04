let fila= document.querySelector(".contenedor-carousel");
let pelicula=document.querySelector(".pelicula");

let flecha_der=document.querySelector("#flecha-der");
let flecha_izq=document.querySelector("#flecha-izq");

//Asi que agrego un evento, para que cuando haga click en la flecha derecha, mueva el carousel
//Para probar el sroll, dejo temporalmente  overflow-x: scroll;, luego lo oculto
flecha_der.addEventListener('click', ()=>{
    //accion: scroll va a ser igual a lo que ya tenemos (0), mas el ancho del contenedor (offsetWidth)
    fila.scrollLeft += fila.offsetWidth;
}); 

flecha_izq.addEventListener('click', ()=>{
    //accion: scroll va a ser igual a lo que ya tenemos (0 o 1xxx), menos el ancho del contenedor (offsetWidth)
    fila.scrollLeft-=fila.offsetWidth;
})