
function suma() {
    let A = 0;
    let B = 0;
    let S = 0;
    A = parseInt(prompt("Por favor ingrese el primer valor"))
    B = parseInt(prompt("Por favor ingrese el segundo valor"))
    S = A + B;
    alert ("La suma es: " + S);
}

function opBasicas(){
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;
    alert ("La suma es: " + S);
    alert("La resta es: " + R);
    alert("La multiplicacion es: " +M);
    alert("La division es: " +D)
}

function cuadradoNumero(){
    let A = 0;
    let C = 0;
    A = parseInt(prompt("Ingrese el valor"));
    C = A * A;
    alert("El cuadrado del numero es: " + C);
}

function areaTriangulo(){
    let B = 0;
    let A = 0;
    const D = 2;
    let O = 0;
    B = parseInt(prompt("Ingrese la base del triangulo"));
    A = parseInt(prompt("Ingrese la altura del triangulo"));
    O = B * A / D;
    alert("El area del triangulo es: " +O);

}
//un individuo desea invertir su capital en un banco y requiere un sistema que le 
//permita saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes del 1,7% mensual
function inversion(){
    let C = 0;
    const I = 1.7;
    let M = 0;
    let O = 0;
    let T = 0;
    C = parseInt(prompt("Ingrese cantidad a invertir"));
    M = parseInt(prompt("Ingrese numero de meses de la inversion"));
    O = C * I / 100;
    T = O * M;
    alert ("El interes total es de: " +T);

}

function nacimiento(){
    let E = 0;
    let A = 0;
    let F = 0;
    E = parseInt(prompt("Digite su edad"));
    A = parseInt(prompt("Digite el año actual"));
    F = A - E;
    alert("El año en que nacio es: " +F);

}

function conversion(){
    let M = 0;
    let P = 39.3701;
    let K = 0.001;
    let C = 0;
    M = parseInt(prompt("Digite el numero de metros"));
    C = M * K;
    alert ("El resultado a kilometros es: "+C);
    C = M * P;
    alert("El resultado en pulgadas es: "+C);
}

function mayor(){
    let N1 = 0;
    let N2 = 0;
    N1 = parseInt(prompt("Digite el primer numero"));
    N2 = parseInt(prompt("Digite el segundo numero"));

    if (N1==N2) {
        alert ("son iguales");
    }
    else if(N1>N2){
        alert (N1 + "Es mayor que: "+N2);
    }
    else{
        alert (N2 + " Es mayor que " + N1);
    }
}

function menor(){
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;
    let menor;
     
     N1 = parseInt(prompt("Digite el primer numero"));
     N2 = parseInt(prompt("Digite el segundo numero"));
     N3 = parseInt(prompt("Digite el tercer numero"));

     if (N1 <= N2 && N1 <= N3) {
        menor = N1 ;
     }
     else if (N2 <= N1 && N2 <= N3) {
        menor = N2;
     }
     else{
        menor = N3;
     }
     alert ("El numero menor es: " + menor);
}

function descuento(){
    let cantidad,precio,desc,compra,pagar;

	precio = parseInt(prompt("Ingresar precio"));
	cantidad = parseInt(prompt("Ingresar cantidad"));

	compra = precio*cantidad;
	desc = compra*0.15;
	pagar = compra-desc;

	alert("El desceunto es: "+desc);
	alert("El total a pagar es: "+pagar);
}
