
//Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
/*/let nombre= prompt("Ingrese su nombre")
nombre1=nombre.toLowerCase()
alert(nombre1)
nombre2=nombre.toUpperCase()
alert(nombre2)*/

// Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
/*/let numero1=parseInt(prompt("Ingrese un numero"))
let numero2=parseInt (prompt("ingrese otro numero"))
suma= numero1+numero2
alert("El resultado de la suma es "+ suma)
mayor=Math.max(numero1,numero2)
menor=Math.min(numero1,numero2)
resta=mayor-menor
alert("El resultado de la resta es "+resta )*/


//Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

/*/let texto= prompt("Ingrese un texto")
let vista= parseInt(prompt("Indique 1 si quiere ver el texto en consola o 2 para ver en pantalla"))
let texto1=texto.toUpperCase()
if(vista===1){
    console.log(texto1)
}else{
    alert(texto1)
}*/

//Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

/*/let numero1=parseInt(prompt("Ingrese un numero"))
let numero2=parseInt (prompt("ingrese otro numero"))
let operacion=parseInt(prompt("Ingrese una operación:1.SUMA,2.RESTA,3.MULTI, 4.DIV,5.POTENCIA"))
if(operacion===1){
    let suma= numero1+numero2
    alert("El resultado de la suma es "+ suma)
}else if(operacion===2){
    mayor=Math.max(numero1,numero2)
    menor=Math.min(numero1,numero2)
    resta=mayor-menor
    alert("El resultado de la resta es "+resta )
}else if (operacion===3){
    multi= numero1*numero2
    alert("El resusltado de la multiplicación es "+multi)
}else if(operacion===4){
    div=numero1/numero2
    alert("El resultado de la división es "+ div) 
}else if(operacion===5){
    pot=Math.pow(numero1,numero2)
    alert("El resultado de la potencia es de "+ pot)
}*/

/*/Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
Extra: investigar/googlear la función de Javascript "confirm"*/


/*/let numero1=parseInt(prompt("Ingrese un numero"))
let numero2=parseInt (prompt("ingrese otro numero"))
let operacion=parseInt(prompt("Ingrese una operación:1.SUMA,2.RESTA,3.MULTI, 4.DIV,5.POTENCIA"))
let continuar=true
while(continuar==true){

if(operacion===1){
    let suma= numero1+numero2
    alert("El resultado de la suma es "+ suma)  
    continuar=confirm("Desea conntinuar")  

}else if(operacion===2){
    mayor=Math.max(numero1,numero2)
    menor=Math.min(numero1,numero2)
    resta=mayor-menor
    alert("El resultado de la resta es "+resta )
    continuar=confirm("Desea conntinuar")
}else if (operacion===3){
    multi= numero1*numero2
    alert("El resusltado de la multiplicación es "+multi)
    continuar=confirm("Desea conntinuar") 
}else if(operacion===4){
    div=numero1/numero2
    alert("El resultado de la división es "+ div) 
    continuar=confirm("Desea conntinuar") 
}else if(operacion===5){
    pot=Math.pow(numero1,numero2)
    alert("El resultado de la potencia es de "+ pot)
    continuar=confirm("Desea conntinuar") 
}

}*///NO ME ANDA FLOR, NO SE PORQUE SI LE PONGO CONFIRMAR ME MUESTRA EL RESULTADO ANTERIOR

//Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.

/*/let nombres=[]
let continuar=""
while(continuar=== "S"){
    let nombre=prompt("Ingrese un nombre");
    nombres.push(nombre);
    continuar=prompt("Desea continuar: S/N");

}
console.log(nombres);*/ //TAMPOCO ME ANDA...
