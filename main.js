// const numeros = [4, 5, 6, 7];

// let resultado = numeros[0] + numeros[3];
// console.log(resultado);



// const numeros = [4, 5, 6, 7];
// for(let index = 0; index < 4; index++){
//     console.log(numeros[index]);
// }

// let productos =[
//     {id: 1, nombre: "campera", precio: 1400},
//     {id: 2, nombre: "gorra", precio: 700},
//     {id: 3, nombre: "remera", precio: 500},
//     {id: 4, nombre: "mochila", precio: 100},
//      ];

//      let nombre = prompt ("ingrese el nombre del producto");
//      let encontrado = productos.find((item)=> item.nombre===nombre);

//      if(encontrado){
//         alert(`
//         id: ${encontrado.nombre}
//             nombre: ${encontrado.nombre}
//             precio: ${encontrado.precio} 
//         `);
//      }else{
//         alert("el producto no esta disponible")
//      }

//     //sintaxis
//      let arreglo = [];

//      //elementos iniciales 
//      let lenguajes = [ 'html5', 'css3', 'javascript' ];

//      //valor de arreglo
//      console.log(lenguajes); 
//      console.log(lenguajes[0])
//      console.log(lenguajes[1])
//      console.log(lenguajes[2])

//      //metodos pop push shift unshift
//      let numeros = [
//         'uno',
//         'dos',
//         'tres'
//      ];
//      console.log(numeros);
//      numeros.push('cuatro');
//      console.log(numeros);
//      numeros.pop();
//      console.log(numeros); 

// let div = document.querySelector('div')

// function colores(){
//    div.innerHTML = "esto es JS"
//    div.style.marginTop ="50px"
//    div.style.background ="aliceblue";
// }

// import { storage } from "./Storage.js";
let btn = document.querySelector('#btn1');
btn.addEventListener('click',() =>{
   let nombrenuevo = document.querySelector('#nombrenuevo');
   document.querySelector('#nom').innerHTML = nombrenuevo.value;
   window.localStorage.setItem('usuario',nombrenuevo.value);
   storage.asignar('usuario',nombrenuevo.value);
   nombrenuevo.value = '';
});
let nombreLocal = storage.obtener('usuario');
document.querySelector('#nom').innerHTML = nombreLocal;


