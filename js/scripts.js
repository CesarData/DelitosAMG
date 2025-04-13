//Declaración de constantes

const grafica = document.getElementById('grafica'); 
const boton_anual = document.getElementById('boton_anual'); 
const boton_desglose = document.getElementById('boton_desglose');
const boton_municipal = document.getElementById('boton_municipio');  
const boton_categoria = document.getElementById('boton_categoria'); 

//Botón Anual
boton_anual.addEventListener('click', () => {
    grafica.src = "img/delitos_por_annio_categoria.png";
});

//Botón Desglose
boton_desglose.addEventListener('click', () => {
    grafica.src = "img/delitos_por_annio.png";
});

//Botón Municipal
boton_municipal.addEventListener('click', () => {
    grafica.src = "img/delitos_municipio.png";
});

//Botón Categoría
boton_categoria.addEventListener('click', () => {
    grafica.src = "img/total_delitos_amg.png";
});