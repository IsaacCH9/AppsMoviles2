//FUNCIONES01
/*function hello(){
    console.log('Hola Js');
    console.log('Hola html');
    console.log('Hola css');
}

hello();
hello();
hello();
hello();
hello();
*/

//retorno de una funcion


/*function hello(){02
    return "Hola Js";
}

const result = hello();
console.log(result);
*/
//hello();

/*function hello(){03
    return 10;
}

//const result = hello();
console.log(hello());
*/

//retorna  valor del objeto
/*
function hello(){04
    return (
         nombre:"Raul"
    )
}
console.log(hello());
*/

//funcion que retorna a otra funcion 05
/*function hello(){
    return function (){
        return 'Hola Js'
    }

}

console.log(hello()());
*/
//retorna objeto vacio06
/*
function hola(){
    return ();  
}
*/

//--- USO DE PARAMETROS DE FUNCIONES ---07
/*function helpconJS(name){
    return 'Hola' + name
}

console.log('Isaac');
console.log('Carbajal');
console.log('Chimal');
*/

//pasar mas de un parametro a la funcion 08
/*
function helpconJS(x,y){
    return x / y;
}

console.log(helpconJS(10,20));
console.log(helpconJS(10,80));
*/

//control de errores en parametros 09
/*function helpconJS(x,y=0){
    return x + y;
}

console.log(helpconJS(10));*/
//=== OBJETOS ===
const user = {
    nombre : 'Reyes',
    apellidoM : 'Alvarado',
    edad : 50,
    edoCivil:'Separado',
    domicilio :{
        ciudad: 'CDMX',
        calle: 'Agustin Melgar',
        numero: 100125
    },
    amigos:['Agustin', 'Mario'],
    activo:false,
    sendMensaje: function(){
        return 'enviando msj'
    }
}

//alert ciudad, calle, numero...
//consola, los amigos
//alert (activo o dado de baja)
//consola nombre, apellidos, estado civil....!!!
//alert (estado del mensaje)

alert(user.domicilio.ciudad);
alert(user.domicilio.calle);
alert(user.domicilio.numero);
console.log(user.amigos);

alert(user.activo);
console.log(user.nombre);
console.log(user.apellidoM);
console.log(user.edoCivil);
console.log(user.domicilio);
console.log(user.activo);

alert(user.sendMensaje);