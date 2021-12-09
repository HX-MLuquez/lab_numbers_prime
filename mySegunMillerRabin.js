// teorema de Miller-Rabin

//  EXTRAÍDA DE MI HELLO DE PYTHON A JS JUAJAAAA


function test_Miller_Rabin(n, k) {
    var randint = 0;
    if (n == 2) {
        return true;
    }
    if ((n%2) == 0) {
        return false;
    }
    var d = n - 1;
    var s = 0;
    while ((d%2) == 0) {
        var d = Math.floor(d / 2);
        s++;
    }
    for (var _ = 0; _ < k; _++) {
        // La función randint() devuelve un número entero incluido entre los valores indicados. Los valores de los límites inferior y superior también pueden aparecer entre los valores devueltos
        var a = parseInt(2, n - 2);
        // pow devuelve el resultado de elevar x a y. A diferencia de la función integrada pow o del operador **, math. pow siempre devuelve un número real, aun cuando x e y sean números enteros
        var x = Math.pow(a, d, n);
        if (x == 1 || x == n - 1) {
            continue;
        }
        var __break1__ = false;
        for (var _ = 0; _ < s - 1; _++) {
            var x = Math.pow(x, 2, n);
            if (x == n - 1) {
                __break1__ = true;
                break;
            }
        }
        if (!__break1__) {
            console.log(n, " no es primo");
            return false;
        }
    }
    console.log(n, " es primo");
    return true;
};

test_Miller_Rabin(13, 10);

// jua jua no está funcionando parece









// function mySegunMillerRabin(n, k) {
//     if (n < 2) {
//         console.log("El número debe ser mayor que 1");
//         return false;
//     }
//     if (n == 2) {
//         console.log("Es primo");
//         return true;
//     }
//     if (n % 2 == 0) {
//         console.log("n = " + n + " es par");
//         return false;
//     }
//     var s = 0;
//     var d = n - 1;
//     while (d % 2 == 0) {
//         d /= 2;
//         s++;
//     }
//     for (var i = 0; i < k; i++) {
//         var a = Math.floor(Math.random() * (n - 2)) + 2;
//         var x = Math.pow(a, d, n);
//         if (x == 1 || x == n - 1) continue;
//         for (var r = 1; r < s; r++) {
//             x = Math.pow(x, 2, n);
//             if (x == 1) return false;
//             if (x == n - 1) break;
//         }
//         if (x != n - 1) {
//             console.log(n, " No es primo");
//             return false;
//         }
//     }
//     console.log(n, " Es primo");
//     return true;
// };
// // esta function esta funcionando muy mal o no la entiendo
// mySegunMillerRabin(299881, 200);


// // def test_Miller_Rabin(n: int, k: int) -> bool:
// //     s, d = satisfacen n = 2**s * d + 1, d impar
// //     repetir k veces:
// //         a = entero al azar entre 2 y n-1
// //         fpp = False # fuertemente primo en base a
// //         if 1 == a**d % n:
// //             fpp = True
// //         else:
// //             r = 0
// //             while r  <= s and fpp == False:
// //                 if n - 1 == a**(2**r * d) % n:
// //                     fpp = True
// //          if fpp == False: # si no pasa la prueba
// //             return False
// //     # si pasó las k pruebas
// //     return True


// // function mySegunMillerRabin(n) {
// //     for (var i = 2; i < n; i++) {
// //         let potencia = (n-1)/2
// //         let result = Math.pow(i,potencia);
// //         console.log('resut es ',result);
// //         if (result !== 1 || result !== -1) {
// //             console.log(n, " No es primo");
// //             return false;
// //         }
// //     }
// //     console.log(n, " Es primo");
// //     return true;
// // };

// // mySegunMillerRabin(7);




// //  Pruebas de primordialidad
// // Dado un número entero , como podemos saber si es primo? Asumir es impar, ya que el caso par es trivial.
// // La idea más obvia es buscar factores de , pero no se conoce ningún algoritmo de factorización eficiente.
// // La prueba de Fermat
// // Según el teorema de Fermat , si es primo, entonces para cualquier  tenemos
// // . Esto sugiere la prueba de Fermat para un primo: elija un  entonces mira si
// // . Si no entonces  debe ser compuesto.
// // Sin embargo, la igualdad puede mantenerse incluso cuando no es primo. Por ejemplo, tome. Según el teorema del resto chino
// // así cada corresponde a algunos
// // Según el teorema de Fermat, y
// // . Dado que 2, 10 y 16 dividen 560, esto significa
// // , en otras palabras, para cualquier.
// // Así que no importa qué  elegimos  siempre pasa la prueba de Fermat a pesar de ser composite siempre que  es coprime a . Tales números se llaman números de Carmichael y resulta que hay infinitos de ellos.
// // Si  no es coprime a  entonces falla la prueba de Fermat, pero en este caso podemos recuperar un factor de  por computación .
// // La prueba de Miller-Rabin
// // Podemos hacerlo mejor recordando  es primo si y solo si las soluciones de están .
// // Así que si  pasa la prueba de Fermat, es decir,
// // , luego también verificamos a((n-1)/2)= +1 o -1.

