//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//SE OCULTA EL MENU 
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//BARRITAS DE UNA BARRA IDENTIFICADAS POR UN ID
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//BARRAS GENERALES
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let java = document.getElementById("java");
crearBarra(java);
let python = document.getElementById("python");
crearBarra(python);
let php = document.getElementById("php");
crearBarra(php);
let android = document.getElementById("android");
crearBarra(android);


//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//VARIABLE PARA ANIMACION
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 11, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 7, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 5, 2, intervalJava);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 4, 3, intervalPython);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 8, 4, intervalPhp);
        },100);
        const intervalAndroid = setInterval(function(){
            pintarBarra(android, 6, 5, intervalAndroid);
        },100);
    }
}

//SE LLENA UNA BARRA CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#EC4E20";
    }else{
        clearInterval(interval)
    }
}

//SCROLLING DEL MAUSE PARA LLENAR LA BARRA
window.onscroll = function(){
    efectoHabilidades();
}