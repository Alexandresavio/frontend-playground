/**
 * sintaxe de declaração variaveis 
 * var <identificador> = <valor>
 * **/
var a = 3;
 /* var -> tem escopo global: As variáveis declaradas com var 
 * têm escopo de função ou escopo global, o que significa que 
 * são visíveis em toda a função em que são declaradas. 
 */
console.log("Aqui variável 'a' é igual a: "+a);

let b = 4;
/* Let -> Escopo de bloco: As variáveis declaradas com let têm escopo de bloco,
 * o que significa que são visíveis apenas dentro do bloco em que são declaradas,
 * incluindo blocos if, loops for, while, etc. 
 */
console.log("Aqui variável 'b' é igual a: "+b);

var a = 30;// var permite redeclarar a variavel quantas vezes quiser.
console.log("Aqui variável 'a' recebe um novo valor é igual a: "+a);

b = 45; //let permite declarar a variavel apenas uma vez dentro do mesmo escopo.
console.log("Aqui variável 'b' recebe um novo valor é igual a: "+b);

function exemploVar() {
    var x = 10;
    if (true) {
        var x = 20; // Redeclaração permitida
        console.log(x); // 20
    }
    console.log(x); // 20 (valor reatribuído)
}
exemploVar()// chamada da funcao


//sintaxe de declaração constante
const c = 50;
//c = 5
console.log(c);

 