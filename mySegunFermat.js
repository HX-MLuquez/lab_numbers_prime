// ----->  en teorema FERMAT  <-----


function fermat(n) {
    // let poten = Math.pow(3, n-1);
    // console.log('potencia is ', poten);
    // con números grandes tipo 561 solo funciona con el dos
    // ya que si usamos algo mayor a dos el resultado de esa potencia
    // el programa no lo puede analizar y nos devuelve infinity,
    // siendo infinity % n (cualquier número) = NaN
    let result = Math.pow(2, n-1) % n;
    console.log('si el resto es: ', result);
    if (result == 1) {
        console.log("Es primo");
        return true;
    } else {
        console.log("No es primo");
        return false;
    }
};

// testeando el 561 que es el primo de fermat primero en no ser primo
// y descubierto por Carmichael
fermat(561);



// el test de Fermat. Si 413 fuera primo, tendríamos que 2413 – 1=2412 dejaría de resto 1 al dividirlo entre 413, pero en realidad el resto de esa división es 359. Conclusión: 413 no es un número primo. Os invito a que probéis con otros números y que nos contéis vuestros resultados.
// Probemos ahora con otro número. Vamos a tomar uno mucho más pequeño para no eternizarnos con las operaciones: el 17. Comencemos tomando a=2 y viendo qué nos da la aplicación del pequeño teorema de Fermat:
// 217-1=216=65536, que al dividirlo entre 17 deja resto 1
// Probemos ahora con a=3:
// 317-1=316=43046721, cuya división entre 17 nos da, de nuevo, resto 1
// Podéis probar con cualquier otro número, ya sea mayor o menor que 17, pero que no tenga factores comunes con él (por ejemplo, no valdrían ni el 51 ni el 85), y en todos los casos obtendréis resto 1.
// ¿Nos dice esto que 17 es un número primo? Pues…no, por desgracia no. Lo único que nos asegura esto es que no podemos descartar que 17 sea primo…
// …pero sabemos que 17 sí es primo. Si probáis con cualquier otro número primo, tal y como dice el pequeño teorema de Fermat, siempre obtendréis resto 1 en las divisiones que el teorema dice que hagamos. Por esto, no sería descabellado pensar que los primos son los únicos que cumplen esta propiedad (vamos, que el recíproco del pequeño teorema de Fermat también es cierto), pero, ohhhhh, no es así.
// El 561 es el menor número compuesto que pasa el test de Fermat. Es, por tanto, el primer número de Carmichael.
// Hay números n que cumplen que, para todo a primo relativo con ellos, las divisiones dan siempre resto 1 sin que dicho número n sea primo. Estos números se denominan números de Carmichael, debido a que fue Robert Carmichael el que encontró el primero de ellos, el 561, en 1910.
// Un número a que cumple que, para cierto n, la “división de Fermat” da resto 1 se llama testigo de Fermat. Este nombre se debe a que el hecho de que esto ocurra nos da como pista que el número n podría ser primo (aunque no nos lo asegure). Los números de Carmichael son números compuestos que cumplen que todos los números primos relativos con ellos son testigos de Fermat.
// Efectivamente, 2560 deja resto 1 al dividirlo entre 561; 5560 también deja resto 1 al dividirlo entre 561; y lo mismo pasa para cualquier otro valor de a que sea primo relativo con 561, lo que nos podría llevar a pensar que 561 puede ser primo…
// …pero sabemos que no lo es, y se puede ver de una manera muy sencilla: como sus cifras suman 12, que es múltiplo de 3, tenemos asegurado que 561 es múltiplo de 3, y por tanto compuesto. Vamos, que es un número con apariencia de primo (pasa el “test de Fermat”) pero que en realidad no es primo.
// Como acabamos de comentar, usar el test de Fermat (o cualquier otro) para sacar alguna conclusión sobre la primalidad del número 561 es una tontería, ya que es fácil y rápido ver que es un número compuesto, pero para otros números sí nos puede venir bien para hacernos una idea sobre si son primos o no. Imaginad un número n que sea, por ejemplo, producto de dos primos de 50 dígitos cada uno. Si le pasamos el test de Fermat comenzando con los valores de a más pequeños (para que las operaciones sean lo más cortas posibles) y obtenemos siempre resto 1, ¿qué pensaríamos? Pues que es bastante probable que el número sea primo, y por eso tiene sentido que se le llame primo probable.
// Pero hemos dicho que nuestro número es producto de dos números primos, y por tanto no es primo. Al ser compuesto, pasa a denominarse pseudoprimo (habría que hacer alguna puntualización al respecto de esto último, pero como no nos hace falta me la salto).
// Los números de Carmichael, también llamados pseudoprimos absolutos